import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer-section">
    
    <footer className=" px-5 md:px-7 lg:px-10 py-16 text-white mx-auto flex flex-col md:flex-row max-w-7xl justify-between">
  <div>
    <h1 className="mb-5 text-2xl font-bold footer-title">Best Choice</h1>
    <p className="font-medium">Best Choice Smart Service Company<br/> Providing reliable tech since   {(new Date().getFullYear())}</p>
  </div> 
 <div className="flex flex-col md:flex-row justify-between space-x-36">
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
  <div>
    <h1 className="footer-title mb-5">Newsletter</h1> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="Your Email" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
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
