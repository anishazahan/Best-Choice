import React from 'react'
import { useContext } from 'react'
import {BsLockFill} from 'react-icons/bs'
import {FaShippingFast,FaShoppingBasket} from 'react-icons/fa'
import {FcDataConfiguration} from 'react-icons/fc'
import {MdHelpCenter} from 'react-icons/md'
import { AppContext } from '../../../Hooks/ProductsContext'

const Services = () => {

   const context = useContext(AppContext)
  return (
    <>
         <h2>{}</h2>
        <div className="max-w-7xl mx-auto">
            <h2 className='text-center text-2xl font-semibold text-gray-700 mt-10 mb-3'>Our Services</h2>
            <p className='text-center text-gray-400 text-sm mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate vel possimus enim, fugiat et.</p>
            <div className=" mx-auto lg:mx-0 px-5 lg:px-0 grid lg:grid-cols-5 grid-cols-2 gap-5 lg:gap-0">
                <div className="text-center group duration-500 px-3 py-10 border hover:bg-primary Hover:text-white space-y-3">
                   <p className='text-4xl text-center mx-auto group-hover:text-white'><BsLockFill className='text-center mx-auto text-gray-600 group-hover:text-white'></BsLockFill> </p>
                   <h1 className='text-xl font-bold text-gray-600 group-hover:text-white'>Secure Payment</h1>
                   <p className='text-sm text-gray-400 hover:text-white'>Metus tellus ultricies et quam sit amet commodo odio diam a libero nulla facilisi suspendissous enim sodales lacinia neque commodo</p>
                </div>
                <div className="text-center group duration-500 px-3 py-10 border hover:bg-primary Hover:text-white space-y-3">
                   <p className='text-4xl text-center mx-auto group-hover:text-white'><FaShippingFast className='text-center mx-auto text-gray-600 group-hover:text-white'></FaShippingFast> </p>
                   <h1 className='text-xl font-bold text-gray-600 group-hover:text-white'>Fast Delivery</h1>
                   <p className='text-sm text-gray-400 hover:text-white'>Metus tellus ultricies et quam sit amet commodo odio diam a libero nulla facilisi suspendissous enim sodales lacinia neque commodo</p>
                </div>
                <div className="text-center group duration-500 px-3 py-10 border hover:bg-primary Hover:text-white space-y-3">
                   <p className='text-4xl text-center mx-auto group-hover:text-white'><FaShoppingBasket className='text-center mx-auto text-gray-600 group-hover:text-white'></FaShoppingBasket> </p>
                   <h1 className='text-xl font-bold text-gray-600 group-hover:text-white'>Secure Shopping</h1>
                   <p className='text-sm text-gray-400 hover:text-white'>Metus tellus ultricies et quam sit amet commodo odio diam a libero nulla facilisi suspendissous enim sodales lacinia neque commodo</p>
                </div>
                <div className="text-center group duration-500 px-3 py-10 border hover:bg-primary Hover:text-white space-y-3">
                   <p className='text-4xl text-center mx-auto group-hover:text-white'><FcDataConfiguration className='text-center mx-auto text-gray-600 group-hover:text-white'></FcDataConfiguration> </p>
                   <h1 className='text-xl font-bold text-gray-600 group-hover:text-white'>Shop With Confidence</h1>
                   <p className='text-sm text-gray-400 hover:text-white'>Metus tellus ultricies et quam sit amet commodo odio diam a libero nulla facilisi suspendissous enim sodales lacinia neque commodo</p>
                </div>
                <div className="text-center group duration-500 px-3 py-10 border hover:bg-primary Hover:text-white space-y-3">
                   <p className='text-4xl text-center mx-auto group-hover:text-white'><MdHelpCenter className='text-center mx-auto text-gray-600 group-hover:text-white'></MdHelpCenter> </p>
                   <h1 className='text-xl font-bold text-gray-600 group-hover:text-white'>24/7 Help Center</h1>
                   <p className='text-sm text-gray-400 hover:text-white'>Metus tellus ultricies et quam sit amet commodo odio diam a libero nulla facilisi suspendissous enim sodales lacinia neque commodo</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services