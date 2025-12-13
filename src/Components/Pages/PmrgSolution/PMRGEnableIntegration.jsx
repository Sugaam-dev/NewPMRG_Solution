// ===============================================
// PMRGSolutionIntegration.jsx
// ===============================================

import React from "react";
import { PlaySquare, Users, TrendingUp } from "lucide-react";

import meetingImage from "../../../assets/combined.jpg";
import HeroSection from "../HeroSection";
import pmrgenableintegrationdata from "../../../data/pmrgenableintegrationdata";

export default function PMRGEnableIntegration() {
  return (
    <>
      <HeroSection {...pmrgenableintegrationdata} />

      <main className="w-full bg-white text-[#0b1f1a]">
        {/* COMPLETE INTEGRATED SOLUTION */}
        <section className="py-5 sm:py-8 lg:py-10 bg-white">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
              Complete Integrated Solution
            </h2>

            <p className="mt-6 sm:mt-8 text-center text-base sm:text-lg lg:text-xl leading-[1.8] max-w-[900px] mx-auto font-['Mona Sans',Helvetica,Arial,sans-serif]">
              PMRG Solution provide everything Solutionle operators need. PMRG
              Solution delivers network infrastructure, connectivity, and
              provisioning while PMRG Solution handles billing, customer
              management, and business operations. Tight integration creates a
              seamless end‑to‑end solution, removing gaps between separate
              systems.
            </p>

            {/* 3 FEATURE BOXES – BLUE THEME */}
            <div className="mt-10 sm:mt-12 w-full flex justify-center">
              <div className="bg-slate-900/5 rounded-[40px] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-16 max-w-[1600px] w-full">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 text-left">
                  {/* BOX 1 */}
                  <div className="flex flex-col">
                    <div className="w-11 h-11 mb-5 flex items-center justify-center rounded-full bg-slate-900/5 text-sky-500">
                      <PlaySquare size={26} strokeWidth={2.4} />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                      Real-Time Synchronization
                    </h3>
                    <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.9] text-[#333]">
                      PMRG Solution operates as a fully integrated system with
                      real-time synchronization across all internal platforms.
                      Customer signups instantly trigger service provisioning,
                      plan changes are updated across all modules, usage data
                      flows continuously from the network to billing, and
                      service status remains consistently aligned—eliminating
                      any possibility of data or service inconsistencies.
                    </p>
                  </div>

                  {/* BOX 2 */}
                  <div className="flex flex-col">
                    <div className="w-11 h-11 mb-5 flex items-center justify-center rounded-full bg-slate-900/5 text-sky-500">
                      <Users size={26} strokeWidth={2.4} />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                      Unified Customer Experience
                    </h3>
                    <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.9] text-[#333]">
                      Integration creates one experience across touchpoints.
                      Portals expose both billing and network actions, plan
                      changes take effect immediately, real‑time usage views
                      show network data, and support teams see complete
                      information from both systems.
                    </p>
                  </div>

                  {/* BOX 3 */}
                  <div className="flex flex-col">
                    <div className="w-11 h-11 mb-5 flex items-center justify-center rounded-full bg-slate-900/5 text-sky-500">
                      <TrendingUp size={26} strokeWidth={2.4} />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                      Operational Efficiency
                    </h3>
                    <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.9] text-[#333]">
                      Single onboarding flows span both platforms, cross‑system
                      workflows run automatically, unified reporting covers
                      network and business data, and joint support resolves
                      issues faster so operations teams work more efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RAPID SERVICE LAUNCH */}
        <section className="py-5 sm:py-8 lg:py-10 bg-white">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
              Rapid Service Launch
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-[1.7] font-['Mona Sans',Helvetica,Arial,sans-serif]">
              Integration accelerates launching new Solutionle services.
              Configure services once for both platforms, test complete customer
              journeys, launch new offerings in hours instead of weeks, and
              adjust services quickly as markets change so speed to market
              becomes a true advantage.
            </p>
          </div>
        </section>

        {/* COMBINED EXPERTISE – TEXT FIRST ON  SolutionLE */}
        <section className="py-5 sm:py-8 lg:py-10 bg-white">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* TEXT ( Solutionle first) */}
            <div className="order-1 md:order-1 flex flex-col justify-center max-w-[650px]">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
                Combined Expertise
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-[1.8] font-['Mona Sans',Helvetica,Arial,sans-serif] text-[#333]">
                PMRG Solution bring deep network operations knowledge and
                business‑system expertise. Joint support, shared roadmaps, and
                decades of telecommunications experience provide a complete
                solution across technology, operations, and business.
              </p>
            </div>

            {/* IMAGE ( Solutionle below) */}
            <div className="order-2 md:order-2 w-full flex justify-center">
              <img
                src={meetingImage}
                alt="team meeting"
                className="rounded-[35px] shadow-[0_20px_40px_rgba(15,23,42,0.25)] w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* ALTERNATIVE INTEGRATION OPTIONS */}
        <section className="py-5 sm:py-8 lg:py-10 bg-white">
          <div className="text-center max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
              Alternative Integration Options
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-[1.8] max-w-[1100px] mx-auto font-['Mona Sans',Helvetica,Arial,sans-serif] text-[#333]">
             PMRG Solution integrates seamlessly with multiple MVNE partners. Open APIs enable connectivity with external platforms, standard industry protocols simplify integration, and an experienced integration team supports implementation—allowing PMRG Solution to work smoothly with your preferred MVNE partner.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
