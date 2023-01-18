import React from 'react'
import Products from './Products';

const GridView = ({products}) => {
  return (
    <>
        <div className=" grid grid-cols-1 lg:grid-cols-3 my-20 gap-4">
        {products.map((curElem) => {
          return <Products key={curElem.id} {...curElem} />;
        })}

        </div>
    </>
  )
}

export default GridView