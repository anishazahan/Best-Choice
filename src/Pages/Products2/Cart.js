import React from 'react'
import { useCartContext } from '../../Hooks/cart_context'

const Cart = () => {

const {cart} = useCartContext();



  return (
    <div className=' px-5 w-full md:px-10 lg:px-0 lg:max-w-4xl mx-auto my-20'>
        <div className="grid grid-cols-5 text-center border-b-2 py-2">
            <h2>Item</h2>
            <h2 className='hidden md:block'>price</h2>
            <h2>Quantity</h2>
            <h2 className='hidden md:block'>Subtotal</ h2>
            <h2>Remove</h2>
            
        </div>
    </div>
  )
}

export default Cart