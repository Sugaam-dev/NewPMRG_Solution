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
import Mnos from "./Components/Pages/PmrgSolution/Mnos";
import Contact from "./Components/Pages/Contact/Contact";

import Mvnos from "./Components/Pages/PmrgSolution/Mvnos";
import SpecializedMarkets from "./Components/Pages/PmrgSolution/SpecializedMarkets";
import OurTeamPage from "./Components/Pages/PmrgCrew/OurTeamPage";
import MilestonesPage from "./Components/Pages/PmrgCrew/MilestonesPage";
import TeamCulturePage from "./Components/Pages/PmrgCrew/TeamCulturePage";
import DevelopmentPhilosophyPage from "./Components/Pages/CleverWayOfWork/DevelopmentPhilosophyPage";
import MVNEConnectivity from "./Components/Pages/CleverWayOfWork/MVNEConnectivity";
import ImplementationApproach from "./Components/Pages/CleverWayOfWork/ImplementationApproach";
import TMForumPage from "./Components/Pages/CleverWayOfWork/TMForumPage";
import PlatformHighlights from "./Components/Pages/SolutionOfPMRG/PlatformHighlights";
import CustomerExperience from "./Components/Pages/SolutionOfPMRG/CustomerExperience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root layout */}
        <Route path="/" element={<RootLayout />}>
          {/* Default page inside RootLayout */}
          <Route index element={<Home />} />
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
           <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
