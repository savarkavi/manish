"use client";

import React, { useRef, useState, useEffect } from "react";
import { Instagram, Mail, Menu, X } from "lucide-react";
import { playfair_display, nothing, windSong } from "../fonts";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "../utils/constants";

const HomeNav = () => {
  const [selected, setSelected] = useState(0);
  const [navWhite, setNavWhite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);

  const handleBackgroundColorChange = () => {
    if (navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const featuredRect = document
        .querySelector(".Featured")
        .getBoundingClientRect();

      if (navRect.bottom >= featuredRect.top) {
        setNavWhite(true);
      } else {
        setNavWhite(false);
      }
    }
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleBackgroundColorChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleBackgroundColorChange);
    };
  }, []);

  const handleLinkSelection = (i) => {
    setSelected(i);
  };

  const renderedLinks = navLinks.map((link, i) => {
    return (
      <Link
        href={link.link}
        className="z-[99]"
        key={i}
        onClick={() => handleLinkSelection(i)}
      >
        <div className="relative">
          <span className={``}>{link.name}</span>
        </div>
      </Link>
    );
  });

  return (
    <div
      className={`p-8 fixed left-0 top-0 w-full ${
        navWhite ? "bg-white" : ""
      }  z-[999] transition-all`}
      ref={navRef}
    >
      <div
        className={`flex justify-end ${
          navWhite ? "text-black bg-white" : "text-white "
        } px-4 items-center xl:hidden transition-all`}
      >
        <Menu className="cursor-pointer" onClick={handleMenuOpen} />
      </div>

      <div
        className={`flex flex-col xl:hidden gap-4 bg-black items-center justify-center text-white ${
          playfair_display.className
        } w-full h-[350px] fixed ${
          menuOpen ? "top-0" : "-top-[500px]"
        } left-0 transition-all duration-500`}
      >
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={handleMenuClose}
        >
          <X />
        </div>
        {renderedLinks}
        <div className="flex gap-4 mt-8">
          <Link
            href="https://www.instagram.com/manishhsharmaa/"
            target="_blank"
          >
            <Instagram />
          </Link>
          <Link href="mailto:manish.s8126@gmail.com">
            <Mail className="cursor-pointer z-[99]" />
          </Link>
        </div>
      </div>

      <div className="hidden max-w-[1536px] mx-auto xl:flex justify-between items-center">
        <h1
          className={`${windSong.className} ${
            navWhite ? "text-black" : "text-white"
          } text-3xl`}
        >
          M S
        </h1>
        <div className="flex items-center gap-8">
          <div
            className={`${
              navWhite ? "text-black" : "text-white"
            } flex items-center gap-8 
           ${playfair_display.className}
           text-lg transition-all`}
          >
            {renderedLinks}
          </div>

          <div
            className={`${
              navWhite ? "text-black" : "text-white"
            } flex items-center gap-8 `}
          >
            <Link
              href="https://www.instagram.com/manishhsharmaa/"
              target="_blank"
            >
              <Instagram className="cursor-pointer z-[99]" />
            </Link>
            <Link href="mailto:manish.s8126@gmail.com">
              <Mail className="cursor-pointer z-[99]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
