// // // import React from "react";
// // // import heroImg from "../../../assets/sunset.jpg";
// // // import cardImg from "../../../assets/invoicing.png";
// // // import mapImg from "../../../assets/sunset.jpg";

// // // const IconIoT = () => (
// // //   <svg
// // //     width="36"
// // //     height="36"
// // //     viewBox="0 0 24 24"
// // //     fill="none"
// // //     stroke="#8BC34A"
// // //     strokeWidth="2.2"
// // //     strokeLinecap="round"
// // //     strokeLinejoin="round"
// // //   >
// // //     <rect x="3" y="3" width="18" height="18" rx="3" />
// // //     <path d="M8 12h8" />
// // //     <path d="M12 8v8" />
// // //   </svg>
// // // );

// // // const IconModel = () => (
// // //   <svg
// // //     width="36"
// // //     height="36"
// // //     viewBox="0 0 24 24"
// // //     fill="none"
// // //     stroke="#8BC34A"
// // //     strokeWidth="2.2"
// // //     strokeLinecap="round"
// // //     strokeLinejoin="round"
// // //   >
// // //     <path d="M3 7h18" />
// // //     <path d="M6 21V7" />
// // //     <path d="M18 21V7" />
// // //     <path d="M10 12h4" />
// // //   </svg>
// // // );

// // // const IconWholesale = () => (
// // //   <svg
// // //     width="36"
// // //     height="36"
// // //     viewBox="0 0 24 24"
// // //     fill="none"
// // //     stroke="#8BC34A"
// // //     strokeWidth="2.2"
// // //     strokeLinecap="round"
// // //     strokeLinejoin="round"
// // //   >
// // //     <rect x="3" y="3" width="18" height="18" rx="2" />
// // //     <path d="M7 7h10" />
// // //     <path d="M7 12h10" />
// // //     <path d="M7 17h10" />
// // //   </svg>
// // // );

// // // export default function SpecializedMarkets() {
// // //   return (
// // //     <main className="font-['Mona_Sans'] bg-white text-[#2d3e36]">

// // //       {/* =========================
// // //           B2B SECTION (FIXED)
// // //       ========================== */}
// // //       <section className="px-6 py-20 bg-white">
// // //         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[480px_1fr] gap-16 items-center">

// // //           {/* LEFT IMAGE — EXACT LIKE FIRST SCREENSHOT */}
// // //           <div className="rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-[420px] md:h-[480px]">
// // //             <img
// // //               src={cardImg}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>

// // //           {/* RIGHT TEXT — CENTERED + CORRECT LINE HEIGHT */}
// // //           <div className="flex flex-col justify-center">
// // //             <h2 className="font-['PST_Mail_Sans'] text-[52px] font-bold leading-[1.15] mb-6">
// // //               B2B Mobile Services
// // //             </h2>

// // //             <p className="text-[20px] leading-[1.7] font-normal">
// // //               Business customers require different capabilities than consumers.
// // //               CleverMobi handles multi-user corporate accounts, hierarchical organizational
// // //               structures, customized billing and invoicing, bulk management and provisioning,
// // //               and corporate-specific reporting. Enterprise sales cycles and contract complexity
// // //               are supported through flexible configuration matching B2B business models.
// // //             </p>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* =========================
// // //           DARK CARDS SECTION
// // //       ========================== */}
// // //       <section className="bg-[#0f2b20] text-[#dbeede] px-6 py-8">
// // //         <div className="max-w-[1200px] mx-auto">

// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

// // //             {/* CARD 1 */}
// // //             <div className="bg-white/5 rounded-[14px] border border-white/5 p-6 min-h-[220px]">
// // //               <div className="mb-3"><IconIoT /></div>
// // //               <h3 className="font-['PST_Mail_Sans'] text-[20px] text-white mb-2">
// // //                 IoT Connectivity Management
// // //               </h3>
// // //               <p className="text-[15px] text-white/80 leading-[1.6]">
// // //                 CleverMobi supports millions of low-data device connections, specialized routing,
// // //                 device lifecycle management, and API-based provisioning for massive deployments.
// // //               </p>
// // //             </div>

