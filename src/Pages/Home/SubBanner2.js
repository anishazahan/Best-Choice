import React from 'react'
import './Home.css'
import banner1 from '../../assets/subbanner1.jpg'
import banner2 from '../../assets/subbanner2.jpg'

const SubBanner2 = () => {
  return (
    <div className='max-w-7xl mx-auto px-1 my-32'>

        <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full h-full">
                <img className='w-full h-full hover:bg-black/30' src={banner1} alt="" />
            </div>
            <div className="w-full">
                <img className='w-full' src={banner2} alt="" />
            </div>
        </div>

    </div>
  )
}

export default SubBanner2