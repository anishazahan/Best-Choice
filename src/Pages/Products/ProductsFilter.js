import React from 'react'

const ProductsFilter = () => {
  return (
    <div className='max-w-7xl px-12 pt-10'>
       <div className="flex">
       <h2 className='font-medium pr-2 '>Filter Products</h2>
        <select name="" id="" className='px-5 py-1 border border-1 border-primary'>
            <option disabled selected>Price</option>
            <option>100</option>
            <option>200</option>
            <option>300</option>
            <option>400</option>
        </select>
       </div>

    </div>
  )
}

export default ProductsFilter