import React from "react";

// Example image imports (replace with your own)

import meetingImage from "../../../assets/combined.jpg";
import HeroSection from "../HeroSection";
import pmrgenableintegrationdata from "../../../data/pmrgenableintegrationdata";

export default function PMRGEnableIntegration() {
  return (
  <>
  <HeroSection {...pmrgenableintegrationdata}/>
    <main className="w-full bg-white">



      {/* ============================ COMPLETE INTEGRATED SOLUTION ============================ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
            Complete Integrated Solution
          </h2>

          <p className="mt-6 text-[20px] leading-[1.7] font-['Mona Sans',Helvetica,Arial,sans-serif]">
            CleverMobi and CleverEnable together provide everything mobile operators need. CleverEnable 
            delivers network infrastructure, connectivity, and provisioning while CleverMobi handles 
            billing, customer management, and business operations. Integration between platforms creates 
            seamless end-to-end solution eliminating gaps between separate systems.
          </p>

          {/* 3 COLUMNS BOX */}
          <div className="mt-16 bg-[#F5F7EB] rounded-xl p-10 grid md:grid-cols-3 gap-10 text-left">

            {/* BOX 1 */}
            <div>
              <h3 className="text-xl font-bold mb-3">Real-Time Synchronization</h3>
              <p className="text-[16px] leading-[1.7]">
                Both platforms maintain real-time synchronization ensuring consistency. Customer signup 
                in CleverMobi triggers instant provisioning in CleverEnable; plan changes update both 
                systems simultaneously; usage data flows continuously from network to billing, and 
                service status remains synchronized across platforms.
              </p>
            </div>

            {/* BOX 2 */}
            <div>
              <h3 className="text-xl font-bold mb-3">Unified Customer Experience</h3>
              <p className="text-[16px] leading-[1.7]">
                Integration creates seamless customer experience across touchpoints. Self-service portals 
                access both billing and network functions. Plan changes take effect immediately, usage 
                monitoring shows real-time data, and customer service sees complete information spanning 
                both platforms.
              </p>
            </div>

            {/* BOX 3 */}
            <div>
              <h3 className="text-xl font-bold mb-3">Operational Efficiency</h3>
              <p className="text-[16px] leading-[1.7]">
                Integrated operations reduce operational complexity significantly. Single onboarding 
                process spans both platforms, automated workflows operate across boundaries, unified 
                reporting provides visibility, and coordinated support resolves issues faster.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================ RAPID SERVICE LAUNCH ============================ */}
      <section className="py-24 bg-white">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
            Rapid Service Launch
          </h2>

          <p className="mt-6 text-[20px] leading-[1.7] font-['Mona Sans',Helvetica,Arial,sans-serif]">
            Integration accelerates launching new mobile services dramatically. Configure services once 
            affecting both platforms, test end-to-end customer journeys comprehensively, launch new 
            offerings in hours instead of weeks, and modify services quickly as markets evolve.
          </p>
        </div>
      </section>

      {/* ============================ COMBINED EXPERTISE ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT IMAGE */}
          <img
            src={meetingImage}
            alt="team meeting"
            className="rounded-xl shadow-xl w-full h-[420px] object-cover"
          />

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
              Combined Expertise
            </h2>

            <p className="mt-6 text-[20px] leading-[1.7] font-['Mona Sans',Helvetica,Arial,sans-serif]">
              CleverMobi and CleverEnable partnership brings together comprehensive expertise. Network 
              operations knowledge from CleverEnable, business systems expertise from CleverMobi, and 
              decades of combined telecom experience create complete solution with expert support across 
              all dimensions.
            </p>

            <button className="mt-8 bg-[#0B7A32] text-white px-6 py-3 rounded-full font-semibold shadow">
              CleverEnable MVNE
            </button>
          </div>
        </div>
      </section>

      {/* ============================ ALTERNATIVE INTEGRATION OPTIONS ============================ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold leading-tight font-['PST Mail Sans',Helvetica,Arial,sans-serif]">
            Alternative Integration Options
          </h2>

          <p className="mt-6 text-[20px] leading-[1.7] font-['Mona Sans',Helvetica,Arial,sans-serif]">
            While CleverEnable integration provides optimal experience, CleverMobi also integrates with 
            other MVNEs. Open APIs support connections to any MVNE platform, standard protocols enable 
            common integration patterns, and experienced integration teams support implementations.
          </p>
        </div>
      </section>
    </main>
  </>
  );
}
