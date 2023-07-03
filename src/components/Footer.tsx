import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/assets/logo.png";
import { FaLinkedin, FaTwitter, FaLink } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className=" flex items-center justify-between">
      <div>
        <Link className="flex items-center gap-2" href={"/"}>
          <div className="relative h-8 w-8 object-contain">
            <Image src={logo.src} alt="logo" fill />
          </div>
          <p className="font-bold text-lg">Animal Haven</p>
        </Link>
      </div>
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
