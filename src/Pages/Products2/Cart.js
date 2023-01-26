import React from 'react'
import { useCartContext } from '../../Hooks/cart_context'
import CartList from './CartList';

const Cart = () => {

const {cart} = useCartContext();




  return (
    // <div className=' px-5 w-full md:px-10 lg:px-0 lg:max-w-4xl mx-auto my-20'>
    //     <div className="grid grid-cols-5 text-center border-b-2 py-2">
    //         <h2>Item</h2>
    //         <h2 className='hidden md:block'>price</h2>
    //         <h2>Quantity</h2>
    //         <h2 className='hidden md:block'>Subtotal</ h2>
    //         <h2>Remove</h2>
            
    //     </div>
    // </div>



    <>


  <div class=" bg-gray-100 pt-20 pb-20">
    <h1 class="mb-10 text-center text-2xl font-bold"> Manage Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3 flex flex-col">

        {/* <!-- cart items --> */}

        {
            cart?.map((cartList)=>{
                return (
                    <CartList key={cartList.id} {...cartList}></CartList>
                )
            })
        }

        <div className="flex justify-between">
            <button className='text-sm font-medium py-2 px-4 bg-primary rounded-sm duration-500 text-white hover:bg-secondary'>Continue Shipping</button>
            <button className='text-sm font-medium py-2 px-4 bg-secondary rounded-sm duration-500 text-white hover:bg-primary'>Clear Cart</button>
        </div>

      </div>

      {/* <!-- Sub total --> */}

      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">$129.99</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$4.99</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">$134.98 USD</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default Cart