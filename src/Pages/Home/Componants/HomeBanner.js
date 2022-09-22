import React from 'react'
import '../Home.css'
import banner1 from '../../../assets/main-banner-01__29747.jpg'
import banner2 from '../../../assets/main-bannre-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const HomeBanner = () => {
  return (
    <div className='relative mt-2'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
  <SwiperSlide> <img src={banner1} alt="" /></SwiperSlide>
  <SwiperSlide> <img src={banner2} alt="" /></SwiperSlide>
      
        
      </Swiper>

    </div>
  )
}

export default HomeBanner