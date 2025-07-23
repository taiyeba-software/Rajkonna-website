
import React from 'react'
import  {AudioToggle}  from "@/components/AudioToggle";
import { StarBackground } from '../components/StarBackground';
import {Navbar} from '../components/Navbar'


function Home() {
  return (
    <div className='min-h-screen  bg-background text-foreground overflow-x-hidden '>

    {/*ambient music*/}

   <AudioToggle />


    HOME
    {/*background effects */}
    <StarBackground/>

    {/*NAVBAR  */}
    <Navbar/>

    {/*main content */}
    <main>
      
    </main>


    {/*footer */}


    </div>
  )
}

export default Home

