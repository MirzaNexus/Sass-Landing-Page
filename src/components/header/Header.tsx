"use client";
import ArrowRight from "@/assets/Vector2.png";
import NavLogo from "@/assets/logosaas.png";
import Vector from "@/assets/Vector.png";
import Menu from "@/assets/menu.svg";
import Image from "next/image";
// import { useEffect, useState } from "react";
const Header = () => {
  // const [lastScroll, setLastScroll] = useState(0);
  // const [show, setShow] = useState("baseColor");
  const Nav_Links = [
    { title: "About" },
    { title: "Features" },
    { title: "Customers" },
    { title: "Updates" },
    { title: "Help" },
  ];
  // function ScrollHandler() {
  //   if (window.scrollY > 5) {
  //     if (window.scrollY > lastScroll) {
  //       setShow("blur");
  //     } else {
  //       setShow("baseColor");
  //     }
  //   }
  //   setLastScroll(window.scrollY);
  //   console.log(lastScroll);
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", ScrollHandler);
  //   return () => {
  //     window.removeEventListener("scroll", ScrollHandler);
  //   };
  // }, [lastScroll]);

  return (
    <header className={`w-full sticky top-0 z-10`}>
      <div className="bar h-[46px] flex items-center justify-center bg-black py-[14px]">
        <span className="text-sm mr-4 text-white/60 hidden lg:block">
          This page is included in a free SaaS Website Kit.
        </span>
        <span className="text-sm mr-2 text-white/90">
          View the complete Kit
        </span>
        <Image src={ArrowRight} alt="arrow right" width="14" height="10" />
      </div>
      <nav
        className={`flex items-center justify-between px-1 sm:px-5 bg-[#EAEEFE]`}
      >
        <div className="flex items-center gap-[10px]">
          <Image src={NavLogo} alt="nav-logo" width="40" height="41" />
          <span className="font-semibold hidden lg:block">made by</span>
          <Image
            src={Vector}
            alt="nav-logo"
            width="15"
            height="16"
            className="hidden lg:block"
          />
          <span className="font-extrabold hidden lg:block text-lg">Framer</span>
        </div>
        <div className="h-[81px] px- flex items-center gap-6">
          {Nav_Links.map((item, index) => (
            <span key={index} className="hidden sm:block">
              {item.title}
            </span>
          ))}
          <button className="hidden sm:block button-primary">
            Get for free
          </button>
          <Menu className="block w-8 sm:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
