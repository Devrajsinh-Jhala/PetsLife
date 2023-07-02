import React from "react";
import heroImage from "../../public/assets/hero icon.png";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="my-10 flex items-center justify-between px-10 w-full">
      <div className="flex flex-col items-start">
        <div className=" font-bold text-4xl">
          <p>Welcome to Animal Haven!</p>
        </div>
        <p className="max-w-[500px] mt-2 mb-6">
          Get the best resources quickly to learn about pet training and other
          nuances of owning your next companion. We sell affordable courses to
          help you get started with areas such as pet training, pet grooming and
          general care.
        </p>
        <Button variant={"default"} size={"lg"}>
          <Link href={"/products"}>Explore Products</Link>
        </Button>
      </div>
      <div className="relative h-[420px] w-[420px]">
        <Image priority fill src={heroImage.src} alt="Hero Image" />
      </div>
    </section>
  );
};

export default HeroSection;
