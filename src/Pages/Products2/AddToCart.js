import React from 'react'
import { useState } from 'react';
import { BsCheck } from "react-icons/bs";

const AddToCart = ({product}) => {
    const {id,stock,colors} = product;
    const [color,setColor] = useState(colors[0]);

  return (
    <div>

        {/* ///......color btn,,,,,,,,, */}

        <p className='flex space-x-2 items-center'>
            colors : 
            {
                colors.map  ((colorEle,index)=>{
                        return <button 
                        style={{backgroundColor:colorEle}}
                         className={` ${color === colorEle ? "w-4 h-4 rounded-[50%] ml-4 opacity-100" : "w-3 h-3 rounded-[50%] ml-4 opacity-30 hover:opacity-100"}`}  
                         onClick={() => setColor(colorEle)}
                         key={index}
                         > 
                        { color === colorEle ? <BsCheck className='text-white font-bold'/> : null }
                        </button>
                     
                })
            }
        </p>

    </div>
  )
}

export default AddToCart