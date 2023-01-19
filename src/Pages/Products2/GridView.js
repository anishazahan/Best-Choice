import React from 'react'
import Products from './Products';

const GridView = ({products}) => {
    // console.log(products);
  return (
    <>
        <div className=" grid grid-cols-1 lg:grid-cols-3 my-20 gap-4">
        {products.map((currentElement) => {
          return <Products key={currentElement.id} {...currentElement} />;
        })}

        </div>
    </>
  )
}

export default GridView