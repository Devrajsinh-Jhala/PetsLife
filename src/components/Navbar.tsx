"use client";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/Button";
import { ModeToggle } from "./ToggleDarkMode";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  const { user } = useUser();

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1120px] mx-auto px-4">
      <Link className="flex items-center gap-2" href={"/"}>
        <div className="relative h-8 w-8 object-contain">
          <Image src={logo.src} alt="logo" fill />
        </div>
        <p className="font-bold text-sm sm:text-lg">Animal Haven</p>
      </Link>
      <ul className="hidden md:flex items-center gap-5">
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
      <div className="hidden md:flex items-center gap-x-3">
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

      <div className="flex items-center md:hidden gap-x-3">
        <div onClick={handleNav} className="block md:hidden link-cursor">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className=" flex items-center gap-x-3">
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
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-background text-foreground z-10 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <Link
          onClick={handleNav}
          className="flex p-4 items-center gap-2"
          href={"/"}
        >
          <div className="relative h-8 w-8 object-contain">
            <Image src={logo.src} alt="logo" fill />
          </div>
          <p className="font-bold text-lg">Animal Haven</p>
        </Link>
        <ul className="p-4 uppercase items-center">
          <Link onClick={handleNav} href={"/about"}>
            <li className="p-4 border-b">About</li>
          </Link>
          <Link onClick={handleNav} href={"/blog"}>
            <li className="p-4 border-b">Blog</li>
          </Link>

          <Link onClick={handleNav} href={"/courses"}>
            <li className=" px-4 pt-2 pb-2 border-b">Courses</li>
          </Link>
          <Link onClick={handleNav} href={"/pricing"}>
            <li className="p-4 border-b">Pricing</li>
          </Link>
          <Link
            onClick={handleNav}
            href={"https://petcom.vercel.app/"}
            target="_blank"
            referrerPolicy={"no-referrer"}
          >
            <li className="p-4">Community</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
