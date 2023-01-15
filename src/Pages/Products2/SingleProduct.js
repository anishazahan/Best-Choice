import React from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useProductContext } from '../../Hooks/ProductsContext';
import ProductBreadcrumb from './ProductBreadcrumb';

const single_api = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
    const {id}= useParams();
    const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
    
    // console.log(id)
    const {
        id:alias,
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews
    }= singleProduct;

    useEffect(()=>{
        getSingleProduct(`${single_api}?id=${id}`)
       
    },[])

  return (
    <>

        <ProductBreadcrumb title={name}/>

    </>
  )
}

export default SingleProduct