import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const OfferBanner = () => {
  return (
    <>

        <div className="offer-background my-16">
            <div className="max-w-7xl py-20">
                <div className="text-white flex flex-col justify-center text-right lg:mr-[40%] space-y-3">
                    <h1 className='text-[18px] uppercase '>NEXT IS NOW : ULTRA SOUND</h1>
                    <h1 className='text-3xl font-extrabold '>Samsung S7 340</h1>
                    <div className="">
                        <button className='py-2 px-10 rounded-full border border-2 border-secondary text-secondary font-semibold hover:tracking-wider transition-all'>POWERFUL, STUNNING & NOW EVEN BIGGER</button>
                    </div>
                    <Link to='/' className='font-semibold link text-sm'>Discover More</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default OfferBanner