import React from "react";
import sunset from "../../../assets/mnos.jpg";
import HeroSection from "../HeroSection";
import mnosData from "../../../data/mnosData";
import { SunMedium, Gauge, Rocket } from "lucide-react"; // Lucide icons

export default function Mnos() {
  return (
    <main className="w-full">
      <HeroSection {...mnosData} />

      {/* REPLACE LEGACY SYSTEMS SECTION */}
      <section className="w-full px-4 sm:px-6 py-5 sm:py-8 lg:py-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Heading + paragraph */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a18] mb-4">
              Replace Legacy Systems
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#2d3e36] leading-[1.7] max-w-[950px] mx-auto">
              Many MNOs operate on decades-old BSS platforms with accumulated technical
              debt, limited flexibility, and high maintenance costs. PMRG Solution
              provides a modern, AI-enabled alternative built from scratch. Migrate from legacy
              systems to gain agility, reduce costs, and leverage AI-driven insights that enable
              innovation previously impossible with outdated infrastructure.
            </p>
          </div>

          {/* Features box */}
          <div className="bg-slate-900/5 rounded-[40px] p-6 sm:p-8 lg:p-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 shadow-sm">
            {/* FEATURE 1 */}
            <div className="flex-1">
              <div className="mb-3 text-blue-500">
                <SunMedium size={36} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0b2a18] mb-3">
                Full Technology Support
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-[1.7]">
                PMRG Solution natively supports modern technologies including 5G plans,
                VoLTE, and eSIM provisioning, augmented with AI-powered orchestration and
                intelligent automation. Legacy platforms struggle with these technologies
                through complex workarounds.
              </p>
            </div>

            {/* FEATURE 2 */}
            <div className="flex-1">
              <div className="mb-3 text-blue-500">
                <Gauge size={36} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0b2a18] mb-3">
                Operational Efficiency
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-[1.7]">
                Modern architecture dramatically improves operational efficiency.
                AI-driven automated workflows reduce manual work and errors, while
                predictive analytics and intelligent self-service tools lower support load.
              </p>
            </div>

            {/* FEATURE 3 */}
            <div className="flex-1">
              <div className="mb-3 text-blue-500">
                <Rocket size={36} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0b2a18] mb-3">
                Product Innovation Speed
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-[1.7]">
                PMRG Solution lets operators launch new pricing plans, bundles, or
                promotions in hours rather than weeks or months, using AI-assisted
                configuration and real-time performance optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MIGRATION SUPPORT */}
      <section className="w-full px-4 sm:px-6 py-5 sm:py-8 lg:py-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 items-center">
          {/* IMAGE (mobile below) */}
          <div className="order-2 md:order-2 w-full">
            <img
              src={sunset}
              alt="Migration Support"
              className="w-full h-auto object-cover rounded-[32px]"
            />
          </div>

          {/* TEXT (mobile first) */}
          <div className="order-1 md:order-1 flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a18] mb-4 sm:mb-6">
              Migration Support
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-[#2d3e36] leading-[1.7]">
              Migrating from legacy BSS platforms is complex but manageable with proper
              planning and execution. PMRG Solution’s experienced team supports the
              entire migration process including AI-assisted impact analysis and risk
              mitigation, phased migration approaches minimizing disruption, intelligent
              data migration and validation, and parallel operation during transition
              periods ensuring continuity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
