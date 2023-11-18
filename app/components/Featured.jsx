"use client";

import React, { useState } from "react";
import { playfair_display } from "../fonts";
import Slider from "./Slider";

const Featured = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="bg-white min-h-screen xl:h-[calc(100vh-88px)] sticky top-0 xl:top-[30px] Featured py-8">
      <div className="w-full h-full xl:flex xl:flex-row xl:items-center xl:justify-between xl:gap-8 xl:px-6">
        <div className=" w-full xl:border xl:w-[400px] border-black p-6 flex flex-col gap-12 shrink-0 xl:shrink">
          <h2
            className={`text-2xl sm:text-3xl xl:text-xl text-center ${playfair_display.className}`}
          >
            FEATURED WORK
          </h2>
          <div className="max-w-[400px] mx-auto xl:hidden">
            <div className={`${currentSlide < 5 ? "block" : "hidden"}`}>
              <span className={`text-red-500 ${playfair_display.className}`}>
                Night City Ambience:
              </span>{" "}
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quia totam sed, aut in veniam vel. Minima incidunt praesentium
                beatae?
              </span>
            </div>
            <div
              className={`${
                currentSlide >= 5 && currentSlide < 10 ? "block" : "hidden"
              }`}
            >
              <span className={`text-red-500 ${playfair_display.className}`}>
                {" "}
                Structures, Space & Symmetry:
              </span>{" "}
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quia totam sed, aut in veniam vel. Minima incidunt praesentium
                beatae?
              </span>
            </div>
            <div
              className={`${
                currentSlide >= 10 && currentSlide < 15 ? "block" : "hidden"
              }`}
            >
              <span className={`text-red-500 ${playfair_display.className}`}>
                Slice of Life:
              </span>{" "}
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quia totam sed, aut in veniam vel. Minima incidunt praesentium
                beatae?
              </span>
            </div>
            <div
              className={`${
                currentSlide >= 15 && currentSlide < 20 ? "block" : "hidden"
              }`}
            >
              <span className={`text-red-500 ${playfair_display.className}`}>
                On Nature's End:
              </span>{" "}
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quia totam sed, aut in veniam vel. Minima incidunt praesentium
                beatae?
              </span>
            </div>
            <div
              className={`${
                currentSlide >= 20 && currentSlide < 25 ? "block" : "hidden"
              }`}
            >
              <span className={`text-red-500 ${playfair_display.className}`}>
                Black & White:
              </span>{" "}
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quia totam sed, aut in veniam vel. Minima incidunt praesentium
                beatae?
              </span>
            </div>
          </div>
          <ul
            className={`hidden xl:flex flex-col gap-8 ${playfair_display.className} text-sm 2xl:text-xl text-gray-400`}
          >
            <li
              className={`${
                currentSlide < 5 && "text-black"
              } transition-all duration-200`}
            >
              <span className={`${currentSlide < 5 && "text-red-500"}`}>
                Night City Ambience:
              </span>{" "}
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quia totam sed, aut in veniam vel. Minima incidunt praesentium
                beatae?
              </span>
            </li>
            <li
              className={`${
                currentSlide >= 5 && currentSlide < 10 && "text-black"
              } transition-all duration-200`}
            >
              <span
                className={`${
                  currentSlide >= 5 && currentSlide < 10 && "text-red-500"
                }`}
              >
                Structures, Space & Symmetry:
              </span>{" "}
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quia totam sed, aut in veniam vel. Minima incidunt praesentium
                beatae?
              </span>
            </li>
            <li
              className={`${
                currentSlide >= 10 && currentSlide < 15 && "text-black"
              } transition-all duration-200`}
            >
              <span
                className={`${
                  currentSlide >= 10 && currentSlide < 15 && "text-red-500"
                }`}
              >
                Slice of Life:
              </span>{" "}
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quia totam sed, aut in veniam vel. Minima incidunt praesentium
                beatae?
              </span>
            </li>
            <li
              className={`${
                currentSlide >= 15 && currentSlide < 20 && "text-black"
              } transition-all duration-200`}
            >
              <span
                className={`${
                  currentSlide >= 15 && currentSlide < 20 && "text-red-500"
                }`}
              >
                On Nature's End:
              </span>{" "}
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quia totam sed, aut in veniam vel. Minima incidunt praesentium
                beatae?
              </span>
            </li>
            <li
              className={`${
                currentSlide >= 20 && currentSlide < 25 && "text-black"
              } transition-all duration-200`}
            >
              <span
                className={`${
                  currentSlide >= 20 && currentSlide < 25 && "text-red-500"
                }`}
              >
                Black & White:
              </span>{" "}
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                quia totam sed, aut in veniam vel. Minima incidunt praesentium
                beatae?
              </span>
            </li>{" "}
          </ul>
        </div>
        <Slider setCurrentSlide={setCurrentSlide} />
      </div>
    </div>
  );
};

export default Featured;
