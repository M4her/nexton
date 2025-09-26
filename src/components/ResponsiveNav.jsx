import React, { useState } from "react";
import favicon from "../assets/images/favicon.png";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "./Cart";

const ResponsiveNav = () => {
    const[showNav , setShowNav] = useState(false)
      const [showCart, setShowCart] = useState(false);
    
  return (
    <>
      <nav className="py-3.5 lg:hidden ">
        <div className="container px-4">
          <div className="responsive_row flex justify-between items-center">
            <Link to={"/"} className="logo_col w-6 inline-block">
              <img className="w-full" src={favicon} alt="logo" />
            </Link>
            <form className="w-[200px] h-[36px] bg-[#F8F8F8] rounded-[9999px] flex items-center pl-4 gap-1.5">
              <CiSearch className="text-[18px]" />
              <input
                className="text-[12px] font-normal font-pop text-[#4B5563] outline-none"
                placeholder="Search in products..."
                type="text"
              />
            </form>
            <button onClick={()=>setShowNav(!showNav)}>
              <FaBars className="text-[24px]" />
            </button>
          </div>
        </div>
        {
            showNav&&
        <div className="w-full py-4 bg-white flex justify-center gap-5">
            <button><RiUserLine/></button>
            <button onClick={()=>setShowCart(true)}><FiShoppingCart/></button>
        </div>
        }
      </nav>
       <Cart isOpen={showCart} closeCart={() => setShowCart(false)} />
    </>
  );
};

export default ResponsiveNav;
