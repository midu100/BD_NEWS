import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LayoutOne = () => {
  return (
    <>
       <Header />
       <Navbar />
       <Outlet/>
       <Footer/>
    </>
  )
}

export default LayoutOne