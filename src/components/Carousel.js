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
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-[600px] h-[436px] pl-[100px] mobile:w-[300px] mobile:h-[230px] mt-10 mobile:static  mobile:-mt-7">
        <SwiperSlide>
            <img src="/assets/Jamcasio.png"
            className=" p-2 mobile:p-2 mobile:w-[360px] mobile:h-[240px] mobile:fixed"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/Jamcasio.png"
            className=" p-2 mobile:p-2"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/Jamcasio.png"
            className=" p-2 mobile:p-2"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/Jamcasio.png"
            className=" p-2 mobile:p-2"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/assets/Jamcasio.png"
            className=" p-2 mobile:p-2"/>
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
  }
