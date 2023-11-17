"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Slider = ({ setCurrentSlide }) => {
  const handleSlideChange = (i) => {
    setCurrentSlide(i);
  };

  return (
    <Swiper
      className="w-full h-[500px] xl:h-[850px]"
      modules={[Navigation]}
      navigation={true}
      onSlideChange={(current) => handleSlideChange(current.activeIndex)}
    >
      <SwiperSlide className="w-full h-[850px]" id="1">
        <div className="w-full h-full relative">
          <Image
            src="/night1.jpg"
            alt="night1"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="2">
        <div className="w-full h-full relative">
          <Image
            src="/night2.jpg"
            alt="night2"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="3">
        <div className="w-full h-full relative">
          <Image
            src="/night3.jpg"
            alt="night3"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="4">
        <div className="w-full h-full relative">
          <Image
            src="/night4.jpg"
            alt="night4"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/night5.jpg"
            alt="night5"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/Structure1.jpg"
            alt="Structure1"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/Structure2.jpg"
            alt="Structure2"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/structure3.jpg"
            alt="structure3"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/structure4.jpg"
            alt="structure4"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/structure5.jpg"
            alt="structure5"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/people1.jpg"
            alt="people1"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/people2.jpg"
            alt="people2"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/people3.jpg"
            alt="people3"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/people4.jpg"
            alt="people4"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/people5.jpg"
            alt="people5"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/nature1.jpg"
            alt="nature1"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/nature2.jpg"
            alt="nature2"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/nature3.jpg"
            alt="nature3"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/nature4.jpg"
            alt="nature4"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/nature5.jpg"
            alt="nature5"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/black1.jpg"
            alt="black1"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/black2.jpg"
            alt="black2"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/black3.jpg"
            alt="black3"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/black4.jpg"
            alt="black4"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[850px]" id="5">
        <div className="w-full h-full relative">
          <Image
            src="/black5.jpg"
            alt="black5"
            fill
            className="object-contain"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
