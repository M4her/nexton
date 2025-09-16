import React from 'react'
import { Link } from 'react-router'
import logo from  '../assets/images/logo.png'
import { CiSearch } from 'react-icons/ci'
import { RiUserLine } from 'react-icons/ri'
import { FiShoppingCart } from 'react-icons/fi'
import Cart from './Cart'


const Navbar = () => {
  return (
    <>
    <nav id='Navbar' className='py-[27px]'>
      <div className="container">
        <div className="nav_row flex justify-between items-center">
          <Link to={'/'} className='w-[119px]' >
          <img src={logo} alt="logo" />
          </Link>
          <div className="nav_search w-[400px] h-[52px] rounded-[100px] bg-[#F8F8F8] px-6 py-4 flex items-center gap-2.5 ">
            <CiSearch className=' text-[#4B5563]'/>
            <input placeholder='Search in products...' type="text" 
            className='w-full border-none outline-none text-sm text-[#4B5563] font-normal' />

          </div>
          <div className="nav_icons">
            <button className='text-2xl text-[#4B5563]'><RiUserLine/></button>
            <button className='text-2xl text-[#4B5563] ml-[22px] relative'>
              <FiShoppingCart/>
              <div className='w-5 h-5 rounded-full bg-[#0EA5E9] text-[12px] text-[#fff]
               font-medium font-pop flex justify-center items-center absolute top-[-10px] right-[-8px]'>
                0
              </div>
              </button>
          </div>
        </div>

      </div>
      <Cart/>
    </nav>
    </>
  )
}

export default Navbar