import React, { Suspense } from 'react';
import HeroSection from '../HeroSection';
import heroData from '../../../data/heroData';

const PmrgFeaturs = React.lazy(() => import('./PmrgFeaturs'));
const Crm = React.lazy(() => import('./Crm'));
const Erp = React.lazy(() => import('./Erp'));
const SelfCarePortal = React.lazy(() => import('./SelfCarePortal'));
const ProjectsCarousel = React.lazy(() => import('./ProjectsCarousel'));
const Teams = React.lazy(() => import('./Teams'));
const TestimonialCarousel = React.lazy(() => import('./TestimonialCarousel'));
const DigitalTransformationPage = React.lazy(() => import('./DigitalTransformationPage'));

function Home() {
  return (
    <>
      <HeroSection {...heroData} />
      <Suspense fallback={null}>
        <PmrgFeaturs />
        <Crm />
        <Erp />
        <SelfCarePortal />
        <DigitalTransformationPage />
        <ProjectsCarousel />
        <Teams />
        <TestimonialCarousel />
      </Suspense>
    </>
  );
}

export default Home;
