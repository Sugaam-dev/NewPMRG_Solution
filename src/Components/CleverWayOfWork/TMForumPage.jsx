// // import React from "react";
// // import teamImg from "../../assets/develop.webp";

// // export default function TMForumPage() {
// //   return (
// //     <main className="w-full bg-white text-[#1a1f1c] overflow-hidden">

    

// //       {/* =============================
// //           EXPERIENCED TEAM SECTION (LEFT IMAGE — RIGHT TEXT)
// //       ============================== */}
// //       <section className="w-full px-6 py-28">
// //         <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

// //           {/* LEFT IMAGE */}
// //           <div className="rounded-[26px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] h-[420px] md:h-[520px]">
// //             <img
// //               src={teamImg}
// //               alt="CleverMobi Team"
// //               className="w-full h-full object-cover"
// //             />
// //           </div>

// //           {/* RIGHT TEXT */}
// //           <div>
// //             <h2 className="font-['PST_Mail_Sans'] text-[48px] font-bold leading-[1.15] mb-5">
// //               Experienced Team
// //             </h2>

// //             <p className="font-['Mona_Sans'] text-[18px] leading-[1.7]">
// //               CleverMobi’s development team combines software engineering expertise with telecommunications
// //               domain knowledge. Developers understand billing complexity, provisioning requirements, and
// //               regulatory constraints. This dual expertise produces software that works elegantly for mobile
// //               operator use cases rather than generic solutions requiring extensive customization. Does this
// //               seem like an environment you would like to work in? Join our team! We are constantly looking
// //               for new people to work and grow with us!
// //             </p>
// //           </div>

// //         </div>
// //       </section>

// //     </main>
// //   );
// // }



// import React from "react";
// import teamImg from "../../assets/develop.webp";

// export default function TMForumPage() {
//   return (
//     <main className="w-full bg-white text-[#1a1f1c] overflow-hidden">

//       {/* =============================
//           EXPERIENCED TEAM SECTION — PERFECT MATCH
//       ============================== */}
//       <section className="w-full px-6 py-32">
//         <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-28 items-center">

//           {/* LEFT IMAGE — BIGGER + ROUNDED + SOFT GLOW */}
//           <div className="rounded-[36px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
//             <img
//               src={teamImg}
//               alt="CleverMobi Team"
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           {/* RIGHT TEXT — PROPER SPACING + TYPOGRAPHY */}
//           <div className="pr-10">
//             <h2 className="font-['PST_Mail_Sans'] text-[56px] font-bold leading-[1.15] mb-8">
//               Experienced Team
//             </h2>

//             <p className="font-['Mona_Sans'] text-[20px] leading-[1.7] tracking-normal max-w-[650px]">
//               CleverMobi’s development team combines software engineering expertise with
//               telecommunications domain knowledge. Developers understand billing complexity,
//               provisioning requirements, and regulatory constraints. This dual expertise produces
//               software that works elegantly for mobile operator use cases rather than generic
//               solutions requiring extensive customization. Does this seem like an environment you
//               would like to work in? Join our team! We are constantly looking for new people to work
//               and grow with us!
//             </p>
//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }



import React from "react";
import teamImg from "../../assets/develop.webp";

export default function TMForumPage() {
  return (
    <main className="w-full bg-white text-[#1a1f1c] overflow-hidden">

      {/* =============================
          EXPERIENCED TEAM — PERFECT MATCH + CSS RULES APPLIED
      ============================== */}
      <section className="w-full px-6 py-32">

        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-28 items-center 
                        font-medium leading-[1.6] tracking-[-0.02em]">

          {/* LEFT IMAGE — ABSOLUTE FIX, BORDER RADIUS 32PX */}
          <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

            <img
              src={teamImg}
              alt="CleverMobi Team"
              className="
                absolute inset-0 w-full h-full object-cover color-transparent
              "
            />
            {/* Maintain aspect ratio */}
            <div className="pt-[66%]"></div>

          </div>

          {/* RIGHT TEXT — UPDATED TYPOGRAPHY */}
          <div>
            <h2 className="font-['PST_Mail_Sans'] text-[56px] font-bold leading-[1.15] mb-8">
              Experienced Team
            </h2>

            <p className="font-['Mona_Sans'] text-[20px] leading-[1.6] tracking-[-0.02em] max-w-[650px]">
              CleverMobi’s development team combines software engineering expertise with
              telecommunications domain knowledge. Developers understand billing complexity,
              provisioning requirements, and regulatory constraints. This dual expertise produces
              software that works elegantly for mobile operator use cases rather than generic
              solutions requiring extensive customization. Does this seem like an environment you
              would like to work in? Join our team! We are constantly looking for new people to work
              and grow with us!
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