// // //             {/* CARD 2 */}
// // //             <div className="bg-white/5 rounded-[14px] border border-white/5 p-6 min-h-[220px]">
// // //               <div className="mb-3"><IconModel /></div>
// // //               <h3 className="font-['PST_Mail_Sans'] text-[20px] text-white mb-2">
// // //                 Custom Business Models
// // //               </h3>
// // //               <p className="text-[15px] text-white/80 leading-[1.6]">
// // //                 CleverMobi supports custom pricing, revenue sharing, reseller models, and
// // //                 non-standard product structures without platform constraints.
// // //               </p>
// // //             </div>

// // //             {/* CARD 3 */}
// // //             <div className="bg-white/5 rounded-[14px] border border-white/5 p-6 min-h-[220px]">
// // //               <div className="mb-3"><IconWholesale /></div>
// // //               <h3 className="font-['PST_Mail_Sans'] text-[20px] text-white mb-2">
// // //                 Wholesale & MVNO Enablement
// // //               </h3>
// // //               <p className="text-[15px] text-white/80 leading-[1.6]">
// // //                 Supports partner management, wholesale billing, and multi-tenant operations
// // //                 from one platform.
// // //               </p>
// // //             </div>

// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* =========================
// // //           INTERNATIONAL SECTION
// // //       ========================== */}
// // //       <section className="px-6 py-20 bg-white">
// // //         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12 items-center">

// // //           <div className="pr-2">
// // //             <h2 className="font-['PST_Mail_Sans'] text-[48px] font-bold mb-4">
// // //               International Operations
// // //             </h2>
// // //             <p className="text-[20px] leading-[1.7]">
// // //               CleverMobi handles multi-currency billing, tax compliance, localized comms,
// // //               and roaming management — enabling smooth international expansion.
// // //             </p>
// // //           </div>

// // //           <div className="rounded-[18px] overflow-hidden shadow-[0_14px_36px_rgba(0,0,0,0.08)]">
// // //             <img src={mapImg} className="w-full h-full object-cover" />
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* =========================
// // //           INTEGRATION FLEXIBILITY
// // //       ========================== */}
// // //       <section className="px-6 py-28 bg-white text-center">
// // //         <div className="max-w-[900px] mx-auto">
// // //           <h2 className="font-['PST_Mail_Sans'] text-[32px] font-bold mb-4">
// // //             Integration Flexibility
// // //           </h2>
// // //           <p className="text-[20px] leading-[1.7] text-[#2d3e36]">
// // //             CleverMobi’s open API architecture connects with industry systems, custom apps,
// // //             legacy platforms, and partner ecosystems — fitting into your environment rather
// // //             than forcing you to change.
// // //           </p>
// // //         </div>
// // //       </section>

// // //     </main>
// // //   );
// // // }





// // import React from "react";
// // import heroImg from "../../../assets/sunset.jpg";
// // import cardImg from "../../../assets/invoicing.png";
// // import mapImg from "../../../assets/sunset.jpg";

// // const IconIoT = () => (
// //   <svg
// //     width="36"
// //     height="36"
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="#8BC34A"
// //     strokeWidth="2.2"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //   >
// //     <rect x="3" y="3" width="18" height="18" rx="3" />
// //     <path d="M8 12h8" />
// //     <path d="M12 8v8" />
// //   </svg>
// // );

// // const IconModel = () => (
// //   <svg
// //     width="36"
// //     height="36"
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="#8BC34A"
// //     strokeWidth="2.2"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //   >
// //     <path d="M3 7h18" />
// //     <path d="M6 21V7" />
// //     <path d="M18 21V7" />
// //     <path d="M10 12h4" />
// //   </svg>
// // );

// // const IconWholesale = () => (
// //   <svg
// //     width="36"
// //     height="36"
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="#8BC34A"
// //     strokeWidth="2.2"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //   >
// //     <rect x="3" y="3" width="18" height="18" rx="2" />
// //     <path d="M7 7h10" />
// //     <path d="M7 12h10" />
// //     <path d="M7 17h10" />
// //   </svg>
// // );

