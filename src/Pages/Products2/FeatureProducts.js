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
        <div className="max-w-5xl px-10 mx-auto">
            <h2 className='text-sm font-bold'>OUR FEATURE CATEGORY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-40">

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