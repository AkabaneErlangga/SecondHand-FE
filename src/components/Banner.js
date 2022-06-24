import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


const Banner = () => {
  return (
    <div className=" sm:block">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/banner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/banner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/banner.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner