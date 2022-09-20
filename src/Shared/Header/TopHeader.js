import React from 'react'
import './Header.css'
import {BsTelephoneFill,BsFillEnvelopeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const TopHeader = () => {
  return (
    <div className='top-header'>
        <div className="flex h-full max-w-7xl px-16 justify-between">
            <div className="left flex space-x-5 items-center">
                <div className="flex items-center text-white h-full space-x-1">
                    <p><BsTelephoneFill></BsTelephoneFill> </p>
                    <p className='text-sm'>+287675546464</p>
                </div>
                <div className="flex items-center text-white h-full space-x-1">
                    <p><BsFillEnvelopeFill></BsFillEnvelopeFill> </p>
                    <p className='text-sm'>contact@gmail.com</p>
                </div>
            </div>
            <div className="right flex space-x-5 items-center">
                <div className="flex items-center text-white h-full space-x-1">
                    
                    <Link to='/' className='text-sm link'>FAQS</Link>
                </div>
                <div className="flex items-center text-white h-full space-x-1">
                <Link to='/' className='text-sm link'>Need Help?</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TopHeader