import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useProductContext } from '../../Hooks/ProductsContext';

import ProductDetails from './ProductDetails';

const single_api = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
    const {id}= useParams();
    // console.log(name);
    const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
    
    // console.log(id)
    useEffect(()=>{
        getSingleProduct(`${single_api}/${id}`)
       
    },[id])
    if(isSingleLoading){
        return <div className=" my-20 text-center font-semibold">...Loading!!</div>
    }

  return (
        <>
        <ProductDetails productsDetails={singleProduct}></ProductDetails>

        </>
  )
}

export default SingleProduct