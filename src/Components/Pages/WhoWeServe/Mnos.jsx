import React from "react";
import sunset from "../../../assets/mnos.jpg";
import HeroSection from "../HeroSection";
import mnosData from "../../../data/mnosData";

/* ============================= */
/*  INLINE SVG ICON COMPONENTS   */
/* ============================= */

const IconTech = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4CAF50"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
  </svg>
);

const IconEfficiency = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4CAF50"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="21 11 21 7 17 7" />
  </svg>
);

const IconSpeed = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4CAF50"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

/* ===================================================== */
/*                 ⭐ MAIN PAGE – TAILWIND                */
/* ===================================================== */

export default function Mnos() {
  return (
    <main className=" w-full">

      {/* ================================ */}
      {/*   REPLACE LEGACY SYSTEMS SECTION */}
      {/* ================================ */}

      <HeroSection {...mnosData}/>

      <section className="w-full py-16 px-4">
        <div className="max-w-[1200px] mx-auto">

          {/* CENTERED HEADING + PARAGRAPH */}
          <div className="text-center mb-10">
            <h2 className="text-[48px] font-bold font-['PST Mail Sans'] text-[#0b2a18] mb-4">
              Replace Legacy Systems
            </h2>

            <p className="text-[20px] font-['Mona Sans'] text-[#2d3e36] leading-[1.7] max-w-[950px] mx-auto">
              Many MNOs operate on decades-old BSS platforms with accumulated technical debt,
              limited flexibility, and high maintenance costs. CleverMobi provides a modern
              alternative built from scratch. Migrate from legacy systems to gain agility,
              reduce costs, and enable innovation previously impossible with outdated infrastructure.
            </p>
          </div>

          {/* ======================== FEATURES BOX ======================== */}

          <div
            className="
              flex flex-col md:flex-row gap-8
              bg-[#f4f9ed] p-5 rounded-[32px]
            "
          >

            {/* FEATURE 1 */}
            <div className="flex-1">
              <div className="mb-3">
                <IconTech />
              </div>

              <h3 className="text-[26px] font-bold text-[#0b2a18] mb-3">
                Full Technology Support
              </h3>

              <p className="text-[18px] font-['Mona Sans'] text-[#2d3e36] leading-[1.7]">
                CleverMobi natively supports modern technologies including 5G plans, VoLTE,
                and eSIM provisioning. Legacy platforms struggle with these technologies
                through complex workarounds.
              </p>
            </div>

            {/* FEATURE 2 */}
            <div className="flex-1">
              <div className="mb-3">
                <IconEfficiency />
              </div>

              <h3 className="text-[26px] font-bold text-[#0b2a18] mb-3">
                Operational Efficiency
              </h3>

              <p className="text-[18px] font-['Mona Sans'] text-[#2d3e36] leading-[1.7]">
                Modern architecture dramatically improves operational efficiency. Automated
                workflows reduce manual work and errors. Self-service tools lower support load.
              </p>
            </div>

            {/* FEATURE 3 */}
            <div className="flex-1">
              <div className="mb-3">
                <IconSpeed />
              </div>

              <h3 className="text-[26px] font-bold text-[#0b2a18] mb-3">
                Product Innovation Speed
              </h3>

              <p className="text-[18px] font-['Mona Sans'] text-[#2d3e36] leading-[1.7]">
                CleverMobi lets operators launch new pricing plans, bundles, or promotions
                in hours rather than weeks or months.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================================ */}
      {/*         MIGRATION SUPPORT        */}
      {/* ================================ */}

      <section className="w-full pb-10 px-6 md:px-8 lg:px-30">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">

          {/* IMAGE */}
         <div className="w-full order-2">
            <img
              src={sunset}
              alt="Migration Support"
               className="w-full h-auto object-cover rounded-[32px]"
            />
          </div>

          {/* RIGHT TEXT COLUMN */}
          <div className="flex flex-col justify-center order-1">
            <h3 className="text-[48px] font-bold text-[#0b2a18] mb-6">
              Migration Support
            </h3>

            <p className="text-[20px]  text-[#2d3e36] leading-[1.7]">
              Migrating from legacy BSS platforms is complex but manageable with proper planning and execution. CleverMobi’s experienced team supports the entire migration process including detailed planning and risk mitigation, phased migration approaches minimizing disruption, data migration and validation, and parallel operation during transition periods ensuring continuity.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
