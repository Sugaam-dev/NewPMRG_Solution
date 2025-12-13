import React from "react";
import { Award, SmilePlus, Rocket } from "lucide-react";
import milestoneImg from "../../../assets/bssoss.png";
import HeroSection from "../HeroSection";
import milestonedata from "../../../data/milestonedata";


export default function MilestonesPage() {


  const handleNavigation = () => {
   window.open("https://wa.me/7722017100", "_blank");
  };

  return (
    <>
      <HeroSection {...milestonedata} />

      <div className="w-full bg-white text-[#0b1f1a]">
        {/* IMAGE + TEXT BLOCK */}
        <section className="px-4 sm:px-6 lg:px-20 py-5 sm:py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* TEXT (mobile first) */}
            <div className="w-full lg:w-[52%] order-1 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-[-0.03em] mb-4 sm:mb-6">
                Platform Launch and
                <br />
                Growth
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-[1.7] font-normal text-gray-700 max-w-[620px]">
                PMRG Solution launched a modern OSS/BSS platform built from
                scratch without legacy constraints. The platform now serves
                hundreds of thousands of mobile customers, validating the
                architecture, reliability, and value proposition. Scaling while
                maintaining performance demonstrates platform robustness.
              </p>
            </div>

            {/* IMAGE (mobile below) */}
            <div className="w-full lg:w-[48%] order-2 lg:order-2">
              <img
                src={milestoneImg}
                alt="Milestone"
                className="w-full h-auto rounded-[32px] object-cover shadow-[0_20px_40px_rgba(15,23,42,0.25)]"
              />
            </div>
          </div>
        </section>

        {/* THREE HIGHLIGHT CARDS – BLUE THEME */}
        <section className="px-4 sm:px-6 lg:px-20 py-5 sm:py-8 lg:py-10">
          <div className="bg-slate-900/5 rounded-2xl p-6 sm:p-8 lg:p-10 grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1 */}
            <div>
              <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                <Award size={24} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-3">
                Technology Leadership
              </h3>
              <p className="text-sm sm:text-base leading-[1.7] text-gray-700">
                PMRG Solution supports the latest mobile technologies, including
                5G plans and billing, VoLTE and advanced voice services, and
                eSIM provisioning and management. Recognition as a
                future‑focused OSS/BSS provider attracts partners seeking modern
                solutions.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                <SmilePlus size={24} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-sm sm:text-base leading-[1.7] text-gray-700">
                High satisfaction reflects platform quality and support.
                Operators choose PMRG Solution for modern technology and stay
                for reliable service and responsive assistance. Long‑term
                partnerships show value far beyond initial launch.
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                <Rocket size={24} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-3">
                Product Innovation
              </h3>
              <p className="text-sm sm:text-base leading-[1.7] text-gray-700">
                Continuous enhancements and performance improvements keep PMRG
                Solution at the forefront of OSS/BSS capabilities, without
                disruptive “big bang” upgrades, so operators benefit from steady
                innovation.
              </p>
            </div>
          </div>
        </section>

        {/* PMRG PARTNERSHIP */}
        <section className="px-4 sm:px-6 lg:px-20 text-center py-5 sm:py-8 lg:py-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.15] mb-4 sm:mb-6">
            PMRG Solution Partnership
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-[1.7] text-gray-700 mb-8 sm:mb-10">
            Strong partnership with PMRG Solution creates complete MVNE
            solutions. Deep integration between platforms provides seamless
            end‑to‑end operations, coordinated support, and a unified customer
            experience that is difficult to match with fragmented vendor stacks.
          </p>

          <button
            onClick={handleNavigation}
            className="bg-slate-900 text-white px-8 py-3 rounded-full text-[18px] font-medium transition hover:bg-slate-800"
          >
            PMRG Solution MVNE
          </button>
        </section>
      </div>
    </>
  );
}
