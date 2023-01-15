import React from 'react'

const DetailsImg = ({imgs}) => {
    console.log(imgs);
  return (
    <>
    
                    <div className="w-full img lg:basis-6/12 ">
                    <div className="flex flex-col w-full relative">
                    <img className='w-8/12 lg:w-10/12 mx-auto border' src={''} alt="" />
                    <div className="flex mt-5 justify-between px-6 gap-2">
                       {
                        imgs?.map((img,index)=>{
                            return <div className="h-24">
                                <img className='h-full' src={img.url} alt={img.filename} />
                            </div>
                        })
                       }
                    </div>
                    </div>
                </div></>
  )
}

export default DetailsImg