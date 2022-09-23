import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/logo.png'
import {FaUserAlt} from 'react-icons/fa'
import {BsCartFill} from 'react-icons/bs'
import {RiMenu2Line} from 'react-icons/ri'

const Navbar = () => {
  const [openMenu,setOpenMenu]= useState(false);
  return (
    <div className='max-w-7xl mx-auto lg:px-5 px-6 md:px-10 overflow-hidden'>
            <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
                <div className="logo lg:order-1">
                    <img className='w-40' src={logoImg} alt="" />
                </div>
                <div className="menu lg:order-2 hidden lg:block">
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
                
          
               
                


                <div className="cart-icons flex items-center space-x-3 lg:order-3">
                    <p>Login</p>
                    <p><FaUserAlt></FaUserAlt> </p>
                    <p><BsCartFill></BsCartFill> </p>
                    <p>Admin</p>
                   
                </div>

              
            </div>
            <div className="lg:hidden block text-right relative">
                   <button onClick={()=>{
                      console.log(openMenu);
                      setOpenMenu(!openMenu)
                    }} className='px-4 top-0 right-0 ml-10 text-black text-3xl '> <RiMenu2Line></RiMenu2Line> </button>
                     <div className={` block lg:hidden absolute top-20 z-30 ${openMenu? "right-0" : "-right-96"}`}>
                    <div className='flex space-y-3 flex-col items-center bg-violet-100'>
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
                   </div>

    </div>
  )
}

export default Navbar