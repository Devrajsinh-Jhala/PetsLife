import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/assets/logo.png";
import { FaLinkedin, FaTwitter, FaLink } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  const navLinks = [
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Courses", link: "/courses" },
    { name: "Pricing", link: "/pricing" },

    { name: "Community", link: "https://petcom.vercel.app/" },
  ];
  return (
    <footer className=" my-5 flex md:flex-row flex-col md:space-y-0 space-y-3 items-center px-5 justify-between">
      <div>
        <Link className="flex items-center gap-2" href={"/"}>
          <div className="relative h-8 w-8 object-contain">
            <Image src={logo.src} alt="logo" fill />
          </div>
          <p className="font-bold text-lg">Animal Haven</p>
        </Link>
      </div>
      <ul className="flex sm:flex-row flex-col gap-x-3 space-y-3 md:space-y-0 justify-center items-center">
        {navLinks.map((navLink, i) => (
          <Link key={i} href={navLink.link}>
            <li>{navLink.name}</li>
          </Link>
        ))}
      </ul>
      <div className="text-2xl flex items-center gap-x-5">
        <Link href={""}>
          <FaLinkedin />
        </Link>
        <Link href={""}>
          <FaTwitter />
        </Link>
        <Link href={""}>
          <FaLink />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
