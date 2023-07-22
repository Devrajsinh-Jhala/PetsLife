import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/logo.png";
import devraj from "../../../../public/assets/Devraj Zoomed.jpg";
import Link from "next/link";

type Props = {};

export const metadata = {
  title: "About | Animal Haven",
  description:
    "This is the about section of Animal Haven where you can get information on how this project was started and about its builder XD.",
};

const About = (props: Props) => {
  return (
    <section className="my-10 flex flex-col justify-center items-center px-10">
      <div className="relative h-44 w-44 rounded-full border border-foreground">
        <Image src={logo.src} alt="Logo" priority fill />
      </div>

      <div className="my-5 flex flex-col space-y-3">
        <p className="text-center max-w-[900px]">
          {" "}
          Hello there! Welcome to the{" "}
          <span className="font-bold">PetsLife</span> platfom. I started working
          on this platform when I got the idea to make something interesting in
          this area. As a pet owner, during the initial days, I used to search
          lots and lots of material online to learn how to take care of my pet
          in the best way possible.
        </p>
        <p className="text-center max-w-[900px]">
          {" "}
          I remember many a times I used to get confused due to availability of
          too much resources. Now having spent 2 beautiful years and going with
          my pet, I got to learn so many amazing things, interacted with so many
          people. I always found everyone to be very helpful and keen to make
          animals life more happier.
        </p>
        <p className="text-center max-w-[900px]">
          {" "}
          That&apos;s when I got the idea to make a platform dedicated for pet
          lovers known as{" "}
          <span>
            <Link
              className="text-blue-500"
              target="_blank"
              referrerPolicy="no-referrer"
              href={"https://petcom.vercel.app/"}
            >
              Petcom
            </Link>
          </span>{" "}
          and this platform where people can get guidance and learn more about
          various topics on their pets.
        </p>
      </div>

      <div className="my-12 flex flex-col items-center justify-center ">
        <div className="h-36 w-36 relative rounded-full border border-foreground ">
          <Image
            src={devraj.src}
            className="object-cover rounded-full"
            alt="Logo"
            priority
            fill
          />
        </div>

        <p className="sm:text-4xl text-2xl text-center mt-3 font-bold">
          Meet the builder... 👷‍♂️
        </p>

        <p className="mt-5 text-center max-w-[900px]">
          Hello! Really appreciate your valuable time here. I am Devraj Jhala,
          final year B.Tech. Computer Science and Engineering student at Pandit
          Deendayal Energy University, Gandhinagar, Gujarat. Currently I am a
          student working as a developer getting chance to work on various
          amazing projects.
        </p>
        <p className="mt-3 text-center max-w-[900px]">
          In my free time, I like to build such projects, test them, show them
          to people and get their valuable feedback. You can view some of my
          best projects and learn more about me by visiting my{" "}
          <span>
            <Link
              className="text-blue-500"
              target="_blank"
              referrerPolicy="no-referrer"
              href={"https://devraj-jhala.vercel.app/"}
            >
              Portfolio
            </Link>
          </span>
          . Also feel free to connect with me on{" "}
          <span>
            <Link
              className="text-blue-500"
              target="_blank"
              referrerPolicy="no-referrer"
              href={"https://www.linkedin.com/in/devrajsinh-jhala/"}
            >
              LinkedIn
            </Link>
          </span>
          ,{" "}
          <span>
            <Link
              className="text-blue-500"
              target="_blank"
              referrerPolicy="no-referrer"
              href={"https://twitter.com/JHALA_D_S"}
            >
              Twitter
            </Link>
          </span>
          . I would love to see your feedback.
        </p>
      </div>
    </section>
  );
};

export default About;
