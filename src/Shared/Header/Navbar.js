import React from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/logo.png'
import {FaUserAlt} from 'react-icons/fa'
import {BsCartFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='max-w-7xl mx-auto lg:px-5 px-6 md:px-10'>
            <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
                <div className="logo order-1">
                    <img className='w-40' src={logoImg} alt="" />
                </div>
                <div className="menu order-3 lg:order-2">
                    <div className='flex items-center space-x-5'>
                        <NavLink to='/' className='active font-medium'>Home</NavLink>
                        <NavLink to='about' className='active font-medium'>About</NavLink>
                        <NavLink to='products' className='active font-medium'>Products</NavLink>
                        <NavLink to='/' className='active font-medium'>Privacy Policy</NavLink>
                        <NavLink to='shipping' className='active font-medium'>Shiping & returns</NavLink>
                        <NavLink to='blog' className='active font-medium'>Blog</NavLink>
                        <NavLink to='/' className='active font-medium'>Contact</NavLink>
                        <NavLink to='/' className='active font-medium'>other</NavLink>
                       
                        </div>  
                </div>
                <div className="cart-icons flex items-center space-x-3 order-2 lg:order-3">
                    <p>Login</p>
                    <p><FaUserAlt></FaUserAlt> </p>
                    <p><BsCartFill></BsCartFill> </p>
                    <p>Admin</p>
                </div>
            </div>

    </div>
  )
}

export default Navbar