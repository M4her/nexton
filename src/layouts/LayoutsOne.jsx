import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResponsiveNav from '../components/ResponsiveNav'

const LayoutsOne = () => {
  return (
    <>
    <ResponsiveNav/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutsOne