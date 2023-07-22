import React from "react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Pricing | Animal Haven",
  description:
    "This is the pricing page of Animal Haven application. You can view the nominal price along with great perks offered in exchange for it.",
};

type Props = {};

const Pricing = (props: Props) => {
  return (
    <>
      <section className="px-10 mt-10 mb-10">
        <p className="lg:text-5xl sm:text-4xl text-3xl font-bold">
          Simple, Fair Pricing
        </p>
        <section className=" px-8 mt-5 w-full flex flex-row  items-center justify-between">
          <div className="flex  mx-auto lg:flex-row mt-10 lg:mt-0 space-y-10 lg:space-y-0 flex-col items-center justify-between w-full">
            {/* Toggle Monthly Yearly */}
            <div className=" space-y-3 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 flex flex-col items-start dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Get instant access!
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Upgrade to the pro plan to get access to the exclusive course
                material that will make your journey smoother.
              </p>
              <form className="w-full" action={"/api/checkout"} method="POST">
                <Button
                  type="submit"
                  className="w-full "
                  variant={"default"}
                  size={"lg"}
                >
                  Purchase Plan
                </Button>
              </form>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center space-y-5">
              <div className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Some Benefits...
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are some of the benefits you get upon investing your
                  valuable money.
                </p>
                <p className="font-normal mt-5 text-gray-900 dark:text-white">
                  <ul className="flex flex-col  space-y-3">
                    <li>✔ Unlimited Access to Premium Content</li>
                    <li>✔ Notification about latest releases</li>
                    <li>✔ Prefrential bookings on any offline event</li>
                  </ul>
                </p>
              </div>
              <div className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Cancel Anytime
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  You can cancel your subscription anytime if you do not like
                  our service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Pricing;
