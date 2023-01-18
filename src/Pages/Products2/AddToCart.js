import React from 'react'
import { useState } from 'react';
import { BsCheck } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import CartAmount from './CartAmount';

const AddToCart = ({product}) => {
    const {id,stock,colors} = product;
    const [color,setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
      };
    
      const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
      };

  return (
    <div>

        {/* ///......color btn,,,,,,,,, */}

        <p className='flex space-x-2 items-center'>
            colors : 
            {
                colors.map  ((colorEle,index)=>{
                        return <button 
                        style={{backgroundColor:colorEle}}
                         className={` ${color === colorEle ? "w-4 h-4 rounded-[50%] ml-4 opacity-100" : "w-3 h-3 rounded-[50%] ml-4 opacity-30 hover:opacity-100"}`}  
                         onClick={() => setColor(colorEle)}
                         key={index}
                         > 
                        { color === colorEle ? <BsCheck className='text-white font-bold'/> : null }
                        </button>    
                })
            }
        </p>

         {/* ///......  cart amount toggle ,,,,,,,,, */}
         <CartAmount amount={amount}
             setDecrease={setDecrease}
             setIncrease={setIncrease}
         />

          {/* ///......  add to cart btn ,,,,,,,,, */}
          <NavLink to={''}>
            <button className='px-6 my-5 py-2 bg-secondary text-white font-semibold text-sm hover:bg-primary duration-500'>Add To Cart</button>
          </NavLink>

    </div>
  )
}

export default AddToCart