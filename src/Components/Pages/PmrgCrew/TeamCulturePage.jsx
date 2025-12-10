import React from "react";
import skiTrip from "../../../assets/Ski-foto.jpg"; // replace with your actual image
import cultureImg from "../../../assets/ourculture.webp"; // replace with your actual image
import HeroSection from "../HeroSection";
import teamculturedata from "../../../data/teamculturedata";
import { useNavigate } from "react-router-dom";


export default function TeamCulturePage() {
   const navigation =useNavigate();
   const handleNavigation=()=>{
    navigation('/contact');
   }

  return (
   <>
   <HeroSection {...teamculturedata}/>
    <main className="w-full bg-white">



      {/* --------------------------------------------------------- */}
      {/* ANNUAL SKI TRIP SECTION */}
      {/* --------------------------------------------------------- */}
      <section className="px-6 md:px-16 lg:px-20 py-5 lg:py-10">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          
          {/* Image */}
          <div className="w-full">
            <img
              src={skiTrip}
              alt="Ski Trip"
              className="rounded-[32px] w-full h-auto object-contain"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[1.15] mb-6">
              Annual Ski Trip
            </h2>

            <p className="text-[18px] leading-[1.7] text-gray-700 max-w-xl">
              Every year, the PMRG Solution team embarks on an annual ski trip to the mountains.
              This week-long adventure combines alpine skiing, team bonding, and relaxation
              away from work pressures. Whether experienced skiers or beginners, everyone
              participates and supports each other. Evening gatherings feature good food,
              drinks, and camaraderie. The ski trip has become a beloved tradition.
            </p>
          </div>

        </div>
      </section>


      {/* --------------------------------------------------------- */}
      {/* TEAM EVENTS SECTION */}
      {/* --------------------------------------------------------- */}
      {/* <section className="px-6 md:px-16 lg:px-32 py-10 text-center">
        <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[1.15] mb-6">
          Team Events
        </h2>

        <p className="text-[20px] leading-[1.7] max-w-3xl mx-auto text-gray-700">
          Beyond the annual ski trip, PMRG Solution organizes regular social events throughout
          the year. Team drinks after work celebrate project completions or just provide
          opportunities to unwind together. Dinners bring the team together for good food
          and conversation. These events make sure we stay connected with each other and
          can unwind from time-to-time.
        </p>
      </section> */}

      <section className="px-6 md:px-16 lg:px-20 py-5 text-center">
        <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[1.15] mb-6">
          Team Events
        </h2>

        <p className="text-[20px] leading-[1.7] max-w-3xl mx-auto text-gray-700">
          Beyond the annual ski trip, PMRG Solution organizes regular social events throughout
          the year. Team drinks after work celebrate project completions or just provide
          opportunities to unwind together. Dinners bring the team together for good food
          and conversation. These events make sure we stay connected with each other and
          can unwind from time-to-time.
        </p>
      </section>



      {/* --------------------------------------------------------- */}
      {/* THREE HIGHLIGHT CARDS */}
      {/* --------------------------------------------------------- */}
      <section className="px-6 md:px-16 lg:px-20">
        <div className="bg-[#F3F8E9] p-5 rounded-3xl grid md:grid-cols-3 gap-16">

          {/* CARD 1 */}
          <div>
            <div className="text-[#4CA30D] text-4xl mb-6">✨</div>

            <h3 className="text-[24px] font-bold tracking-[-0.02em] mb-4">
              Celebrating Success
            </h3>

            <p className="text-[16px] leading-[1.7] text-gray-700">
              When PMRG Solution achieves milestones or partners succeed, we celebrate together.
              Major operator launches, reaching platform milestones, or technical achievements
              are recognized with team celebrations. These moments acknowledge hard work and
              shared success. Celebrating together reinforces that everyone contributes to
              company achievements.
            </p>
          </div>

          {/* CARD 2 */}
          <div>
            <div className="text-[#4CA30D] text-4xl mb-6">⚖️</div>

            <h3 className="text-[24px] font-bold tracking-[-0.02em] mb-4">
              Work-Life Balance
            </h3>

            <p className="text-[16px] leading-[1.7] text-gray-700">
              While dedicated to delivering excellent software and service, PMRG Solution values
              work-life balance. Team events and fun activities demonstrate that work is important
              but so is enjoying life. Flexible working arrangements accommodate personal needs.
              Reasonable expectations prevent burnout. Happy, balanced team members perform better
              and stay longer.
            </p>
          </div>

          {/* CARD 3 */}
          <div>
            <div className="text-[#4CA30D] text-4xl mb-6">🤝</div>

            <h3 className="text-[24px] font-bold tracking-[-0.02em] mb-4">
              Collaborative Environment
            </h3>

            <p className="text-[16px] leading-[1.7] text-gray-700">
              Daily work emphasizes collaboration and mutual support. Team members help each other
              solve problems, share knowledge freely, and celebrate each other’s successes.
              Respectful communication and psychological safety enable honest discussions.
              People enjoy working together, which shows in software quality and innovation.
            </p>
          </div>

        </div>
      </section>


      {/* --------------------------------------------------------- */}
      {/* TEAM GROWTH SECTION */}
      {/* --------------------------------------------------------- */}
      <section className="px-6 md:px-16 lg:px-20 py-5 lg:py-10 text-center">
        <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[1.15] mb-6">
          Team Growth
        </h2>

        <p className="text-[20px] max-w-4xl mx-auto leading-[1.7] text-gray-700">
          As PMRG Solution grows, maintaining strong culture remains priority. New team members
          are welcomed warmly and integrated into traditions. Ski trips and events scale to
          include everyone. Culture evolves while preserving core values of collaboration,
          excellence, and enjoying the journey together. Growth strengthens rather than
          dilutes what makes PMRG Solution special.
        </p>
      </section>


      {/* --------------------------------------------------------- */}
      {/* JOIN OUR CULTURE SECTION */}
      {/* --------------------------------------------------------- */}
     <section className="px-6 md:px-16 lg:px-20 py-5 lg:py-10">
  <div className="flex flex-col lg:flex-row items-center gap-16">

    {/* TEXT BLOCK */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-[48px] font-bold tracking-[-0.03em] leading-[1.1] mb-8">
        Join Our Culture
      </h2>

      <p className="text-[20px] leading-[1.8] text-gray-700 max-w-[620px] mb-10">
        Talented professionals seeking more than just jobs are invited to join PMRG Solution.
        We offer challenging software development work, collaborative team environment,
        opportunities for growth and learning, and culture that values people and shared
        experiences. If this resonates, explore our career opportunities!
      </p>

      <button onClick={handleNavigation} className="bg-[#4CA30D] text-white px-8 py-4 rounded-full text-[18px] font-semibold shadow-md hover:bg-[#3d8a0e] transition">
        Check out our career opportunities!
      </button>
    </div>

    {/* IMAGE BLOCK */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src={cultureImg}
        alt="Team Culture"
        className="rounded-[40px] w-full max-w-[680px] object-cover shadow-xl"
      />
    </div>

  </div>
</section>


    </main>
   </>
  );
}
