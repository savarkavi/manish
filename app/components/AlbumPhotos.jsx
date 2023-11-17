"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { useAlbum } from "@/context/AlbumContext";

const AlbumPhotos = ({ urls }) => {
  const { albumMode, toggleAlbumMode } = useAlbum();
  console.log(albumMode);

  return (
    <div className="flex flex-wrap justify-center gap-8 w-full h-full">
      {!albumMode ? (
        urls.map((url) => {
          return (
            <div
              className="relative w-[900px] h-[500px] lg:h-[800px]"
              key={url}
            >
              <Image
                src={url}
                alt="Album image"
                fill
                className="object-contain"
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
          {urls.map((url) => {
            return (
              <SwiperSlide>
                <div className="relative h-full  w-full">
                  <Image
                    src={url}
                    alt="Album image"
                    fill
                    className="object-contain"
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
