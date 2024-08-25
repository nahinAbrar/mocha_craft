"use client"
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
import React from 'react'
import { useEffect } from 'react'

const Home = () => {
  //add locomotive scroll 
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    }

    loadLocomotiveScroll();
  }, [])

  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      {/*Temporary Div*/}
      <div className="h-[4000px]"></div>
    </div>
  )
}

export default Home