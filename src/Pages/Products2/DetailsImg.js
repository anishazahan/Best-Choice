import React from 'react'
import { useState } from 'react';

const DetailsImg = ({imgs = [{url :""}]}) => {
    console.log(imgs);
    const [mailImg,setMainImg] = useState(imgs[0])
  return (
    <>
    
                    <div className="w-full img lg:basis-6/12 mb-10 lg:mb-0 ">
                    <div className="flex flex-col w-full relative">
                    <img className='w-full px-6 mx-auto hover:bg-transparent' src={mailImg.url} alt={mailImg.filename} />
                    <div className="flex mt-4 justify-between px-6 gap-2">
                       {
                        imgs?.map((img,index)=>{
                            return <div key={index} className="h-16 md:h-24">
                                <img className='h-full' onClick={()=>setMainImg(img)} src={img.url} alt={img.filename} />
                            </div>
                        })
                       }
                    </div>
                    </div>
                </div></>
  )
}

export default DetailsImg