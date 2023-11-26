"use client";

import Image from "next/image";
import React, { useState } from "react";
import { playfair_display } from "../fonts";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MyImage from "./MyImage";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoading = () => {
    setImageLoaded(true);
  };

  return (
    <div className="xl:py-8 h-screen bg-stone-950 sticky top-[0]">
      <div className="flex flex-col xl:flex-row justify-center gap-20 items-center max-w-[1536px] mx-auto xl:mt-28">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            veritatis sint, repellat vero recusandae aspernatur ducimus minima
            expedita quos necessitatibus laborum facilis eius unde provident
            velit quod, itaque vitae? Nesciunt quod ducimus blanditiis. A odio
            quia incidunt, cumque minus voluptatum non ut doloribus nemo
            recusandae.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            beatae perferendis odio earum neque. Odio ut, beatae voluptatibus
            asperiores, fuga ab totam doloribus sapiente incidunt iste
            voluptates rem provident dolore.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            repellendus alias accusantium incidunt repudiandae vero? Earum
            distinctio ipsum necessitatibus harum minus non labore placeat.
            Accusantium repellat voluptate unde autem voluptatum! Quaerat illum
            neque, minima distinctio tenetur unde itaque perferendis culpa!
          </p>
        </div>

        <div className="relative w-[300px] xl:w-[500px]  sm:h-[400px] xl:h-[600px] rounded-xl">
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
