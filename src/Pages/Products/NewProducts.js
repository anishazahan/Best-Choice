import React, { useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import {MdOutlineStarHalf} from 'react-icons/md'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Products.css'
import { Pagination, Navigation } from "swiper";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewProducts = () => {
    const [newProducts,setNewProducts] =useState([])
    useEffect(()=>{
        fetch('http://localhost:3500/products')
        .then(res=>res.json())
        .then(data=>setNewProducts(data))
      
    },[])


    const navigate = useNavigate();
    const navigateToProductsDetails = (id)=>{
        navigate(`products/products-details/${id}`)
    }
  return (
    <div className='max-w-7xl my-16 mx-auto'>
            <div className="px-2 my-10">
                <h2 className='text-sm font-bold uppercase'>New Products</h2>
            </div>
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
        newProducts.map(product=>{
            return  <SwiperSlide> <div onClick={()=> navigateToProductsDetails(product.id)} className="mx-auto py-10 cursor-pointer px-5 border text-left h-full hover:shadow-xl hover:shadow-2xl">
            <div className="">
                <img className='hover:scale-110 duration-500' src={product?.img} alt="" />
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
export default NewProducts