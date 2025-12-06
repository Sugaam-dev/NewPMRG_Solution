// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import RootLayout from './Components/RootLayout/RootLayout'
// import Home from './Components/Pages/Home/Home'

// function App() {
//   return (
//  <>
//  <BrowserRouter>
//  <Routes>
//   <Route path='/' element={<RootLayout/>}/>
//    <Route index element={<Home/>} />
//  </Routes>
//  </BrowserRouter>
 
//  </>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import Mnos from "./Components/Pages/WhoWeServe/Mnos";
import Mvnos from "./Components/Pages/WhoWeServe/Mvnos";
import SpecializedMarkets from "./Components/Pages/WhoWeServe/SpecializedMarkets";
import PlatformHighlights from "./Components/Pages/PmrgSolution/PlatformHighlights";
import CustomerExperience from "./Components/Pages/PmrgSolution/CustomerExperience";
import DevelopmentPhilosophyPage from "./Components/Pages/PMRGWayOfWork/DevelopmentPhilosophyPage";
import MVNEConnectivity from "./Components/Pages/PMRGWayOfWork/MVNEConnectivity";
import ImplementationApproach from "./Components/Pages/PMRGWayOfWork/ImplementationApproach";
import TMForumPage from "./Components/Pages/PMRGWayOfWork/TMForumPage";
import OurTeamPage from "./Components/Pages/PmrgCrew/OurTeamPage";
import MilestonesPage from "./Components/Pages/PmrgCrew/MilestonesPage";
import TeamCulturePage from "./Components/Pages/PmrgCrew/TeamCulturePage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root layout */}
        <Route path="/" element={<RootLayout />}>
          {/* Default page inside RootLayout */}
          <Route index element={<Home />} />         
           <Route path="contact" element={<Contact/>}/>

           <Route path="who-we-serve/mnos" element={<Mnos/>}/>
          <Route path="who-we-serve/mvnos" element={<Mvnos/>}/>
          <Route path="who-we-serve/specialized-markets" element={<SpecializedMarkets/>}/>

          <Route path="solution-of-pmrg/platform-highlights" element={<PlatformHighlights/>}/>
          <Route path="solution-of-pmrg/customer-experience" element={<CustomerExperience/>}/>


          <Route path="pmrg-way-of-work/developmentphilosophy" element={<DevelopmentPhilosophyPage/>}/>
          <Route path="pmrg-way-of-work/mvne-connectivity" element={<MVNEConnectivity/>}/>
          <Route path="pmrg-way-of-work/implementation-approach" element={<ImplementationApproach/>}/>
          <Route path="pmrg-way-of-work/tmforum" element={<TMForumPage/>}/>

          <Route path="pmrg-crew/our-team" element={<OurTeamPage/>}/>
          <Route path="pmrg-crew/miles-stone" element={<MilestonesPage/>}/>
          <Route path="pmrg-crew/team-culture" element={<TeamCulturePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
