import React from 'react'
import {BsLockFill} from 'react-icons/bs'
import {FaShippingFast,FaShoppingBasket} from 'react-icons/fa'
import {FcDataConfiguration} from 'react-icons/fc'
import {MdHelpCenter} from 'react-icons/md'

const Services = () => {
  return (
    <>
        <div className="max-w-7xl mx-auto">
            <div className=" mx-auto lg:mx-0 px-5 lg:px-0 grid lg:grid-cols-5 grid-cols-2 gap-5 lg:gap-0">
                <div className="text-center px-3 py-10 border hover:bg-primary Hover:text-white space-y-3">
                   <p className='text-4xl text-center mx-auto hover:text-white'><BsLockFill className='text-center mx-auto text-gray-600'></BsLockFill> </p>
                   <h1 className='text-xl font-bold text-gray-600 hover:text-white'>Secure Payment</h1>
                   <p className='text-sm text-gray-400 hover:text-white'>Metus tellus ultricies et quam sit amet commodo odio diam a libero nulla facilisi suspendissous enim sodales lacinia neque commodo</p>
                </div>
                <div className="text-center px-3 py-10 border hover:bg-primary Hover:text-white space-y-3">
                   <p className='text-4xl text-center mx-auto hover:text-white'><FaShippingFast className='text-center mx-auto text-gray-600'></FaShippingFast> </p>
                   <h1 className='text-xl font-bold text-gray-600 hover:text-white'>Fast Delivery</h1>
                   <p className='text-sm text-gray-400 hover:text-white'>Metus tellus ultricies et quam sit amet commodo odio diam a libero nulla facilisi suspendissous enim sodales lacinia neque commodo</p>
                </div>
                <div className="text-center px-3 py-10 border hover:bg-primary Hover:text-white space-y-3">
                   <p className='text-4xl text-center mx-auto hover:text-white'><FaShoppingBasket className='text-center mx-auto text-gray-600'></FaShoppingBasket> </p>
                   <h1 className='text-xl font-bold text-gray-600 hover:text-white'>Secure Shopping</h1>
                   <p className='text-sm text-gray-400 hover:text-white'>Metus tellus ultricies et quam sit amet commodo odio diam a libero nulla facilisi suspendissous enim sodales lacinia neque commodo</p>
                </div>
                <div className="text-center px-3 py-10 border hover:bg-primary Hover:text-white space-y-3">
                   <p className='text-4xl text-center mx-auto hover:text-white'><FcDataConfiguration className='text-center mx-auto text-gray-600'></FcDataConfiguration> </p>
                   <h1 className='text-xl font-bold text-gray-600 hover:text-white'>Shop With Confidence</h1>
                   <p className='text-sm text-gray-400 hover:text-white'>Metus tellus ultricies et quam sit amet commodo odio diam a libero nulla facilisi suspendissous enim sodales lacinia neque commodo</p>
                </div>
                <div className="text-center px-3 py-10 border hover:bg-primary Hover:text-white space-y-3">
                   <p className='text-4xl text-center mx-auto hover:text-white'><MdHelpCenter className='text-center mx-auto text-gray-600'></MdHelpCenter> </p>
                   <h1 className='text-xl font-bold text-gray-600 hover:text-white'>24/7 Help Center</h1>
                   <p className='text-sm text-gray-400 hover:text-white'>Metus tellus ultricies et quam sit amet commodo odio diam a libero nulla facilisi suspendissous enim sodales lacinia neque commodo</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services