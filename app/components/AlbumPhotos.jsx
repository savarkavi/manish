"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { useAlbum } from "@/context/AlbumContext";
import { Oval } from "react-loader-spinner";

const AlbumPhotos = ({ urls }) => {
  const { albumMode, toggleAlbumMode } = useAlbum();
  const [imagesLoaded, setImagesLoaded] = useState(
    Array(urls.length).fill(false)
  );

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 w-full h-full">
      {!albumMode ? (
        urls.map((url, i) => {
          return (
            <div
              className="relative w-[900px] h-[500px] lg:h-[800px] flex justify-center items-center"
              key={url}
            >
              {!imagesLoaded[i] && (
                <Oval
                  height={80}
                  width={80}
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                  className="absolute top-1/2 left-1/2"
                />
              )}
              <Image
                src={url}
                alt="Album image"
                fill
                className="object-contain"
                onLoad={() => handleImageLoad(i)}
              />
            </div>
          );
        })
      ) : (
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="h-[calc(100vh-50px)] w-screen flex justify-center items-center"
        >
          {urls.map((url, i) => {
            return (
              <SwiperSlide>
                <div className="relative h-full w-full flex justify-center items-center">
                  {!imagesLoaded[i] && (
                    <Oval
                      height={80}
                      width={80}
                      color="#4fa94d"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#4fa94d"
                      strokeWidth={2}
                      strokeWidthSecondary={2}
                      className="absolute top-1/2 left-1/2"
                    />
                  )}
                  <Image
                    src={url}
                    alt="Album image"
                    fill
                    className="object-contain"
                    onLoad={() => handleImageLoad(i)}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default AlbumPhotos;
