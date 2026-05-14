import React from "react";
import { SliderData } from "/src/data/SliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";

import HeroSection from "./HeroSection";

function slider() {
  return (
    <div className="">
      <button className="hero-prev absolute left-12 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
        <FiChevronLeft className="text-xl text-textcolor" />
      </button>

      <button className="hero-next absolute right-16 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
        <FiChevronRight className="text-xl text-textcolor" />
      </button>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        speed={800}
        className="rounded-2xl overflow-hidden"
      >
        {SliderData.map((item) => {
          return (
            <SwiperSlide>
              <HeroSection
                headerOne={item.headerOne}
                headerTwo={item.headerTwo}
                paragraph={item.paragraph}
                image={item.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default slider;
