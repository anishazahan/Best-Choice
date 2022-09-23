import React, { useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import {MdOutlineStarHalf} from 'react-icons/md'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Products.css'
import { Pagination, Navigation } from "swiper";

const CateiogoryProducts = () => {
    const [recommendedProducts,setRecommendedProducts] =useState([])
    useEffect(()=>{
        fetch('FeatureCateogory.json')
        .then(res=>res.json())
        .then(data=>setRecommendedProducts(data))
        console.log(recommendedProducts);
    },[])
  return (
    <div className=' my-16 mx-auto'>
            <div className="px-2 my-10">
                <h2 className='text-sm uppercase px-2 font-bold'>New Cateiogory</h2>
            </div>
          <div className="bg-violet-100 py-20">
          <div className="max-w-7xl mx-auto">
          <Swiper
        slidesPerView={1}
        spaceBetween={5}
       
        loop={true}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
       
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {
        recommendedProducts.map(product=>{
            return  <SwiperSlide>
                <div className="">
                    <div className=" bg-white px-5">
                        <img src={product.img} alt="" />
                    </div>
                    <h2 className='text-sm text-center font-semibold'>{product.name}</h2>
                </div>
            </SwiperSlide>
            
        })
      }
       
      </Swiper>
          </div>
          </div>
    </div>
  )
}

export default CateiogoryProducts