// // export default function SpecializedMarkets() {
// //   return (
// //     <main className="font-['Mona_Sans'] bg-white text-[#2d3e36]">

// //       {/* ======================================
// //           FIXED — B2B SECTION (PERFECT MATCH)
// //       ======================================= */}
// //       <section className="px-6 py-20 bg-white">
// //         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[480px_1fr] gap-16 items-center">

// //           {/* LEFT IMAGE */}
// //           <div className="rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-[420px] md:h-[480px]">
// //             <img
// //               src={cardImg}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>

// //           {/* RIGHT TEXT */}
// //           <div className="flex flex-col justify-center">
// //             <h2 className="font-['PST_Mail_Sans'] text-[52px] font-bold leading-[1.15] mb-6">
// //               B2B Mobile Services
// //             </h2>

// //             <p className="text-[20px] leading-[1.7] font-normal">
// //               Business customers require different capabilities than consumers.
// //               CleverMobi handles multi-user corporate accounts, hierarchical organizational
// //               structures, customized billing and invoicing, bulk management and provisioning,
// //               and corporate-specific reporting. Enterprise sales cycles and contract complexity
// //               are supported through flexible configuration matching B2B business models.
// //             </p>
// //           </div>

// //         </div>
// //       </section>

// //       {/* ======================================
// //           FIXED — DARK CARDS SECTION
// //           EXACT MATCH TO FIRST SCREENSHOT
// //       ======================================= */}
// //       <section className="bg-[#0c261d] text-white px-6 py-20">
// //         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

// //           {/* CARD 1 */}
// //           <div className="bg-[#0f3226] border border-[#1b4435] rounded-[18px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
// //             <div className="mb-4">
// //               <IconIoT />
// //             </div>
// //             <h3 className="font-['PST_Mail_Sans'] text-[22px] font-semibold leading-[1.3] mb-4">
// //               IoT Connectivity<br />Management
// //             </h3>
// //             <p className="text-[16px] leading-[1.75] text-white/80">
// //               IoT services differ fundamentally from consumer mobile. CleverMobi supports millions
// //               of low-data device connections, specialized rating for machine-to-machine communication,
// //               device lifecycle management, and API-based provisioning for automated deployments.
// //             </p>
// //           </div>

// //           {/* CARD 2 */}
// //           <div className="bg-[#0f3226] border border-[#1b4435] rounded-[18px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
// //             <div className="mb-4">
// //               <IconModel />
// //             </div>
// //             <h3 className="font-['PST_Mail_Sans'] text-[22px] font-semibold leading-[1.3] mb-4">
// //               Custom Business<br />Models
// //             </h3>
// //             <p className="text-[16px] leading-[1.75] text-white/80">
// //               Specialized operators often have unique business models not fitting standard templates.
// //               CleverMobi’s flexible architecture adapts to unusual rating schemes, custom billing cycles,
// //               and non-standard product structures — enabling innovation without constraints.
// //             </p>
// //           </div>

// //           {/* CARD 3 */}
// //           <div className="bg-[#0f3226] border border-[#1b4435] rounded-[18px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
// //             <div className="mb-4">
// //               <IconWholesale />
// //             </div>
// //             <h3 className="font-['PST_Mail_Sans'] text-[22px] font-semibold leading-[1.3] mb-4">
// //               Wholesale and MVNO<br />Enablement
// //             </h3>
// //             <p className="text-[16px] leading-[1.75] text-white/80">
// //               Some operators provide wholesale services or enable MVNOs. CleverMobi supports these
// //               models with partner management, wholesale rating and billing, revenue sharing, and
// //               multi-tenant operations — all from one platform.
// //             </p>
// //           </div>

// //         </div>
// //       </section>

// //       {/* ======================================
// //           INTERNATIONAL SECTION (UNCHANGED)
// //       ======================================= */}
// //       <section className="px-6 py-20 bg-white">
// //         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12 items-center">

