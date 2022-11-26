import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
import ScrollToTop from "react-scroll-to-top";
import {AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className="footer-section">
    <ScrollToTop smooth  top='1000'/>
    <footer className=" px-5 md:px-7 lg:px-10 py-16 text-white mx-auto flex flex-col md:flex-row max-w-7xl justify-between">
  <div className="mx-auto lg:mx-0 text-center lg:text-left">
    <h1 className="mb-5 text-2xl font-bold footer-title">Best Choice</h1>
    <p className="font-medium">Best Choice Smart Service Company<br/> Providing reliable tech since   {(new Date().getFullYear())}</p>
  </div> 
 <div className=" py-10 lg:py-0 flex flex-row justify-around lg:justify-between  lg:space-x-36">
 <div>
    <h1 className=" mb-5 footer-title">Services</h1> 
    <div className="flex flex-col space-y-2">
    <Link to='/' className="link link-hover">Product</Link> 
    <Link to='/' className="link link-hover">Available</Link> 
    <Link to='/' className="link link-hover">Blog</Link> 
    <Link to='/' className="link link-hover">Advertisement</Link>
    </div>
  </div> 
  <div>
    <h1 className="footer-title mb-5">Company</h1> 
  <div className="flex flex-col space-y-2">
  <Link to='/' className="link link-hover">About us</Link> 
    <Link to='/' className="link link-hover">Contact</Link> 
    <Link to='/' className="link link-hover">Privacy Policy</Link> 
    <Link to='/' className="link link-hover">Shiping & Return</Link>
  </div>
  </div> 
 </div>
  <div className="mx-auto lg:mx-0">
    <h1 className="footer-title mb-5">Newsletter</h1> 
    <div className="icons flex space-x-5 mt-10 mx-auto">
                            <Link className='text-3xl rounded-sm bg-secondary hover:bg-white duration-500 hover:text-secondary text-white p-2  shadow-lg' to='/'> <AiFillFacebook></AiFillFacebook> </Link>
                            <Link className='text-3xl rounded-sm bg-secondary hover:bg-white duration-500 hover:text-secondary text-white p-2  shadow-lg' to='/'> <AiFillLinkedin></AiFillLinkedin> </Link>
                            <Link className='text-3xl rounded-sm bg-secondary hover:bg-white duration-500 hover:text-secondary text-white p-2  shadow-lg' to='/'> <AiFillInstagram></AiFillInstagram> </Link>
                            <Link className='text-3xl rounded-sm bg-secondary hover:bg-white duration-500 hover:text-secondary text-white p-2  shadow-lg' to='/'> <AiFillTwitterSquare></AiFillTwitterSquare> </Link>
                        </div>
  </div>
</footer>
<section>
  <div className=" py-4  px-5 lg:px-16">
  <hr className="border border-gray-500" />
  </div>
  <h2 className="text-center text-white mt-3">Copyrignt all right reserved  {(new Date().getFullYear())} </h2>
  <h2 className="text-center text-white pb-10 pt-3">By <span className="uppercase font-extrabold text-[17px] text-secondary">Anisha Zahan</span> </h2>
</section>


    </div>
  );
};

export default Footer;
