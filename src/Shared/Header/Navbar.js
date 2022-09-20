import React from 'react'
import logoImg from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='max-w-7xl mx-auto lg:px-5 px-6 md:px-10'>
            <div className="flex">
                <div className="logo">
                    <img className='w-40' src={logoImg} alt="" />
                </div>
                <div className="menu"></div>
                <div className="cart-icons"></div>
            </div>

    </div>
  )
}

export default Navbar