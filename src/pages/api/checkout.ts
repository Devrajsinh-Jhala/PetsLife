const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {

                        price: 'price_1NWGXZSBmZ497edrbOihW5Pb',
                        quantity: 1,
                    },
                ],
                payment_method_types: ['card'],
                mode: 'subscription',
                success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            });
            res.redirect(303, session.url);
        } catch (err: any) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}