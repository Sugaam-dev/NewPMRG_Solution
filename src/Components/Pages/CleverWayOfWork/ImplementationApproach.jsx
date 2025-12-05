import React from "react";
import implImg1 from "../../../assets/implement.jpg";
import implImg2 from "../../../assets/lunchsupport.jpg";
import HeroSection from "../HeroSection";
import implementationapproachdata from "../../../data/implementationapproachdata";

export default function ImplementationApproach() {
  return (
    <> 
    <HeroSection {...implementationapproachdata}/>
    
    <main className="w-full bg-white text-[#1a1f1c] overflow-hidden">

      {/* =============================
          IMPLEMENTATION SECTION
      ============================== */}
      <section className="w-full px-6 py-24">
        <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="font-['PST_Mail_Sans'] text-[40px] md:text-[48px] leading-[1.15] font-bold mb-6">
              Implementation
            </h2>

            <p className="font-['Mona_Sans'] text-[18px] leading-[1.7] text-[#2b2f2c] mb-10">
              We guide you through the process of implementation and help you every step of the way.
            </p>

            {/* LIST */}
            <div className="space-y-8 text-[18px] font-['Mona_Sans'] leading-[1.7]">

              {/* Step 1 */}
              <div>
                <p className="font-semibold mb-2 flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-[14px]">1</span>
                  Discovery and Planning
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <p className="font-semibold mb-2 flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-[14px]">2</span>
                  System Configuration
                </p>
              </div>

              {/* Step 3 — Data Migration (expanded) */}
              <div>
                <p className="font-semibold mb-3 flex items-center gap-3 text-[#6ac93d]">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full border border-[#6ac93d] bg-[#6ac93d] text-white text-[14px]">3</span>
                  Data Migration
                </p>

                <div className="pl-6 border-l-[3px] border-[#6ac93d] text-[16px] leading-[1.7] text-[#2b2f2c] max-w-[500px]">
                  For operators migrating from existing systems, data migration is critical. CleverMobi supports 
                  migration through data mapping and transformation, migration tool development, validation ensuring 
                  accuracy, phased migration reducing risk, and parallel operation during transition. Clean data 
                  migration prevents operational disruptions.
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <p className="font-semibold mb-2 flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-[14px]">4</span>
                  Integration and Testing
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <img src={implImg1} alt="Implementation" className="w-full h-full object-cover" />
          </div>

        </div>
      </section>

      {/* =============================
          TRAINING & DOCUMENTATION
      ============================== */}
      <section className="w-full px-6 py-24 text-center">
        <h2 className="font-['PST_Mail_Sans'] text-[40px] md:text-[48px] leading-[1.15] font-bold mb-6">
          Training and Documentation
        </h2>

        <p className="font-['Mona_Sans'] text-[18px] leading-[1.7] max-w-[850px] mx-auto text-[#2b2f2c]">
          Successful adoption requires proper training and documentation. Operations team training covers daily tasks. 
          Customer service training ensures support readiness. Administrator training enables system management. 
          Comprehensive documentation provides ongoing reference. Well-trained teams ensure smooth operations from day one.
        </p>
      </section>

      {/* =============================
          LAUNCH SUPPORT
      ============================== */}
      <section className="w-full px-6 py-24">
        <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <img src={implImg2} alt="Launch Support" className="w-full h-full object-cover" />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="font-['PST_Mail_Sans'] text-[40px] md:text-[48px] leading-[1.15] font-bold mb-6">
              Launch Support
            </h2>

            <p className="font-['Mona_Sans'] text-[18px] leading-[1.7] text-[#2b2f2c] max-w-[550px]">
              CleverMobi provides intensive support during launch period. On-site or remote support is 
              available during go-live. Monitoring detects issues immediately. Rapid response resolves 
              problems quickly. Post-launch reviews identify improvements. Strong launch support ensures 
              successful transition to live operations.
            </p>
          </div>

        </div>
      </section>

      {/* =============================
          ONGOING PARTNERSHIP
      ============================== */}
      <section className="w-full px-6 py-24 text-center">
        <h2 className="font-['PST_Mail_Sans'] text-[40px] md:text-[48px] leading-[1.15] font-bold mb-6">
          Ongoing Partnership
        </h2>

        <p className="font-['Mona_Sans'] text-[18px] leading-[1.7] max-w-[850px] mx-auto text-[#2b2f2c]">
          Implementation doesn’t end at launch. CleverMobi maintains ongoing partnership through 
          regular check-ins, continuous optimization, support for new requirements, platform updates 
          and enhancements, and long-term success focus. We’re invested in your success beyond initial launch.
        </p>
      </section>

    </main></>
    
   
  );
}
