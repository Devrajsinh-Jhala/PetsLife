import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Pricing | Animal Haven",
};

type Props = {};

const Pricing = (props: Props) => {
  return (
    <>
      <section className="px-10 mt-10 mb-5">
        <p className="text-5xl font-bold">Simple, Fair Pricing</p>
        <section className=" px-8 mt-5 w-full flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            {/* Toggle Monthly Yearly */}
            <div className="">
              <div className="bg-background text-foreground w-[450px] border border-foreground p-4 rounded-lg">
                <div>
                  <p className="text-2xl font-bold">Get instant access!</p>
                  <p className="mt-2">
                    Upgrade to the pro plan to get access to the exclusive
                    course material that will make your journey smoother.
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <p className="my-10 text-5xl font-bold">₹99.99</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center text-lg space-x-2">
                    <Label htmlFor="price">Montly</Label>
                    <Switch id="price" />
                    <Label htmlFor="price">Yearly</Label>
                  </div>
                </div>

                <Button className="w-full mt-5" variant={"default"} size={"lg"}>
                  Purchase Plan
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center space-y-5">
              <Card className="w-[450px]">
                <CardHeader>
                  <CardTitle>Some Benefits...</CardTitle>
                  <CardDescription>
                    Here are some of the benefits you get upon investing your
                    valuable money.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col space-y-3">
                    <li>✔ Unlimited Access to Premium Content</li>
                    <li>✔ Notification about latest releases</li>
                    <li>✔ Prefrential bookings on any offline event</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="w-[450px]">
                <CardHeader>
                  <CardTitle>Cancel Anytime</CardTitle>
                  <CardDescription>
                    You can cancel your subscription anytime if you do not like
                    our service.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Pricing;
