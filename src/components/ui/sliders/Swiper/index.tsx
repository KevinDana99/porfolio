"use client";
import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
  FreeMode,
} from "swiper/modules";

const Slider = ({ children }: { children: ReactNode[] }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={5000}
      //  slidesPerView={isMobile ? 1 : children.length / 3}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      loop={true}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay, Navigation, FreeMode]}
      className="mySwiper w-full h-full overflow-visible"
    >
      {children.map((children, index) => {
        return (
          <SwiperSlide
            key={`key-${index}-swiper-slide`}
            className="w-full h-full overflow-visible"
          >
            {children}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
