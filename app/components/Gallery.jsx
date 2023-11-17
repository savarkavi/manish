import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import { kayPhoDu, playfair_display } from "../fonts";
import { Eye } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Gallery = () => {
  return (
    <div className="sticky top-0 z-[999] bg-black h-screen">
      <div className="relative w-full h-[500px] xl:h-screen">
        <Image
          src="/snow.jpg"
          alt="gallery"
          fill
          className="object-cover opacity-80"
        />
        <div
          className={`${kayPhoDu.className} absolute top-12 left-1/2 -translate-x-1/2  text-2xl text-white`}
        >
          {/* <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href="/gallery">
                  <Eye className="w-8 h-8" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>click to see the whole Gallery</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> */}
          <p
            className={`${playfair_display.className} text-white text-sm 2xl:text-base`}
          >
            See the whole Gallery{" "}
            <Link href="/gallery" className="underline">
              here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
