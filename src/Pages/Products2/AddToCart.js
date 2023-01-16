import React from 'react'

const AddToCart = ({product}) => {
    const {id,stock,colors} = product;

  return (
    <div>
        <p className='flex space-x-2 items-center'>
            colors : 
            {
                colors.map  ((color,index)=>{
                        return <button style={{backgroundColor:color}} className='text-white w-4 h-4 ml-3 rounded-[50%] '  key={index}>
                            
                        </button>
                })
            }
        </p>

    </div>
  )
}

export default AddToCart