import React from 'react'
import  {AudioToggle}  from "../components/AudioToggle";
import {Navbar} from '../components/Navbar'

import {StarBackground} from '../components/StarBackground';
import  {HeroSection}  from '../components/HeroSection';
import VideoPinSection from '../components/VideoPinSection';

function Home() {
  return (
    <div className='min-h-screen  bg-background text-foreground overflow-x-hidden '>
    
    <StarBackground />
    <Navbar /> {/* Navbar can be inside or outside the content-wrapper based on desired layering */}
      <div className="content-wrapper">
        <HeroSection />
        <VideoPinSection />
        {/* Other content follows here */}
      </div>

    </div>
  )
}

export default Home
