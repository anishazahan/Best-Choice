import React from 'react'
import FormatePrice from '../../Helpers/FormatePrice'
import CartAmount from './CartAmount'
import { GrFormClose } from "react-icons/gr";
import { useCartContext } from '../../Hooks/cart_context';

const CartList = ({id,color,amount,price,name,image}) => {

    const {removeCartItem,setDecrease,setIncrement} = useCartContext();
   

  return (
    <>

     <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img className=' w-full sm:w-36 rounded-md' src={image} alt={name} />

          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0 ">
              <h2 class="text-lg font-bold text-gray-900">{name}</h2>
              <div className="flex items-center space-x-1">
              <p class="mt-1 text-xs text-gray-700">Color : </p>
              <p className='p-[5px] rounded-full' style={{backgroundColor : color, color : color}}></p>
              </div>
              <div className="flex items-center">
              <p class="mt-1 text-gray-700">Price :  <FormatePrice price={price}></FormatePrice></p>
             
              </div>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="">


               {/* ///......  products quantity ,,,,,,,,, */}
              <CartAmount amount={amount}
             setDecrease={()=>setDecrease(id)}
             setIncrease={()=>setIncrement(id)}
         />
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">Subtotal : <FormatePrice price={price * amount }></FormatePrice> </p>
                <button className='text-2xl hover:text-red-800'> <GrFormClose  onClick={()=>removeCartItem(id)}></GrFormClose></button>
              </div>
            </div>
          </div>
        </div>


    </>
  )
}

export default CartList