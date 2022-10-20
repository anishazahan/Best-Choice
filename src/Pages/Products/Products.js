import React from 'react'
import ProductsDetails from './ProductsDetails'
import ProductsFilter from './ProductsFilter'
import RecommendenProducts from './RecommendenProducts'

const Products = () => {
  return (
    <div>
      <ProductsFilter></ProductsFilter>
        <RecommendenProducts></RecommendenProducts>
    </div>
  )
}

export default Products