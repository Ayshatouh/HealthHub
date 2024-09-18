import React from 'react'
import NavigationBar from './NavigationBar'
import HeroSection from './HeroSection'
import SolutionsSection from './Footer'
import StatsSection from './Starts'

function Home() {
  return (
    <>
    <NavigationBar />
    <HeroSection />
    <StatsSection />
    <SolutionsSection />
    </>
  )
}

export default Home