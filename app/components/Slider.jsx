"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { imagesData } from "../utils/constants";

const Slider = ({ setCurrentSlide }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleSlideChange = (i) => {
    setCurrentSlide(i);
  };

  const handleImageLoad = () => {
    setImagesLoaded(true);
    console.log(imagesLoaded);
  };

  return (
    <Swiper
      className="w-full h-[500px] xl:h-[800px] overflow-x-hidden"
      modules={[Navigation]}
      navigation={true}
      onSlideChange={(current) => handleSlideChange(current.activeIndex)}
    >
      {imagesData.map((data) => {
        return (
          <SwiperSlide
            key={data.alt}
            className="w-full xl:h-[800px] flex justify-center"
            id="1"
          >
            <div className="relative w-full h-full">
              <Image
                src={imagesLoaded ? data.src : "/loading.png"}
                alt={data.alt}
                fill
                className={`h-[800px] object-contain `}
                onLoad={handleImageLoad}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
