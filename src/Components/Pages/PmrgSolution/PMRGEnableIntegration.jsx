// ===============================================
// PMRGEnableIntegration.jsx
// ===============================================

import React from "react";

// Import lucide-react icons
import { PlaySquare, Users, TrendingUp } from "lucide-react";

// Existing imports
import meetingImage from "../../../assets/combined.jpg";
import HeroSection from "../HeroSection";
import pmrgenableintegrationdata from "../../../data/pmrgenableintegrationdata";

// ===============================================
// COMPONENT START
// ===============================================

export default function PMRGEnableIntegration() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection {...pmrgenableintegrationdata} />

      <main className="w-full bg-white">

        {/* ========================================================= */}
        {/* COMPLETE INTEGRATED SOLUTION SECTION */}
        {/* ========================================================= */}

        <section className="py-10 bg-white">
          <div className="max-w-[1600px] mx-auto px-10">

            {/* Heading */}
            <h2 className="text-center text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
              Complete Integrated Solution
            </h2>

            {/* FIXED PARAGRAPH WIDTH */}
            <p className="mt-10 text-center text-[20px] leading-[1.8] max-w-[900px] mx-auto font-['Mona Sans',Helvetica,Arial,sans-serif]">
              PMRGMobi and PMRGEnable together provide everything mobile operators need.
              PMRGEnable delivers network infrastructure, connectivity, and provisioning while
              PMRGMobi handles billing, customer management, and business operations.
              Integration between platforms creates seamless end-to-end solution eliminating
              gaps between separate systems.
            </p>

            {/* ========================================================= */}
            {/* FIXED GREEN BOX RESPONSIVE UPDATE */}
            {/* ========================================================= */}

            <div className="mt-16 w-full flex justify-center">
              <div
                className="
                  bg-[#F5F7EB] rounded-[40px]
                  py-16 px-2
                  md:py-20 md:px-20
                  max-w-[1600px] w-full
                "
              >

              <div
  className="
    grid
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-10
    md:gap-16
    lg:gap-28
    text-left
  "
>


                  {/* ===================== BOX 1 ===================== */}
                  <div className="flex flex-col">
                    <PlaySquare
                      className="w-12 h-12 text-[#70B341] mb-6"
                      strokeWidth={2.4}
                    />

                    <h3 className="text-3xl font-bold  mb-4">
                      Real-Time Synchronization
                    </h3>

                    <p
                      className="
                        text-[16px] md:text-[18px]
                        leading-[1.9] text-[#333]
                        max-w-[90%] md:max-w-full
                      "
                    >
                      Both platforms maintain real-time synchronization ensuring consistency.
                      Customer signup in PMRGMobi triggers instant provisioning in PMRGEnable,
                      plan changes update both systems simultaneously, usage data flows
                      continuously from network to billing, and service status remains
                      synchronized across platforms. Real-time sync prevents data inconsistencies
                      frustrating customers and operators.
                    </p>
                  </div>

                  {/* ===================== BOX 2 ===================== */}
                  <div className="flex flex-col">
                    <Users
                      className="w-12 h-12 text-[#70B341] mb-6"
                      strokeWidth={2.4}
                    />

                    <h3 className="text-3xl font-bold mb-4">
                      Unified Customer Experience
                    </h3>

                    <p
                      className="
                        text-[16px] md:text-[18px]
                        leading-[1.9] text-[#333]
                        max-w-[90%] md:max-w-full
                      "
                    >
                      Integration creates seamless customer experience across touchpoints.
                      Self-service portals access both billing and network functions, plan
                      changes take effect immediately on network and billing, usage monitoring
                      shows real-time network data, and customer service sees complete
                      information spanning both platforms. Customers experience one integrated
                      service.
                    </p>
                  </div>

                  {/* ===================== BOX 3 ===================== */}
                  <div className="flex flex-col">
                    <TrendingUp
                      className="w-12 h-12 text-[#70B341] mb-6"
                      strokeWidth={2.4}
                    />

                    <h3 className="text-3xl font-bold mb-4">
                      Operational Efficiency
                    </h3>

                    <p
                      className="
                        text-[16px] md:text-[18px]
                        leading-[1.9] text-[#333]
                        max-w-[90%] md:max-w-full
                      "
                    >
                      Integrated operations reduce operational complexity significantly.
                      Single customer onboarding process spans both platforms, automated
                      workflows cross platform boundaries seamlessly, unified reporting
                      provides complete business visibility, and coordinated support resolves
                      issues faster. Operations teams work more efficiently with integrated
                      systems.
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* RAPID SERVICE LAUNCH SECTION */}
        {/* ========================================================= */}

        <section className="py-2 bg-white">
          <div className="text-center max-w-4xl mx-auto px-6">

            <h2 className="text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
              Rapid Service Launch
            </h2>

            <p className="mt-6 text-[20px] leading-[1.7] font-['Mona Sans',Helvetica,Arial,sans-serif]">
              Integration accelerates launching new mobile services dramatically. Configure
              services once affecting both platforms, test end-to-end customer journeys
              comprehensively, launch new offerings in hours instead of weeks, and modify
              services quickly as markets evolve. Speed to market provides competitive
              advantage.
            </p>

          </div>
        </section>

        {/* ========================================================= */}
        {/* COMBINED EXPERTISE SECTION */}
        {/* ========================================================= */}

        <section className="py-10 bg-white">
          <div className="max-w-[1700px] mx-auto px-5 grid md:grid-cols-2 gap-20 items-center">

            {/* LEFT IMAGE */}
            <div className="w-full">
              <img
                src={meetingImage}
                alt="team meeting"
                className="rounded-[35px] shadow-xl w-full h-auto object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="flex flex-col  justify-center max-w-[650px]">

              <h2 className="text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
                Combined Expertise
              </h2>

              <p className="mt-6 text-[20px] leading-[1.8] font-['Mona Sans',Helvetica,Arial,sans-serif] text-[#333]">
                PMRGMobi and PMRGEnable partnership brings together comprehensive expertise.
                Network operations knowledge from PMRGEnable, business systems expertise from
                PMRGMobi, collaborative support across both teams, and decades of combined
                telecommunications experience. Partnership provides complete solution with
                expert support across all dimensions.
              </p>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ALTERNATIVE INTEGRATION OPTIONS SECTION */}
        {/* ========================================================= */}

        <section className=" bg-white">
          <div className="text-center max-w-[1600px] mx-auto px-10">

            {/* Heading */}
            <h2 className="text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
              Alternative Integration Options
            </h2>

            {/* FIXED PARAGRAPH */}
            <p className="mt-8 text-[20px] leading-[1.8] max-w-[1100px] mx-auto font-['Mona Sans',Helvetica,Arial,sans-serif] text-[#333]">
              While PMRGEnable integration provides optimal experience, PMRGMobi also integrates
              with other MVNEs. Open APIs support connections to any MVNE platform, standard
              protocols enable common integration patterns, and experienced integration team
              supports implementations. PMRGMobi works with your preferred MVNE partner while
              providing smoothest experience with PMRGEnable.
            </p>

          </div>
        </section>

      </main>
    </>
  );
}
