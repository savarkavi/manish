"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { caveat, nothing, playfair_display, windSong } from "../fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useMediaQuery } from "@react-hook/media-query";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 1279px)");

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const ref = useRef();

  return (
    <motion.div
      className="h-screen w-full sticky top-0 overflow-x-hidden"
      ref={ref}
    >
      <div className="w-screen rounded-xl">
        <motion.video
          src="/HomeVideo.mp4"
          loop
          autoPlay
          muted
          className="w-screen h-screen object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
        <motion.h1
          className={`${windSong.className} text-white text-7xl `}
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Manish Sharma
        </motion.h1>
        <motion.p
          className={`${caveat.className} text-2xl text-white`}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Photographer and Filmmaker
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero;
