import React from "react";
import europeImg from "../../../assets/mvn.webp";
import HeroSection from "../HeroSection";
import mvneconnectivitydata from "../../../data/mvneconnectivitydata";
import { PlusSquare, Radar, Globe2 } from "lucide-react";

export default function MVNEConnectivity() {
  return (
    <>
      <HeroSection {...mvneconnectivitydata} />

      <main className="w-full bg-white text-[#1a1f1c]">
        {/* THREE INFO CARDS */}
        <section className="px-4 sm:px-6 md:px-20 py-5 sm:py-8 lg:py-10">
          <div className="max-w-[1200px] mx-auto bg-slate-900/5 rounded-[28px] p-5 sm:p-6 lg:p-10 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Card 1 */}
              <div>
                <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                  <PlusSquare size={24} strokeWidth={2.2} />
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-bold leading-[1.2] mb-3">
                  New to the Game?
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-slate-800">
                  Starting a mobile operator business from scratch in the
                  Netherlands? PMRG Solution helps you launch successfully by
                  combining its OSS/BSS software with PMRG Solution’s mobile
                  core network. This integrated stack provides everything needed
                  to launch your MVNO quickly and efficiently.
                </p>
              </div>

              {/* Card 2 */}
              <div>
                <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                  <Radar size={24} strokeWidth={2.2} />
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-bold leading-[1.2] mb-3">
                  Looking for a New Software Partner?
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-slate-800">
                  Already working with an MVNE but want to change your OSS/BSS
                  software? PMRG Solution integrates with existing network
                  infrastructure, including KPN, Vodafone, and other MVNE
                  networks, enabling smooth migration without service disruption
                  or data loss.
                </p>
              </div>

              {/* Card 3 */}
              <div>
                <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                  <Globe2 size={24} strokeWidth={2.2} />
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-bold leading-[1.2] mb-3">
                  Outside of the Netherlands?
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-slate-800">
                  Based outside the Netherlands? PMRG Solution connects to MVNEs
                  across Europe, South America, and other regions through
                  standard protocols and flexible integration patterns, so
                  geography does not limit access to its OSS/BSS capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PMRG Solution INTEGRATION */}
        <section className="px-4 sm:px-6 md:px-20 py-5 sm:py-8 lg:py-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-4 sm:mb-6">
              PMRG Solution Integration
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.7] text-[#2b2f2c]">
              Integration with PMRG Solution’s MVNE platform provides the
              smoothest experience for operators in the Netherlands. Both
              systems are designed together, delivering real-time synchronization
              of customer data and instant provisioning when customers sign up
              or change services, removing the typical integration headaches.
            </p>
          </div>
        </section>

        {/* STANDARD MVNE PROTOCOLS – TEXT FIRST ON MOBILE */}
        <section className="px-4 sm:px-6 md:px-20 py-5 sm:py-8 lg:py-10">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* TEXT (mobile first) */}
            <div className="order-1 md:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-4 sm:mb-6">
                Standard MVNE
                <br />
                Protocols
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[1.7] tracking-normal text-[#1a1f1c] max-w-[620px]">
                PMRG Solution supports standard telecommunications interfaces for
                MVNE integration. Protocols for provisioning, usage collection,
                and service management connect reliably to major MVNEs such as
                KPN, Vodafone, Odido, and international enablers, giving
                operators vendor flexibility without sacrificing integration
                quality.
              </p>
            </div>

            {/* IMAGE (mobile below) */}
            <div className="order-2 md:order-2 rounded-[36px] overflow-hidden">
              <img
                src={europeImg}
                alt="MVNE connectivity map"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
