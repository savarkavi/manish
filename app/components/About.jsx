"use client";

import Image from "next/image";
import React, { useState } from "react";
import { playfair_display } from "../fonts";
import Typewriter from "typewriter-effect";
import "react-lazy-load-image-component/src/effects/blur.css";
import MyImage from "./MyImage";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoading = () => {
    setImageLoaded(true);
  };

  return (
    <div className="h-screen bg-stone-950 sticky top-[0] flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center gap-20 items-center max-w-[1536px] mx-auto xl:mt-16">
        <div
          className={`text-white max-w-[400px] items-center xl:text-left px-4 xl:p-0 flex flex-col gap-12 mt-20 ${playfair_display.className}`}
        >
          <div className="text-4xl sm:text-5xl xl:text-7xl flex gap-2 xl:gap-6">
            <h2>My</h2>
            <Typewriter
              options={{
                strings: ["Story", "Journey", "Lenses"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-xs xl:text-sm font-sans">
            In the intricate dance between light and shadow, where pixels weave
            the tapestry of captured moments, I find my sanctuary. Photography,
            to me, is more than freezing frames in time; it's a voyage into the
            profound, an exploration of the unseen, and a celebration of the
            fleeting beauty that whispers in every corner of existence.
            <br />
            <br />
            My portfolio is not just a collection of images; it's a narrative, a
            testament to the intertwining threads of moments that shape our
            lives. It is an invitation to embark on a visual journey, where
            every photograph is a chapter, and every click of the shutter is a
            penstroke crafting tales of existence. Here, the interplay of colors
            and contrasts mirrors the complexities of human experience, and the
            interweaving narratives echo the interconnectedness of all things.
            <br />
            <br />
            As you peruse these visual verses, may you find a reflection of your
            own stories, a resonance with the unspoken, and an appreciation for
            the transient beauty that graces our lives.
          </p>
        </div>

        <div className="relative w-[300px] lg:w-[500px] h-[400px] lg:h-[600px] rounded-xl">
          {!imageLoaded && (
            <div className="flex justify-center items-center h-full text-white">
              Image Loading...
            </div>
          )}
          <Image
            src="/about.jpg"
            alt="about image"
            fill
            className="object-cover rounded-xl"
            onLoad={handleImageLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
