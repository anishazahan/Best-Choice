import React, { useEffect, useState } from 'react'

import {AiFillStar,} from 'react-icons/ai'
import {MdOutlineStarHalf} from 'react-icons/md'
import {FiChevronDown,FiChevronUp} from 'react-icons/fi'
import {AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const NewProductsDetails = () => {
    const {name} = useParams();
    console.log(name)

    const [quantity,setQuantity] = useState(0)
    const [details,setDetails] = useState([])
    useEffect(()=>{
        axios.get('https://raw.githubusercontent.com/anishazahan/Best-Choice/main/public/NewProducts.json')
        .then(data=>
            {

                const findDetails =data?.data.find(details=>details.id === name)
                console.log(findDetails)

                // setDetails(findDetails);
            })
    },[])


  return (
    <div>
        <div className="max-w-7xl mx-auto lg:px-10 px-5">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full img basis-6/12 border my-16 ">
                    <img className='w-8/12 lg:w-10/12 mx-auto' src={details?.img} alt="" />
                </div>

                <div className="product-details basis-6/12 lg:mt-28 ml-10">
                    <div className="">
                        <p className='text-gray-400 text-sm'>{details?.brand}</p>
                        <h2 className='text-[20px] font-semibold text-gray-700'>{details?.name}</h2>
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
                        <p className='text-gray-600 text-sm mt-2'>Weight:{details?.Weight}</p>
                        <p className='text-gray-600 text-sm mt-2 mb-4'>Shipping:Calculated at Checkout</p>
                        <hr />
                        <h2 className='text-[18px] font-semibold mt-3 mb-4'>Price:{details?.price}$</h2>
                        <div className="flex items-center space-x-3">
                            <h1>Quantity: </h1>
                          <div className="flex space-x-4 items-center">
                          <button className='border p-1 bg-primary text-white' onClick={()=>setQuantity(quantity+1)}> <FiChevronDown></FiChevronDown> </button>
                            <button className='font-semibold'>1</button>
                            <button className='border p-1 bg-primary text-white' onClick={()=>setQuantity(quantity-1)}> <FiChevronUp></FiChevronUp> </button>
                          </div>
                        </div>
                        <div className=" mt-10 space-x-3">
                            <button className='px-10 py-[.57rem] bg-primary text-white text-sm font-medium'>Add To Cart</button>
                            <button className='px-8 py-2 border border-secondary text-secondary text-sm font-medium'>Add To Wishlist</button>
                        </div>
                        <div className="icons flex space-x-5 mt-10">
                            <Link className='text-3xl rounded-sm hover:bg-primary hover:text-white text-secondary p-2  shadow-lg' to='/'> <AiFillFacebook></AiFillFacebook> </Link>
                            <Link className='text-3xl rounded-sm hover:bg-primary hover:text-white text-secondary p-2  shadow-lg' to='/'> <AiFillLinkedin></AiFillLinkedin> </Link>
                            <Link className='text-3xl rounded-sm hover:bg-primary hover:text-white text-secondary p-2  shadow-lg' to='/'> <AiFillInstagram></AiFillInstagram> </Link>
                            <Link className='text-3xl rounded-sm hover:bg-primary hover:text-white text-secondary p-2  shadow-lg' to='/'> <AiFillTwitterSquare></AiFillTwitterSquare> </Link>
                        </div>
                    </div>
                </div>
            </div>

           

        </div>
        <div className="product-description px-5 bg-violet-100 w-full max-w-7xl mx-auto mb-10 py-10">
                <h2 className='text-[18px] font-semibold py-10'>Product Description</h2>
                <p className='text-[13px]'>{details.description1}</p>
                <h2 className='text-sm font-semibold mt-5 mb-3'>{details.descriptionTittle1}</h2>
                <p className='text-[13px]'>{details.description2}</p>
                <h2 className='text-sm font-semibold mt-5 mb-3'>{details.descriptionTittle2}</h2>
                <ul>
                    {/* {
                       details.map((list)=> <li>{list.feature}</li> )
                    } */}
                </ul>
            </div>

        
    </div>
  )
}

export default NewProductsDetails.js