// //           <div className="pr-2">
// //             <h2 className="font-['PST_Mail_Sans'] text-[48px] font-bold mb-4">
// //               International Operations
// //             </h2>
// //             <p className="text-[20px] leading-[1.7]">
// //               CleverMobi handles multi-currency billing, tax compliance, localized comms,
// //               and roaming management — enabling smooth international expansion.
// //             </p>
// //           </div>

// //           <div className="rounded-[18px] overflow-hidden shadow-[0_14px_36px_rgba(0,0,0,0.08)]">
// //             <img src={mapImg} className="w-full h-full object-cover" />
// //           </div>

// //         </div>
// //       </section>

// //       {/* ======================================
// //           INTEGRATION FLEXIBILITY (UNCHANGED)
// //       ======================================= */}
// //       <section className="px-6 py-28 bg-white text-center">
// //         <div className="max-w-[900px] mx-auto">
// //           <h2 className="font-['PST_Mail_Sans'] text-[32px] font-bold mb-4">
// //             Integration Flexibility
// //           </h2>
// //           <p className="text-[20px] leading-[1.7] text-[#2d3e36]">
// //             CleverMobi’s open API architecture connects with industry systems, custom apps,
// //             legacy platforms, and partner ecosystems — fitting into your environment rather
// //             than forcing you to change.
// //           </p>
// //         </div>
// //       </section>

// //     </main>
// //   );
// // }








// import React from "react";
// import heroImg from "../../../assets/sunset.jpg";
// import cardImg from "../../../assets/invoicing.png";
// import mapImg from "../../../assets/provisioning.png";

// const IconIoT = () => (
//   <svg
//     width="36"
//     height="36"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="#8BC34A"
//     strokeWidth="2.2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect x="3" y="3" width="18" height="18" rx="3" />
//     <path d="M8 12h8" />
//     <path d="M12 8v8" />
//   </svg>
// );

// const IconModel = () => (
//   <svg
//     width="36"
//     height="36"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="#8BC34A"
//     strokeWidth="2.2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M3 7h18" />
//     <path d="M6 21V7" />
//     <path d="M18 21V7" />
//     <path d="M10 12h4" />
//   </svg>
// );

// const IconWholesale = () => (
//   <svg
//     width="36"
//     height="36"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="#8BC34A"
//     strokeWidth="2.2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect x="3" y="3" width="18" height="18" rx="2" />
//     <path d="M7 7h10" />
//     <path d="M7 12h10" />
//     <path d="M7 17h10" />
//   </svg>
// );

// export default function SpecializedMarkets() {
//   return (
//     <main className="font-['Mona_Sans'] bg-white text-[#2d3e36]">

//       {/* ======================================
//           FIXED — B2B SECTION (PERFECT MATCH)
//       ======================================= */}
//       <section className="px-6 py-20 bg-white">
//         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[480px_1fr] gap-16 items-center">

//           {/* LEFT IMAGE */}
//           <div className="rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-[420px] md:h-[480px]">
//             <img
//               src={cardImg}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* RIGHT TEXT */}
//           <div className="flex flex-col justify-center">
//             <h2 className="font-['PST_Mail_Sans'] text-[52px] font-bold leading-[1.15] mb-6">
//               B2B Mobile Services
//             </h2>

//             <p className="text-[20px] leading-[1.7] font-normal">
//               Business customers require different capabilities than consumers.
//               CleverMobi handles multi-user corporate accounts, hierarchical organizational
//               structures, customized billing and invoicing, bulk management and provisioning,
//               and corporate-specific reporting. Enterprise sales cycles and contract complexity
//               are supported through flexible configuration matching B2B business models.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* ======================================
//           FIXED — DARK CARDS SECTION
//           EXACT MATCH TO FIRST SCREENSHOT
//       ======================================= */}
//       <section className="bg-[#0c261d] text-white px-6 py-20">
//         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

//           {/* CARD 1 */}
//           <div className="bg-[#0f3226] border border-[#1b4435] rounded-[18px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
//             <div className="mb-4">
//               <IconIoT />
//             </div>
//             <h3 className="font-['PST_Mail_Sans'] text-[22px] font-semibold leading-[1.3] mb-4">
//               IoT Connectivity<br />Management
//             </h3>
//             <p className="text-[16px] leading-[1.75] text-white/80">
//               IoT services differ fundamentally from consumer mobile. CleverMobi supports millions
//               of low-data device connections, specialized rating for machine-to-machine communication,
//               device lifecycle management, and API-based provisioning for automated deployments.
//             </p>
//           </div>

//           {/* CARD 2 */}
//           <div className="bg-[#0f3226] border border-[#1b4435] rounded-[18px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
//             <div className="mb-4">
//               <IconModel />
//             </div>
//             <h3 className="font-['PST_Mail_Sans'] text-[22px] font-semibold leading-[1.3] mb-4">
//               Custom Business<br />Models
//             </h3>
//             <p className="text-[16px] leading-[1.75] text-white/80">
//               Specialized operators often have unique business models not fitting standard templates.
//               CleverMobi’s flexible architecture adapts to unusual rating schemes, custom billing cycles,
//               and non-standard product structures — enabling innovation without constraints.
//             </p>
//           </div>

//           {/* CARD 3 */}
//           <div className="bg-[#0f3226] border border-[#1b4435] rounded-[18px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
//             <div className="mb-4">
//               <IconWholesale />
//             </div>
//             <h3 className="font-['PST_Mail_Sans'] text-[22px] font-semibold leading-[1.3] mb-4">
//               Wholesale and MVNO<br />Enablement
//             </h3>
//             <p className="text-[16px] leading-[1.75] text-white/80">
//               Some operators provide wholesale services or enable MVNOs. CleverMobi supports these
//               models with partner management, wholesale rating and billing, revenue sharing, and
//               multi-tenant operations — all from one platform.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* ======================================
//           INTERNATIONAL SECTION (FIXED)
//           EXACT MATCH TO FIRST PERFECT DESIGN
//       ======================================= */}
//       <section className="px-6 py-24 bg-white">
//         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_500px] gap-20 items-center">

//           {/* LEFT TEXT */}
//           <div className="flex flex-col justify-center">
//             <h2 className="font-['PST_Mail_Sans'] text-[52px] font-bold leading-[1.15] mb-6">
//               International<br />Operations
//             </h2>

//             <p className="text-[20px] leading-[1.7] text-[#2d3e36]">
//               Operating across multiple countries introduces complexity. CleverMobi handles
//               multi-currency billing and payments, country-specific tax and regulatory
//               requirements, localized customer communications, and international roaming
//               management. Expand geographically without rebuilding business support systems
//               for each market.
//             </p>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] h-[420px] md:h-[520px]">
//             <img
//               src={mapImg}
//               className="w-full h-full object-cover"
//             />
//           </div>

//         </div>
//       </section>

//       {/* ======================================
//           INTEGRATION FLEXIBILITY (UNCHANGED)
//       ======================================= */}
//       <section className="px-6 py-28 bg-white text-center">
//         <div className="max-w-[900px] mx-auto">
//           <h2 className="font-['PST_Mail_Sans'] text-[32px] font-bold mb-4">
//             Integration Flexibility
//           </h2>
//           <p className="text-[20px] leading-[1.7] text-[#2d3e36]">
//             CleverMobi’s open API architecture connects with industry systems, custom apps,
//             legacy platforms, and partner ecosystems — fitting into your environment rather
//             than forcing you to change.
//           </p>
//         </div>
//       </section>

//     </main>
//   );
// }



