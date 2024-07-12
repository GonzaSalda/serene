"use client";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import Link from "next/link";
import Image from "next/image";
import {AiOutlineMenu} from "react-icons/ai";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent"
    >
      {/* Topbar */}
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        topbar
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="assets/logo.svg"
              width={120}
              height={44}
              priority
              alt=""
            />
          </Link>
        </div>
        {/* Mobile nav trigger */}
        <div className="xl:hidden cursor-pointer">
            <AiOutlineMenu className="text-3xl text-primary"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
