"use client";
import Image from "next/image";
import { FC } from "react";
import logo from "../../public/assets/logo.png";
import { ModeToggle } from "./ToggleDarkMode";
import Link from "next/link";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const Navbar: FC = () => {
  const { user } = useUser();
  console.log(user?.emailAddresses[0].emailAddress);

  return (
    <nav className="w-full my-5 flex items-center px-5 justify-between">
      {/* Logo */}

      <Link className="flex items-center gap-2" href={"/"}>
        <div className="relative h-8 w-8 object-contain">
          <Image src={logo.src} alt="logo" fill />
        </div>
        <p className="font-bold text-lg">Animal Haven</p>
      </Link>

      {/* List */}
      <div className="text-base cursor-pointer">
        <ul className="flex items-center gap-5">
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blog</li>
          </Link>

          <Link href={"/courses"}>
            <li>Courses</li>
          </Link>
          <Link href={"/pricing"}>
            <li>Pricing</li>
          </Link>
          <Link
            href={"https://petcom.vercel.app/"}
            target="_blank"
            referrerPolicy={"no-referrer"}
          >
            <li>Community</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        {user ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <SignInButton />
        )}

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
