import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const LayoutOne = () => {
  return (
    <>
       <Header />
       <Navbar />
       <Outlet/>
    </>
  )
}

export default LayoutOne