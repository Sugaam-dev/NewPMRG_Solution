import React from 'react'
import HeroSection from '../HeroSection'
import heroData  from '../../../data/heroData'
function Home() {
  return (
    <>
   <HeroSection {...heroData} />
      <div className='bg-amber-400 h-dvh' >
       
      
    </div>
        <div className='bg-amber-900 h-dvh' >
       
      
    </div>
    </>
  

  )
}

export default Home
