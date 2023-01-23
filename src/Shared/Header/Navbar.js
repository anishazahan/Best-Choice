import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="max-w-7xl mx-auto lg:px-5 px-6 md:px-10">
      <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
        <Link to="/" className="logo lg:order-1 mx-auto md:mx-0">
          <img className="w-40 hover:bg-transparent" src={logoImg} alt="" />
        </Link>
        <div className="menu lg:order-2 hidden lg:block">
          <div className="flex items-center space-x-5">
            <NavLink to="/" className="active font-medium">
              Home
            </NavLink>

            <NavLink to="products" className="active font-medium">
              Products
            </NavLink>
            <NavLink to="/" className="active font-medium">
              Privacy Policy
            </NavLink>
            <NavLink to="shipping" className="active font-medium">
              Shiping & returns
            </NavLink>
            <NavLink to="about" className="active font-medium">
              About
            </NavLink>
            <NavLink to="blog" className="active font-medium">
              Blog
            </NavLink>
            <NavLink to="contact" className="active font-medium">
              Contact
            </NavLink>
            <NavLink to="/" className="active font-medium">
              other
            </NavLink>
          </div>
        </div>

        <div className="cart-icons flex items-center mt-5 mx-auto md:mx-0 md:mt-0 space-x-3 lg:order-3">
          {
            user? <Link onClick={logout} to='login' className="px-5 py-[5px] border font-medium border-secondary">
            SignOut</Link>
          :<Link to='login' className="px-5 py-[5px] border font-medium border-secondary">
            Login
          </Link>
          }
          <p className="text-xl">
            <FaUserAlt></FaUserAlt>{" "}
          </p>
          <NavLink to='cart' className="indicator">
            <span className="indicator-item badge badge-secondary">2</span>
            <button className="text-2xl p-2">
              <BsCartFill></BsCartFill>
            </button>
          </NavLink>
          {/*  </p> */}
           <NavLink to="admin" className="active font-medium">
              Admin
            </NavLink>
        </div>
      </div>



      <div className="lg:hidden block text-right relative bg-violet-300">
        <button
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className="px-4 top-0 right-0 ml-10 text-black text-3xl "
        >
          {" "}
          <RiMenu2Line></RiMenu2Line>{" "}
        </button>
        <div className={` block lg:hidden absolute top-15 z-30 ${openMenu? "right-0" : "hidden"}`}>
          <div className="flex space-y-3 flex-col items-center bg-violet-200 px-16 py-10 right-0 divide-y">
            <NavLink to="/" className="active font-medium">
              Home
            </NavLink>

            <NavLink to="products" className="active font-medium">
              Products
            </NavLink>
            <NavLink to="/" className="active font-medium">
              Privacy Policy
            </NavLink>
            <NavLink to="shipping" className="active font-medium">
              Shiping & returns
            </NavLink>
            <NavLink to="blog" className="active font-medium">
              Blog
            </NavLink>
            <NavLink to="about" className="active font-medium">
              About
            </NavLink>
            <NavLink to="/" className="active font-medium">
              Contact
            </NavLink>
            <NavLink to="/" className="active font-medium">
              other
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
