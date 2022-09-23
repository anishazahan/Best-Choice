import React from 'react'
import img1 from '../../../assets/brands-1.jpg'
import img2 from '../../../assets/brands-2.jpg'
import img3 from '../../../assets/brands-3.jpg'
import img4 from '../../../assets/brands-4.jpg'
import img5 from '../../../assets/brands-5.jpg'


const Sponcer = () => {
    const imgs = [img1,img2,img3,img4,img5];
  return (
    <>
        <div className="max-w-5xl mx-auto px-10 mb-32">
            <h2 className='text-xl text-gray-700 font-semibold mb-5 mt-10 uppercase'>Sphoncer By-</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              <div className="">
                <img src={img1} alt="" />
              </div>
              <div className="">
                <img src={img2} alt="" />
              </div>
              <div className="">
                <img src={img3} alt="" />
              </div>
              <div className="">
                <img src={img4} alt="" />
              </div>
              <div className="">
                <img src={img5} alt="" />
              </div>
            </div>
        </div>

    </>
  )
}

export default Sponcer
