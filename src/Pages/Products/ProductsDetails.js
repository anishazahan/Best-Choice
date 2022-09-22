import React from 'react'
import img from '../../../src/assets/products.jpg'
import {AiFillStar} from 'react-icons/ai'
import {MdOutlineStarHalf} from 'react-icons/md'

const ProductsDetails = () => {
  return (
    <>
        <div className="max-w-7xl mx-auto lg:px-10 px-5">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full img basis-6/12 border my-16 ">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="product-details basis-6/12 mt-28 ml-10">
                    <div className="">
                        <p className='text-gray-400 text-sm'>Apple</p>
                        <h2 className='text-[20px] font-semibold text-gray-700'>booq Mamba Saddle sheets</h2>
                        <div className="flex items-center space-x-2">
                        <div className="icons flex flex-row space-x-1 mt-3">
                           <AiFillStar className='text-sm text-secondary'></AiFillStar> 
                           <AiFillStar className='text-sm text-secondary'></AiFillStar> 
                           <AiFillStar className='text-sm text-secondary'></AiFillStar> 
                           <AiFillStar className='text-sm text-secondary'></AiFillStar> 
                           <MdOutlineStarHalf className='text-sm text-secondary'></MdOutlineStarHalf> 
                        </div>
                        <p className='text-[13px] text-gray-700 mt-2'>(2 reviews yet)</p>
                        <p className='text-[13px] text-gray-700 mt-2 link'>Write a rivew</p>
                        </div>
                        <p className='text-gray-600 text-sm mt-7'>SKU:BOOQ-MAMBO</p>
                        <p className='text-gray-600 text-sm mt-2'>Weight:1.00 LBS</p>
                        <p className='text-gray-600 text-sm mt-2 mb-4'>Shipping:Calculated at Checkout</p>
                        <hr />
                    </div>
                </div>
            </div>

        </div>

        
    </>
  )
}

export default ProductsDetails