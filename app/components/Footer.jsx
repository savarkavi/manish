import React from "react";
import { playfair_display } from "../fonts";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black h-[250px] p-4 xl:p-8">
      <div className="flex justify-between w-full h-full">
        <div className="flex flex-col h-full justify-between">
          <h1
            className={`${playfair_display.className}  xl:text-2xl text-white uppercase`}
          >
            Manish Sharma <br /> Photography
          </h1>
          <h2 className={`text-xs text-white ${playfair_display.className}`}>
            Website by Savarkavi
          </h2>
        </div>
        <div className="flex gap-2 xl:gap-16">
          <ul
            className={`text-white flex flex-col gap-4 text-xs xl:text-sm ${playfair_display.className}`}
          >
            <li>Home</li>
            <li>Gallery</li>
            <li>Request a print</li>
          </ul>
          <div className={`flex flex-col gap-4 text-white text-xs xl:text-sm`}>
            <Link
              href="https://www.instagram.com/manishhsharmaa/"
              target="_blank"
            >
              Instagram
            </Link>
            <Link href="mailto:manish.s8126@gmail.com">Email</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
