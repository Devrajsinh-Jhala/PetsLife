"use client";
import Image from "next/image";
import { FC } from "react";
import logo from "../../public/assets/logo.png";
import { ModeToggle } from "./ToggleDarkMode";
import Link from "next/link";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/Button";

const Navbar: FC = () => {
  const { user } = useUser();

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
          <SignInButton mode="modal">
            <Button variant={"default"} size={"sm"}>
              Login
            </Button>
          </SignInButton>
        )}

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
