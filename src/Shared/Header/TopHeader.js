import React from 'react'
import './Header.css'
import {BsTelephoneFill} from 'react-icons/bs'

const TopHeader = () => {
  return (
    <div className='top-header'>
        <div className="flex h-full max-w-7xl px-16">
            <div className="left">
                <div className="flex items-center text-white h-full space-x-2">
                    <p><BsTelephoneFill></BsTelephoneFill> </p>
                    <p className='text-sm'>+287675546464</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TopHeader