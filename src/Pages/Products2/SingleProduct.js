import React from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useProductContext } from '../../Hooks/ProductsContext';

const single_api = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
    const {id}= useParams();
    const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
    
    console.log(id)

    useEffect(()=>{
        getSingleProduct(`${single_api}?id=${id}`)
        // https://api.pujakaitem.com/api/products?id=thapaserialnoa
    },[])

  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct