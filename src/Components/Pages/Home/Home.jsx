import React from 'react'
import HeroSection from '../HeroSection'
import heroData  from '../../../data/heroData'
import PmrgFeaturs from './PmrgFeaturs'
import Crm from './Crm'
import BusinessInsights from './BusinessInsights'

function Home() {
  return (
    <>
   <HeroSection {...heroData} />
<PmrgFeaturs/>
<Crm/>
<BusinessInsights/>
      <div className='bg-amber-400 h-dvh' >
       
      
    </div>
        <div className='bg-amber-900 h-dvh' >
       
      
    </div>
    </>
  

  )
}

export default Home
