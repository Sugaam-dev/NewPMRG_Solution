import React from "react";
import heroImg from "../../../assets/sunset.jpg";
import cardImg from "../../../assets/sunset.jpg";
import mapImg from "../../../assets/sunset.jpg";

const IconIoT = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8BC34A"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
  </svg>
);

const IconModel = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8BC34A"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 7h18" />
    <path d="M6 21V7" />
    <path d="M18 21V7" />
    <path d="M10 12h4" />
  </svg>
);

const IconWholesale = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8BC34A"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 7h10" />
    <path d="M7 12h10" />
    <path d="M7 17h10" />
  </svg>
);

export default function SpecializedMarkets() {
  return (
    <main className="font-['Mona_Sans'] bg-white text-[#2d3e36]">

      {/* HERO SECTION */}
      <section className="relative bg-[#0b6b2f] text-white px-6 py-14 overflow-visible">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_420px] gap-8 items-center">

          {/* LEFT TEXT */}
          <div className="py-6">
            <h1 className="font-['PST_Mail_Sans'] text-[48px] font-bold mb-3 leading-[1.05]">
              Adapted for Unique Requirements
            </h1>
            <p className="text-white text-[16px] opacity-95 max-w-[620px] leading-[1.7]">
              B2B operators, IoT service providers, and mobile operators with specialized
              requirements need flexible BSS platforms adapting to unique business models.
              CleverMobi’s modern architecture supports diverse use cases beyond traditional
              consumer mobile services.
            </p>
          </div>

          {/* RIGHT IMAGE + BLOB */}
          <div className="relative flex justify-end items-center">
            <div className="w-[340px] rounded-[18px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
              <img src={heroImg} className="w-full object-cover" />
            </div>

            <svg
              className="absolute right-[-60px] top-[-20px] w-[420px] h-[220px] pointer-events-none"
              viewBox="0 0 600 400"
              preserveAspectRatio="none"
            >
              <path
                fill="rgba(139,195,74,0.18)"
                d="M600,100 C520,220 480,260 420,300 C360,340 240,380 120,320 C0,260 40,120 120,80 C200,40 360,-10 460,40 C560,90 640,-20 600,100 Z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* B2B SECTION image left / text right */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[360px_1fr] gap-12 items-center">
          <div className="rounded-[18px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <img src={cardImg} className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="font-['PST_Mail_Sans'] text-[48px] font-bold mb-4">
              B2B Mobile Services
            </h2>

            <p className="text-[20px] leading-[1.7]">
              Business customers require different capabilities than consumers. CleverMobi
              handles multi-user corporate accounts, hierarchical organizational structures,
              customized billing and invoicing, bulk management and provisioning, and
              corporate-specific reporting. Enterprise sales cycles and contract complexity
              are supported through flexible configuration matching B2B business models.
            </p>
          </div>
        </div>
      </section>

      {/* DARK CARDS SECTION */}
      <section className="bg-[#0f2b20] text-[#dbeede] px-6 py-8">
        <div className="max-w-[1200px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* CARD 1 */}
            <div className="bg-white/5 rounded-[14px] border border-white/5 p-6 min-h-[220px]">
              <div className="mb-3"><IconIoT /></div>
              <h3 className="font-['PST_Mail_Sans'] text-[20px] text-white mb-2">
                IoT Connectivity Management
              </h3>
              <p className="text-[15px] text-white/80 leading-[1.6]">
                CleverMobi supports millions of low-data device connections, specialized routing,
                device lifecycle management, and API-based provisioning for massive deployments.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/5 rounded-[14px] border border-white/5 p-6 min-h-[220px]">
              <div className="mb-3"><IconModel /></div>
              <h3 className="font-['PST_Mail_Sans'] text-[20px] text-white mb-2">
                Custom Business Models
              </h3>
              <p className="text-[15px] text-white/80 leading-[1.6]">
                CleverMobi supports custom pricing, revenue sharing, reseller models, and
                non-standard product structures without platform constraints.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white/5 rounded-[14px] border border-white/5 p-6 min-h-[220px]">
              <div className="mb-3"><IconWholesale /></div>
              <h3 className="font-['PST_Mail_Sans'] text-[20px] text-white mb-2">
                Wholesale & MVNO Enablement
              </h3>
              <p className="text-[15px] text-white/80 leading-[1.6]">
                Supports partner management, wholesale billing, and multi-tenant operations
                from one platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL SECTION */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12 items-center">

          <div className="pr-2">
            <h2 className="font-['PST_Mail_Sans'] text-[48px] font-bold mb-4">
              International Operations
            </h2>
            <p className="text-[20px] leading-[1.7]">
              CleverMobi handles multi-currency billing, tax compliance, localized comms,
              and roaming management — enabling smooth international expansion.
            </p>
          </div>

          <div className="rounded-[18px] overflow-hidden shadow-[0_14px_36px_rgba(0,0,0,0.08)]">
            <img src={mapImg} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* INTEGRATION FLEXIBILITY */}
      <section className="px-6 py-28 bg-white text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-['PST_Mail_Sans'] text-[32px] font-bold mb-4">
            Integration Flexibility
          </h2>
          <p className="text-[20px] leading-[1.7] text-[#2d3e36]">
            CleverMobi’s open API architecture connects with industry systems, custom apps,
            legacy platforms, and partner ecosystems — fitting into your environment rather
            than forcing you to change.
          </p>
        </div>
      </section>

    </main>
  );
}
