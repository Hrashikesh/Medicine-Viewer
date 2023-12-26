"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const BannerSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image width={3840} height={2160} className="w-full" alt="slide" src="https://media.slidesgo.com/storage/39496786/responsive-images/0-networking-newsletter___media_library_original_1600_900.jpg" /></SwiperSlide>
      <SwiperSlide><Image width={3840} height={2160} className="w-full" alt="slide" src="https://media.slidesgo.com/storage/39496789/responsive-images/1-networking-newsletter___media_library_original_1600_900.jpg" /></SwiperSlide>
      <SwiperSlide><Image width={3840} height={2160} className="w-full" alt="slide" src="https://media.slidesgo.com/storage/39496802/responsive-images/2-networking-newsletter___media_library_original_1600_900.jpg" /></SwiperSlide>
      <SwiperSlide><Image width={3840} height={2160} className="w-full" alt="slide" src="https://media.slidesgo.com/storage/39496841/responsive-images/8-networking-newsletter___media_library_original_1600_900.jpg" /></SwiperSlide>
    </Swiper>
  );
};
