import React from "react";
import heroImg from "../../../assets/sunset.jpg";
import cardImg from "../../../assets/invoicing.png";
import mapImg from "../../../assets/provisioning.png";
import HeroSection from "../HeroSection";
import specializedData from "../../../data/specializedData";
import { Network, Layers3, Building2 } from "lucide-react"; // Lucide icons

export default function SpecializedMarkets() {
  return (
    <>
      <HeroSection {...specializedData} />

      <main className="bg-white text-[#2d3e36]">
        {/* B2B SECTION */}
     <section className="px-4 sm:px-6 py-5 sm:py-8 lg:py-10 bg-white">
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-10 lg:gap-16 items-center">
    {/* TEXT (mobile first) */}
    <div className="order-1 lg:order-2 flex flex-col justify-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
        B2B Mobile Services
      </h2>
      <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
        Business customers require different capabilities than consumers.
        PMRG-Solution handles multi-user corporate accounts, hierarchical
        organizational structures, customized billing and invoicing, bulk
        management and provisioning, and corporate-specific reporting.
        Enterprise sales cycles and contract complexity are supported through
        flexible configuration matching B2B business models.
      </p>
    </div>

    {/* IMAGE (mobile below) */}
    <div className="order-2 lg:order-1 rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-60 sm:h-72 md:h-80 lg:h-96">
      <img
        src={cardImg}
        className="w-full h-full object-cover"
        alt="B2B invoicing"
      />
    </div>
  </div>
</section>


        {/* DARK BLUE CARDS SECTION */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-3 sm:px-6 py-5 sm:py-8 lg:py-10">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 text-white">
            {/* CARD 1 */}
            <div className="bg-slate-900/70 border border-blue-700/60 rounded-[18px] p-6 shadow-2xl">
              <div className="mb-4 text-blue-400">
                <Network size={36} strokeWidth={2.2} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-4">
                IoT Connectivity
                <br />
                Management
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-100/80">
                IoT services differ fundamentally from consumer mobile.
                PMRG-Solution supports millions of low-data device connections,
                specialized rating for machine-to-machine communication, device
                lifecycle management, and API-based provisioning.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-slate-900/70 border border-blue-700/60 rounded-[18px] p-6 lg:p-8 shadow-2xl">
              <div className="mb-4 text-blue-400">
                <Layers3 size={36} strokeWidth={2.2} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-4">
                Custom Business
                <br />
                Models
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-100/80">
                Specialized operators often use non-standard models.
                PMRG-Solution adapts to unusual rating, billing cycles, custom
                product structures, and partner ecosystems.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-slate-900/70 border border-blue-700/60 rounded-[18px] p-6 lg:p-8 shadow-2xl">
              <div className="mb-4 text-blue-400">
                <Building2 size={36} strokeWidth={2.2} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-4">
                Wholesale & MVNO
                <br />
                Enablement
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-100/80">
                Supports wholesale billing, revenue sharing, multi-tenant
                operations, and partner management — all on one platform.
              </p>
            </div>
          </div>
        </section>

     <section className="px-4 sm:px-6 py-5 sm:py-8 lg:py-10 bg-white">
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-10 lg:gap-20 items-center">
    {/* TEXT (mobile first) */}
    <div className="order-1 lg:order-1">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
        International
        <br />
        Operations
      </h2>
      <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
        Operating across multiple countries introduces complexity.
        PMRG-Solution handles multi-currency billing and payments,
        country-specific tax and regulatory requirements, localized customer
        communications, and international roaming management. Expand
        geographically without rebuilding business support systems for each
        market.
      </p>
    </div>

    {/* IMAGE (mobile below) */}
    <div className="order-2 lg:order-2 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] h-60 sm:h-72 md:h-96 lg:h-[520px]">
      <img
        src={mapImg}
        className="w-full h-full object-cover"
        alt="International operations map"
      />
    </div>
  </div>
</section>


        {/* INTEGRATION FLEXIBILITY */}
        <section className="px-4 sm:px-6 py-5 sm:py-8 lg:py-10 bg-white text-center">
          <div className="max-w-[750px] mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Integration Flexibility
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed tracking-normal text-[#2d3e36]">
              Specialized operations often require unique integrations.
              PMRG-Solution’s open API architecture connects with
              industry-specific systems, custom applications, legacy
              infrastructure requiring continued operation, and partner
              ecosystems. Integration flexibility ensures PMRG-Solution fits
              your environment rather than forcing ecosystem changes.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
