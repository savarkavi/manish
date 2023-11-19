"use client";

import Image from "next/image";
import React from "react";
import { playfair_display } from "../fonts";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MyImage from "./MyImage";

const About = () => {
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            illo consectetur distinctio nobis dolorem dicta vero sequi? Adipisci
            molestiae ipsa iure dolorum alias. Numquam sapiente aliquid culpa
            ullam! Consequuntur neque a velit quis laudantium, cupiditate
            molestiae deleniti praesentium? Voluptatem veniam ullam maxime
            voluptatibus nemo tenetur? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Debitis voluptatem, laborum deleniti fugit,
            similique dolorum earum eum possimus, magni velit repellendus
            temporibus perferendis nostrum ipsa. Eum, dolorum eaque? Nostrum,
            ratione!
          </p>
        </div>
        <div className="relative w-[300px] xl:w-[500px]  sm:h-[400px] xl:h-[600px] rounded-xl">
          <Image
            src="/about.jpg"
            alt="about image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
