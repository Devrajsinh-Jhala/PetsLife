import React from "react";
import hero2 from "../../public/assets/hero2.png";
import hero4 from "../../public/assets/hero4.png";
import hero6 from "../../public/assets/hero6.png";
import hero8 from "../../public/assets/hero8.png";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

type Props = {};

const LandingSections = (props: Props) => {
  return (
    <section className="my-10 px-10 flex flex-col space-y-10">
      <section className="flex lg:flex-row flex-col items-center justify-center lg:justify-between">
        <div className="relative h-[300px] w-[300px] sm:h-[420px] sm:w-[420px]">
          <Image src={hero2.src} alt="Hero section" fill />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center">
          <div className=" font-bold text-3xl sm:text-4xl">
            <p>Explore the blog</p>
          </div>
          <p className="max-w-[500px] lg:text-left text-center mt-2 mb-6">
            We appriciate your valuable time and that&apos;s why we summarize
            from some of the best sources on Internet to bring you the best
            content possible so that you can get started quickly and
            effectively. If you feel there should be a blog on some topic please
            feel free to contact us and help us grow to community together.
          </p>
          <Button variant={"default"} size={"lg"}>
            <Link href={"/products"}>Read the blog</Link>
          </Button>
        </div>
      </section>
      <section className="flex lg:flex-row-reverse flex-col items-center justify-center lg:justify-between">
        <div className="relative h-[300px] w-[300px] sm:h-[420px] sm:w-[420px]">
          <Image src={hero6.src} alt="Hero section" fill />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="lg:text-left text-center font-bold text-3xl sm:text-4xl">
            <p>Invest in the best!</p>
          </div>
          <p className="max-w-[500px] text-center lg:text-left mt-2 mb-6">
            Our courses are designed by people who are experienced in pet
            handling and care. Our courses are well tested and can help you
            learn about nuances of pet training faster and easier. We also
            provide courses on pet grooming, pet care and on other critical
            areas.{" "}
            <b>
              Make sure to upgrade to the Pro Plan to access our courses. Visit
              Pricing page for more details.
            </b>
          </p>
          <Button variant={"default"} size={"lg"}>
            <Link href={"/courses"}>Explore Courses</Link>
          </Button>
        </div>
      </section>
      <section className="flex lg:flex-row flex-col items-center justify-between">
        <div className="relative h-[300px] w-[300px] sm:h-[420px] sm:w-[420px]">
          <Image src={hero4.src} alt="Hero section" fill />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="lg:text-left text-center font-bold text-3xl sm:text-4xl">
            <p>Fair Prices, Happy Pockets</p>
          </div>
          <p className="lg:text-left text-center max-w-[500px] mt-2 mb-6">
            We know the value of money and hence we strive for quality courses
            at cheapest prices availabe. We also acknowledge that not everyone
            is willing to spend their money on such courses hence we try to
            provide as many as free content in the form of blogs or community
            posts and articles.
          </p>
          <Link href={"/pricing"}>
            <Button variant={"default"} size={"lg"}>
              View Pricing Plans
            </Button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row-reverse items-center justify-between">
        <div className="relative h-[300px] w-[300px] sm:h-[420px] sm:w-[420px]">
          <Image src={hero8.src} alt="Hero section" fill />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="text-center lg:text-left font-bold text-3xl sm:text-4xl">
            <p>Join the community</p>
          </div>
          <p className="max-w-[500px] text-center lg:text-left mt-2 mb-6">
            Join various commmunities on Petcom where you can post for animals
            that are up for adoption, discuss over various topics, form your
            communities and engage with other like minded individuals to
            contribute your share towards the community.
          </p>
          <Link
            href={"https://petcom.vercel.app/"}
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <Button variant={"default"} size={"lg"}>
              Join the community
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default LandingSections;
