import React from 'react'
import FilterProducts from './FilterProducts'
import ProductsList from './ProductsList'
import SortProducts from './SortProducts'

const MainProducts = () => {
  return (
    <>

        <div className="max-w-7xl px-5 lg:px-10  mx-auto">
            <div className="flex flex-col md:flex-row">
            <div className="filer-section basis-[20%] ">
                <FilterProducts></FilterProducts>
            </div>
            <div className="products-section flex flex-col basis-[80%]">
                <div className="grid-icon">
                    <SortProducts></SortProducts>
                </div>
                <div className="main-products grid-cols-1 lg:grid-cols-3">
                    <ProductsList></ProductsList>
                </div>
            </div>
            </div>

        </div>
        
    </>
  )
}

export default MainProducts