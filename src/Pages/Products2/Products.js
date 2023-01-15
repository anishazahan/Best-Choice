import React from 'react'
import { NavLink } from 'react-router-dom';

const Products = (currentElement) => {
    console.log(currentElement)

    const {id,name,image,price,category} = currentElement;

  return (
    <>
    <NavLink to={`singleProduct/${id}`}>
      <div className="card shadow-2xl">
          <div className="relative">
            <img src={image} alt={name} />
              <h2 className='absolute top-5 right-5 px-4 rounded-3xl font-semibold py-2 bg-white'>{name}</h2>
          </div>
        <div className="flex py-6 justify-between px-5">
          <h2 className='font-semibold'>{name}</h2>
          <h2 className='font-semibold'>{price} <span className='font-bold text-secondary'>$</span> </h2>
        </div>
      </div>

    </NavLink>


    </>
  )
}

export default Products