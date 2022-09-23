import React, { useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import {MdOutlineStarHalf} from 'react-icons/md'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Products.css'
import { Pagination, Navigation } from "swiper";

const RecommendenProducts = () => {
    const [recommendedProducts,setRecommendedProducts] =useState([])
    useEffect(()=>{
        fetch('featureProduct.json')
        .then(res=>res.json())
        .then(data=>setRecommendedProducts(data))
        console.log(recommendedProducts);
    },[])
  return (
    <div className='max-w-7xl my-16 mx-auto'>
            <div className="px-10 my-10">
                <h2 className='text-sm font-bold'>RECOMMENDED FOR YOU</h2>
            </div>
            <Swiper
        slidesPerView={5}
        spaceBetween={15}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
       
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {
        recommendedProducts.map(product=>{
            return  <SwiperSlide> <div className=" py-10 px-5 border text-left h-full hover:shadow-xl hover:bg-violet-100">
            <div className="">
                <img src={product?.img} alt="" />
            </div>
            <h2 className='text-[16px] font-semibold'>{product.name}</h2>
            <div className="icons flex flex-row space-x-1 mt-3">
                           <AiFillStar className='text-sm text-secondary'></AiFillStar> 
                           <AiFillStar className='text-sm text-secondary'></AiFillStar> 
                           <AiFillStar className='text-sm text-secondary'></AiFillStar> 
                           <AiFillStar className='text-sm text-secondary'></AiFillStar> 
                           <MdOutlineStarHalf className='text-sm text-secondary'></MdOutlineStarHalf> 
                        </div>
                        <h2 className='text-xl font-semibold'>{product.price}$</h2>
        </div></SwiperSlide>
            
        })
      }
       
      </Swiper>
    </div>
  )
}

export default RecommendenProducts