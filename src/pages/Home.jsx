import React from 'react'
import HeroNews from './HeroNews'
import LatestNews from './LatestNews'
import CategorySection from './CategorySection'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <>
      <HeroNews />
      <LatestNews />
      <CategorySection />
      <Footer />
    </>
  )
}

export default Home