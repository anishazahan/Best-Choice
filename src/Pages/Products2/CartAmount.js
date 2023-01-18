import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";



const CartAmount = ({ amount, setDecrease, setIncrease }) => {
  return (

        <div className="">
          <div className="flex space-x-5 mt-3">
            <button className='border p-2 bg-slate-100' onClick={() => setDecrease()}>
              <FaMinus />
            </button>
            <div className="font-medium text-xl mx-3">{amount}</div>
            <button className='border p-2 bg-slate-100
            ' onClick={() => setIncrease()}>
              <FaPlus />
            </button>
          </div>
        </div>
  )
}

export default CartAmount