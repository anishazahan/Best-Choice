import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductBreadcrumb = ({title}) => {
  return (
    <div className='px-10 md:px-20 font-semibold'>
        <h2 className='font-semibold pr-2'> <NavLink to='/'>Home</NavLink> </h2>/{title}
    </div>
  )
}

export default ProductBreadcrumb