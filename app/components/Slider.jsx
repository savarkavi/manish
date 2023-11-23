"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { imagesData } from "../utils/constants";
import { Skeleton } from "@/components/ui/skeleton";

const Slider = ({ setCurrentSlide }) => {
  const [imagesLoaded, setImagesLoaded] = useState(
    Array(imagesData.length).fill(false)
  );

  const handleSlideChange = (i) => {
    setCurrentSlide(i);
  };

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
    console.log("loaded");
  };

  return (
    <Swiper
      className="w-full h-[500px] xl:h-[800px] overflow-x-hidden"
      modules={[Navigation]}
      navigation={true}
      onSlideChange={(current) => handleSlideChange(current.activeIndex)}
    >
      {imagesData.map((data, i) => {
        return (
          <SwiperSlide
            key={data.alt}
            className="w-full xl:h-[800px] flex justify-center"
            id={i}
          >
            <div className="relative w-full h-full">
              {!imagesLoaded[i] && (
                <div className="flex justify-center items-center h-full">
                  Loading...
                </div>
              )}
              <Image
                src={data.src}
                alt={data.alt}
                fill
                className={`h-[800px] object-contain`}
                onLoad={() => handleImageLoad(i)}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
