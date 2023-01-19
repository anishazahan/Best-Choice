import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatePrice from '../../Helpers/FormatePrice';

const ListView = ({products}) => {

  return (
    <>

    <div className="flex flex-col space-y-5 my-20">
        
        
            {
                products.map((product)=>{
                    const { id, name, image, price, description } = product;
                    return (
                        <div className='flex flex-col lg:flex-row space-y-5 border-2 '>
                        <div className="img-part h-full lg:w-8/12 w-full rounded-sm">
                            <img className='h-full' src={image} alt="" />
                        </div>
                        <div className="content p-4">
                            <h2 className='text-xl font-semibold my-2'>{name}</h2>
                            <h2 className='py-2'> Price: <span className='font-semi-bold text-secondary'><FormatePrice price={price}/></span>  </h2>
                            <p>{description.slice(0,99)}  ...</p>
                            <NavLink to={`/singleproduct/${id}`} >
                            <button className="py-2 text-white mt-5 font-medium px-5 bg-secondary">Read More</button>
                            </NavLink>
                        </div>
                        </div>
                    )
                })
            }
       

    </div>


    </>
  )
}

export default ListView