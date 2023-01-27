import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatePrice from '../../Helpers/FormatePrice';
import { useCartContext } from '../../Hooks/cart_context'
import CartList from './CartList';

const Cart = () => {

  
  const {cart,clearCart,total_price,shipping_fee } = useCartContext();


        if(cart.length === 0 ){
            return <div className="my-20 mx-auto text-center">
                <h2 className='text-2xl font-medium'>No Cart in Item</h2>
            </div>
        }

  return (
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
            <NavLink to='/products' className='text-sm font-medium py-2 px-4 bg-primary rounded-sm duration-500 text-white hover:bg-secondary'>Continue Shipping</NavLink>
            <button onClick={clearCart} className=' tracking-wide text-sm font-medium py-2 px-4 bg-secondary rounded-sm duration-500 text-white hover:bg-primary'>Clear Cart</button>
        </div>

      </div>

      {/* <!-- order total --> */}

      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal :</p>
          <p class="text-gray-700"> <FormatePrice price={total_price}></FormatePrice>  </p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping :</p>
          <p class="text-gray-700"><FormatePrice price={shipping_fee}></FormatePrice>  </p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold"><FormatePrice price={shipping_fee + total_price}></FormatePrice></p>
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