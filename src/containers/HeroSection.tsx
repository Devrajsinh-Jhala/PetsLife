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
          One-stop destination for animal lovers. Explore our courses, delve
          into captivating blogs, and join our vibrant community. Expand your
          knowledge, connect with like-minded individuals, and make a positive
          impact on the lives of animals. Join us today and be a part of the
          change.
        </p>
        <Link href={"/about"}>
          <Button variant={"default"} size={"lg"}>
            Know about us
          </Button>
        </Link>
      </div>
      <div className="relative h-[420px] w-[420px]">
        <Image priority fill src={heroImage.src} alt="Hero Image" />
      </div>
    </section>
  );
};

export default HeroSection;
