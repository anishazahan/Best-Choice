import React from 'react'
import { useProductContext } from '../../Hooks/ProductsContext'
import Products from './Products';





const FeatureProducts = () => {
    const {isLoading,FeatureProducts} = useProductContext();

        if(isLoading){
            return <div className="">....Loading</div>
        }


  return (
    <>
        <div className="max-w-7xl px-10 md:px-20 mx-auto">
            <h2 className='text-sm font-bold'>OUR FEATURE PRODUCTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {
                FeatureProducts.map((currentElement)=>{
                    return <Products key={currentElement.id} {...currentElement}/>
                })
            }
            </div>

        </div>

    </>
  )
}

export default FeatureProducts