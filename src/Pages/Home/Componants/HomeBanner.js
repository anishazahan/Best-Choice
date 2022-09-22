import React from "react";
import "../Home.css";
import banner from "../../../assets/category-banner-watch__00751.original.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="relative mt-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-banner z-10 ">
            <div className="flex flex-col justify-start pt-[9%] pl-[15%]">
              <h1 className="text-black text-2xl font-extrabold text-left mb-3">IPHONE-X</h1>

              <div className="text-left">
                <button className="py-2 text-xs px-7 rounded-full border border-1 border-secondary text-secondary font-bold hover:tracking-wider transition-all">
                  POWERFUL, STUNNING & NOW EVEN BIGGER
                </button>
              </div>
              <div className="text-left mt-7">
                <Link className="text-sm link font font-medium">DISCOVER NOW</Link>
              </div>
            </div>
            
          </div>
        </SwiperSlide>
          <div className="mx-auto w-full mt-[-8%] z-20">
              <img className="mx-auto" src={banner} alt="" />
            </div>

        <SwiperSlide>
          <div className="slider-banner2">
          <div className="flex flex-col justify-start pt-[9%] pl-[15%]">
              <h1 className="text-black text-2xl font-extrabold text-left mb-3">IPHONE-X</h1>

              <div className="text-left">
                <button className="py-2 text-xs px-7 rounded-full border border-1 border-primary text-primary font-bold hover:tracking-wider transition-all">
                  POWERFUL, STUNNING & NOW EVEN BIGGER
                </button>
              </div>
              <div className="text-left mt-7">
                <Link className="text-sm link font font-medium">DISCOVER NOW</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