import React from "react";
import heroImg from "../../../assets/sunset.jpg";
import cardImg from "../../../assets/invoicing.png";
import mapImg from "../../../assets/provisioning.png";

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

      {/* ======================================
          FIXED — B2B SECTION 
      ======================================= */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[480px_1fr] gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-[420px] md:h-[480px]">
            <img src={cardImg} className="w-full h-full object-cover" />
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-center">
            <h2 className="font-['PST_Mail_Sans'] text-[52px] font-bold leading-[1.15] mb-6">
              B2B Mobile Services
            </h2>

            <p className="text-[20px] leading-[1.7] font-normal">
              Business customers require different capabilities than consumers.
              CleverMobi handles multi-user corporate accounts, hierarchical organizational
              structures, customized billing and invoicing, bulk management and provisioning,
              and corporate-specific reporting. Enterprise sales cycles and contract complexity
              are supported through flexible configuration matching B2B business models.
            </p>
          </div>

        </div>
      </section>

      {/* ======================================
          FIXED — DARK CARDS SECTION
      ======================================= */}
      <section className="bg-[#0c261d] text-white px-6 py-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-[#0f3226] border border-[#1b4435] rounded-[18px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <div className="mb-4"><IconIoT /></div>
            <h3 className="font-['PST_Mail_Sans'] text-[22px] font-semibold leading-[1.3] mb-4">
              IoT Connectivity<br />Management
            </h3>
            <p className="text-[16px] leading-[1.75] text-white/80">
              IoT services differ fundamentally from consumer mobile. CleverMobi supports millions
              of low-data device connections, specialized rating for machine-to-machine communication,
              device lifecycle management, and API-based provisioning.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#0f3226] border border-[#1b4435] rounded-[18px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <div className="mb-4"><IconModel /></div>
            <h3 className="font-['PST_Mail_Sans'] text-[22px] font-semibold leading-[1.3] mb-4">
              Custom Business<br />Models
            </h3>
            <p className="text-[16px] leading-[1.75] text-white/80">
              Specialized operators often use non-standard models. CleverMobi adapts to unusual
              rating, billing cycles, custom product structures, and partner ecosystems.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#0f3226] border border-[#1b4435] rounded-[18px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <div className="mb-4"><IconWholesale /></div>
            <h3 className="font-['PST_Mail_Sans'] text-[22px] font-semibold leading-[1.3] mb-4">
              Wholesale & MVNO<br />Enablement
            </h3>
            <p className="text-[16px] leading-[1.75] text-white/80">
              Supports wholesale billing, revenue sharing, multi-tenant operations, and partner
              management — all on one platform.
            </p>
          </div>

        </div>
      </section>

      {/* ======================================
          FIXED — INTERNATIONAL OPERATIONS
      ======================================= */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_500px] gap-20 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="font-['PST_Mail_Sans'] text-[52px] font-bold leading-[1.15] mb-6">
              International<br />Operations
            </h2>

            <p className="text-[20px] leading-[1.7]">
              Operating across multiple countries introduces complexity. CleverMobi handles multi-currency billing and payments, 
              country-specific tax and regulatory requirements, localized customer communications, and international roaming management.
               Expand geographically without rebuilding business support systems for each market.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] h-[420px] md:h-[520px]">
            <img src={mapImg} className="w-full h-full object-cover" />
          </div>

        </div>
      </section>

      {/* ======================================
          FIXED — INTEGRATION FLEXIBILITY (PERFECT MATCH)
      ======================================= */}
      <section className="px-6 py-28 bg-white text-center">
        <div className="max-w-[750px] mx-auto">

          {/* HEADING — PST MAIL SANS */}
          <h2 className="font-['PST_Mail_Sans'] text-[52px] font-bold leading-[1.15] mb-6">
            Integration Flexibility
          </h2>

          {/* PARAGRAPH — MONA SANS */}
          <p className="font-['Mona_Sans'] text-[20px] font-normal leading-[1.7] tracking-normal text-[#2d3e36]">
            Specialized operations often require unique integrations. CleverMobi’s open API
            architecture connects with industry-specific systems, custom applications, legacy
            infrastructure requiring continued operation, and partner ecosystems. Integration
            flexibility ensures CleverMobi fits your environment rather than forcing ecosystem
            changes.
          </p>

        </div>
      </section>

    </main>
  );
}
