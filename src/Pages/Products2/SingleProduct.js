import React from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useProductContext } from '../../Hooks/ProductsContext';
import DetailsImg from './DetailsImg';
import ProductBreadcrumb from './ProductBreadcrumb';
import FormatePrice from '../../Helpers/FormatePrice';
import {FaShippingFast,FaShoppingBasket} from 'react-icons/fa'
import {FcDataConfiguration} from 'react-icons/fc'
import {MdHelpCenter} from 'react-icons/md'
import StarRatings from './StarRatings';

const single_api = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
    const {id}= useParams();
    const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
    
    // console.log(id)
    const {
        id:alias,
        name,
        company,
        price,
        image,
        description,
        category,
        stock,
        stars,
        reviews
    }= singleProduct;

    useEffect(()=>{
        getSingleProduct(`${single_api}?id=${id}`)
       
    },[])
    if(isSingleLoading){
        return <div className=" my-20 text-center font-semibold">...Loading!!</div>
    }

  return (
    <>

        <ProductBreadcrumb title={name}/>

        <div className="max-w-7xl px-5 lg:px-10 mx-auto my-20 ">
            <div className="flex flex-col lg:flex-row">

                {/* products -img */}
           <DetailsImg imgs={image}></DetailsImg>

           {/* products -data */}

            <div className="w-full lg:basis-6/12 ml-5 pr-3 lg:mr-0 lg:ml-10 space-y-3 ">
                   <h2 className='font-semibold text-xl uppercase'>{name}</h2>
                   <div className=" flex">
                    <StarRatings reviews={reviews} stars ={stars}></StarRatings>
                        {/* <h2 className='font-semibold uppercase'>{stars}</h2>
                        <h2 className='font-semibold uppercase'>14</h2> */}
                   </div>
                   <h2 className='font-semibold uppercase'>Reviews : {reviews}</h2>
                   <div className="font-semibold">
                    Price : <del className='text-secondary font-semibold'> <FormatePrice price={price +100000 }></FormatePrice>  </del>
                   </div>
                   <h2 className='uppercase font-semibold text-sm'>Deal Of the day : <FormatePrice price = {price}></FormatePrice>  </h2>
                   <p className='text-gray-800 text-sm'>{description}</p>
                   <div className="flex justify-between flex-wrap">
                        <div className=" flex flex-col items-center">
                            <p className='text-2xl text-gray-500 font-bold'><FaShippingFast></FaShippingFast> </p>
                            <h2 className='font-semibold'>Fast Shipping</h2>
                        </div>
                        <div className=" flex flex-col items-center">
                            <p className='text-2xl text-gray-500 font-bold'><FaShoppingBasket></FaShoppingBasket> </p>
                            <h2 className='font-semibold'>Secure Payment</h2>
                        </div>
                        <div className=" flex flex-col items-center">
                            <p className='text-2xl text-gray-500 font-bold'><FcDataConfiguration></FcDataConfiguration> </p>
                            <h2 className='font-semibold'>Secure Shopping</h2>
                        </div>
                        <div className=" flex flex-col items-center">
                            <p className='text-3xl mx-auto text-gray-500 font-bold'><MdHelpCenter className='mx-auto'></MdHelpCenter> </p>
                            <h2 className='font-semibold'>24/7 Help Center</h2>
                        </div>
                        
                        
                   </div>
                   <hr />
                   <h2>Available : <span className='font-bold'> { stock > 0 ? " In Stock" : "Not Available"}</span> </h2>

                   <h2 className='font-medium'>ID : {id} </h2>
                   <h2 className='font-medium'>Brand : {company} </h2>
                   <div className="">
                    <hr className='border border-gray-600' />
                   </div>
                   
                </div>

            </div>
        </div>

    </>
  )
}

export default SingleProduct