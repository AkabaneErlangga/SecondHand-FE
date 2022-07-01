import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-1/2 mt-10">
        <SwiperSlide>
            <img src="/assets/Jamcasio.png"
            className="ml-36 rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/Jamcasio.png"
            className="ml-36 rounded-xl shadow-lg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/Jamcasio.png"
            className="ml-36 rounded-xl shadow-lg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/Jamcasio.png"
            className="ml-36 rounded-xl shadow-lg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/Jamcasio.png"
            className="ml-36 rounded-xl shadow-lg"/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
