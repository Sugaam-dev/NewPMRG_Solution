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
      
    </>
  

  )
}

export default Home
