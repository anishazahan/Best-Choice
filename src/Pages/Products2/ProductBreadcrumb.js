import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductBreadcrumb = ({title}) => {
  return (
    <div className='px-10 md:px-20 font-semibold pt-10'>
        <h2 className='font-semibold pr-2'> <NavLink to='/'>Home /{title}</NavLink> </h2>
    </div>
  )
}

export default ProductBreadcrumb