import React from 'react'
import HeroSection from '../HeroSection'
import heroData  from '../../../data/heroData'
import PmrgFeaturs from './PmrgFeaturs'
import Crm from './Crm'
import BusinessInsights from './BusinessInsights'
import Teams from './Teams'
import TestimonialCarousel from './TestimonialCarousel'
import ProjectsCarousel from './ProjectsCarousel'

function Home() {
  return (
    <>
   <HeroSection {...heroData} />
<PmrgFeaturs/>
<Crm/>
<BusinessInsights/>
   <ProjectsCarousel/>
      <Teams/>
      <TestimonialCarousel/>
   
    </>
  

  )
}

export default Home
