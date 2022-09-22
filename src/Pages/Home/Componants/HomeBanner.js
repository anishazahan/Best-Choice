import React from "react";
import "../Home.css";
import banner1 from "../../../assets/main-banner-01__29747.jpg";
import banner2 from "../../../assets/main-bannre-2.jpg";
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
          <div className="slider-banner ">
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
