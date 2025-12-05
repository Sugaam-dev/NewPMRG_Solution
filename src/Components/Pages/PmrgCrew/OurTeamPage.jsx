// import React from "react";

// import chris from "../../../assets/chris.jpg";
// import karsten from "../../../assets/karsten.jpg";
// import maarten from "../../../assets/Maarten.jpg";
// import rob from "../../../assets/rob.jpg";
// import tim from "../../../assets/tim.jpg";
// import jelle from "../../../assets/kok.jpg";
// import christian from "../../../assets/lunchsupport.jpg";
// import mourad from "../../../assets/mourad.boustani.jpg";
// import vincent from "../../../assets/provisioning.png";
// import morris from "../../../assets/morris.jpg";
// import lily from "../../../assets/lily.jpg";
// import kelly from "../../../assets/kelly.webp";
// import maina from "../../../assets/Maina.jpg";

// export default function OurTeamPage() {
//   const team = [
//     { name: "Chris Jansen", img: chris },
//     { name: "Karsten Nilsen", img: karsten },
//     { name: "Maarten Visscher", img: maarten },
//     { name: "Rob Pennekamp", img: rob },
//     { name: "Tim Goudriaan", img: tim },
//     { name: "Jelle Raaijmakers", img: jelle },
//     { name: "Christian de Kok", img: christian },
//     { name: "Mourad Boustani", img: mourad },
//     { name: "Vincent Hoogendam", img: vincent },
//     { name: "Morris Hannessen", img: morris },
//     { name: "Lily Leenders", img: lily },
//     { name: "Kelly Tijssenraad", img: kelly },
//     { name: "Maina van Baal", img: maina }
//   ];

//   return (
//     <main className="w-full bg-white text-[#0f1a17] overflow-x-hidden">

//       <style>{`
//         .our-team-page div,
//         .our-team-page p {
//           font-weight: 500;
//           line-height: 1.6;
//           letter-spacing: -0.02em;
//           font-family: PST Mail Sans, Helvetica, Arial, sans-serif;
//         }

//         .our-team-page h2,
//         .our-team-page h3,
//         .our-team-page h4,
//         .our-team-page h5 {
//           font-family: PST Mail Sans, Helvetica, Arial, sans-serif;
//           font-weight: 700;
//           line-height: 1.15;
//           letter-spacing: -0.03em;
//         }

//         .team-img-box {
//           position: relative;
//           width: 100%;
//           padding-top: 100%;
//         }

//         /* PERFECT Customer Success heading */
//         .success-heading {
//           font-size: 48px;
//           margin-bottom: 20px;
//           font-weight: 700;
//           line-height: 1.15;
//           letter-spacing: -0.03em;
//           font-family: PST Mail Sans, Helvetica, Arial, sans-serif;
//         }

//         /* PERFECT paragraph typography */
//         .success-paragraph {
//           font-family: Mona Sans, Helvetica, Arial, sans-serif;
//           font-size: 20px;
//           font-weight: 400;
//           line-height: 1.7;
//           letter-spacing: normal;
//         }

//         .join-heading {
//           font-size: 48px;
//           margin-bottom: 20px;
//           font-weight: 700;
//           line-height: 1.15;
//           letter-spacing: -0.03em;
//           font-family: PST Mail Sans, Helvetica, Arial, sans-serif;
//           text-align: center;
//         }

//         .join-paragraph {
//           font-family: Mona Sans, Helvetica, Arial, sans-serif;
//           font-size: 20px;
//           font-weight: 400;
//           line-height: 1.7;
//           letter-spacing: normal;
//           text-align: center;
//           max-width: 850px;
//           margin: 0 auto;
//         }
//       `}</style>

//       <div className="our-team-page">

//         {/* ================= DESCRIPTION ================= */}
//         <section className="w-full bg-white pt-36 pb-20">
//           <div className="max-w-[800px] mx-auto px-6 text-[#26302d] leading-[1.7]">

//             <p>
//               We believe a Business Support System (BSS) should have one clear purpose:
//               empowering telecom companies to grow and retain customers. Traditional
//               processes are too slow—our agile approach ensures that pricing strategies,
//               discount structures, and marketing campaigns can be launched in hours
//               instead of days.
//             </p>

//             <p className="mt-6">
//               We are passionate about leveraging data-driven insights. Our platform
//               identifies customers likely to churn, enabling proactive and precise
//               targeting for retention campaigns.
//             </p>

//             <p className="mt-6">
//               Together, we’re committed to helping telecoms accelerate growth,
//               enhance customer retention, and stay ahead in a rapidly evolving market.
//             </p>

//           </div>
//         </section>

//         {/* ================= TEAM GRID ================= */}
//         <section className="w-full bg-white py-8">
//           <div className="max-w-[1200px] mx-auto px-6">

//             <div className="mb-10 text-left">
//               <div className="mb-2">
//                 <span className="text-[#6ac93d] font-semibold uppercase tracking-[0.5px] text-[13px]">
//                   Team
//                 </span>
//               </div>

//               <h3 className="text-[32px] md:text-[40px] lg:text-[42px] font-bold leading-[1.15]">
//                 Get to know our passionate and <br />
//                 knowledgeable team of developers.
//               </h3>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

//               {team.map((member) => (
//                 <div key={member.name} className="flex flex-col items-start">
//                   <div className="rounded-[12px] overflow-hidden bg-gray-100 w-full">
//                     <div className="team-img-box">
//                       <img
//                         src={member.img}
//                         alt={member.name}
//                         className="absolute inset-0 w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div className="mt-3 text-[15px] font-semibold">{member.name}</div>
//                 </div>
//               ))}

//               <div className="flex flex-col items-start">
//                 <div className="rounded-[12px] overflow-hidden bg-[#6ac93d] w-full h-full">
//                   <div className="team-img-box">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-2/3 h-2/3 bg-[rgba(255,255,255,0.12)] rounded-br-[50%]"></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-3 text-[15px] font-semibold text-[#0f1a17]">
//                   Jelle Raaijmakers
//                 </div>
//               </div>

//             </div>

//           </div>
//         </section>

//         {/* ================= CUSTOMER SUCCESS ================= */}
//         <section className="w-full bg-white py-20">
//           <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//             <div>
//               <h3 className="success-heading">
//                 Customer Success <br /> Focus
//               </h3>

//               <p className="success-paragraph">
//                 CleverMobi’s team focuses intensely on customer success beyond just technology
//                 delivery. We understand mobile operator business models, competitive challenges,
//                 and growth objectives. Team members work collaboratively with partners,
//                 communicate transparently about capabilities, and help operators succeed.
//                 Customer success mindset pervades our culture.
//               </p>
//             </div>

//             <div className="rounded-[18px] overflow-hidden shadow-md">
//               <div style={{ position: "relative", width: "100%", paddingTop: "105%" }}>
//                 <img
//                   src={chris}
//                   alt="customer success"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* ================= JOIN OUR TEAM ================= */}
//         <section className="w-full bg-white py-20">
//           <div className="max-w-[900px] mx-auto px-6 text-center">

//             <h3 className="join-heading">
//               Join our dynamic team and grow with us
//             </h3>

//             <p className="join-paragraph">
//               We are a (tech)-enthusiastic close group of colleagues who have innovation
//               as their top priority. Every CleverMobi team member is free to share ideas
//               to make things even smarter. Sounds like a fit? We’d love to get to know you!
//             </p>

//             <button
//               className="inline-block bg-[#6ac93d] hover:bg-[#55b22c] text-white px-8 py-4 rounded-full font-semibold mt-10"
//               style={{ fontSize: "18px" }}
//             >
//               Check out our career opportunities!
//             </button>

//           </div>
//         </section>

//         {/* ================= COLLAGE GRID ================= */}
//         <section className="w-full bg-white py-12">
//           <div className="max-w-[1200px] mx-auto px-6">

//             <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

//               <div className="rounded-[12px] bg-[#6ac93d] h-28" />

//               <div className="rounded-[12px] overflow-hidden h-28">
//                 <img src={maarten} className="w-full h-full object-cover" />
//               </div>

//               <div className="rounded-[12px] overflow-hidden h-28">
//                 <img src={morris} className="w-full h-full object-cover" />
//               </div>

//               <div className="rounded-[12px] overflow-hidden h-28">
//                 <img src={lily} className="w-full h-full object-cover" />
//               </div>

//               <div className="rounded-[12px] overflow-hidden h-28">
//                 <img src={kelly} className="w-full h-full object-cover" />
//               </div>

//               <div className="rounded-[12px] overflow-hidden h-28">
//                 <img src={maina} className="w-full h-full object-cover" />
//               </div>

//             </div>

//           </div>
//         </section>

//       </div>
//     </main>
//   );
// }



import React from "react";

import chris from "../../../assets/chris.jpg";
import karsten from "../../../assets/karsten.jpg";
import maarten from "../../../assets/Maarten.jpg";
import rob from "../../../assets/rob.jpg";
import tim from "../../../assets/tim.jpg";
import jelle from "../../../assets/kok.jpg";
import christian from "../../../assets/lunchsupport.jpg";
import mourad from "../../../assets/mourad.boustani.jpg";
import vincent from "../../../assets/provisioning.png";
import morris from "../../../assets/morris.jpg";
import lily from "../../../assets/lily.jpg";
import kelly from "../../../assets/kelly.webp";
import maina from "../../../assets/Maina.jpg";

export default function OurTeamPage() {
  const team = [
    { name: "Chris Jansen", img: chris },
    { name: "Karsten Nilsen", img: karsten },
    { name: "Maarten Visscher", img: maarten },
    { name: "Rob Pennekamp", img: rob },
    { name: "Tim Goudriaan", img: tim },
    { name: "Jelle Raaijmakers", img: jelle },
    { name: "Christian de Kok", img: christian },
    { name: "Mourad Boustani", img: mourad },
    { name: "Vincent Hoogendam", img: vincent },
    { name: "Morris Hannessen", img: morris },
    { name: "Lily Leenders", img: lily },
    { name: "Kelly Tijssenraad", img: kelly },
    { name: "Maina van Baal", img: maina },
  ];

  return (
    <main className="w-full bg-white text-[#0f1a17] overflow-x-hidden">

      <div>

        {/* ================= DESCRIPTION ================= */}
        <section className="w-full bg-white pt-36 pb-20">
          <div className="max-w-[800px] mx-auto px-6 text-[#26302d]">

            <p className="font-pst text-[18px] leading-[1.7]">
              We believe a Business Support System (BSS) should have one clear purpose:
              empowering telecom companies to grow and retain customers. Traditional
              processes are too slow—our agile approach ensures that pricing strategies,
              discount structures, and marketing campaigns can be launched in hours
              instead of days.
            </p>

            <p className="mt-6 font-pst text-[18px] leading-[1.7]">
              We are passionate about leveraging data-driven insights. Our platform
              identifies customers likely to churn, enabling proactive and precise
              targeting for retention campaigns.
            </p>

            <p className="mt-6 font-pst text-[18px] leading-[1.7]">
              Together, we’re committed to helping telecoms accelerate growth,
              enhance customer retention, and stay ahead in a rapidly evolving market.
            </p>

          </div>
        </section>

        {/* ================= TEAM GRID ================= */}
        <section className="w-full bg-white py-8">
          <div className="max-w-[1200px] mx-auto px-6">

            {/* Team label + Heading */}
            <div className="mb-10 text-center">
              <span className="text-[#6ac93d] font-pst uppercase tracking-[0.5px] text-[13px] block mb-2">
                Team
              </span>

              <h3 className="font-pst font-bold leading-[1.15] tracking-[-0.03em] text-[32px] md:text-[40px] lg:text-[42px]">
                Get to know our passionate and <br />
                knowledgeable team of developers.
              </h3>
            </div>

            {/* Team Cards */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"> */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">


              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-start">
                  <div className="rounded-[12px] overflow-hidden bg-gray-100 w-full">
                    <div className="relative w-full pt-[100%]">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-3 font-pst text-[15px] font-semibold">
                    {member.name}
                  </div>
                </div>
              ))}

              {/* Decorative green block */}
              <div className="flex flex-col items-start">
                <div className="rounded-[12px] overflow-hidden bg-[#6ac93d] w-full">
                  <div className="relative w-full pt-[100%]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2/3 h-2/3 bg-white/10 rounded-br-[50%]"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 font-pst text-[15px] font-semibold">
                  Jelle Raaijmakers
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= CUSTOMER SUCCESS ================= */}
        <section className="w-full bg-white py-20">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT TEXT */}
            <div>
              <h3 className="font-pst text-[48px] font-bold leading-[1.15] tracking-[-0.03em] mb-5">
                Customer Success <br /> Focus
              </h3>

              <p className="font-mona text-[20px] leading-[1.7] font-normal">
                CleverMobi’s team focuses intensely on customer success beyond just technology
                delivery. We understand mobile operator business models, competitive challenges,
                and growth objectives. Team members work collaboratively with partners,
                communicate transparently about capabilities, and help operators succeed.
                Customer success mindset pervades our culture.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="rounded-[18px] overflow-hidden shadow-md">
              <div className="relative w-full pt-[105%]">
                <img
                  src={chris}
                  alt="customer success"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================= JOIN OUR TEAM ================= */}
        <section className="w-full bg-white py-20">
          <div className="max-w-[900px] mx-auto px-6 text-center">

            {/* PERFECT Heading */}
            <h3 className="font-pst text-[48px] font-bold leading-[1.15] tracking-[-0.03em] mb-5">
              Join our dynamic team and grow with us
            </h3>

            {/* PERFECT paragraph */}
            <p className="font-mona text-[20px] leading-[1.7] font-normal max-w-[850px] mx-auto">
              We are a (tech)-enthusiastic close group of colleagues who have innovation
              as their top priority. Every CleverMobi team member is free to share ideas
              to make things smarter. Sounds like a fit? We’d love to get to know you!
            </p>

            <button className="mt-10 bg-[#6ac93d] hover:bg-[#55b22c] text-white px-8 py-4 rounded-full font-semibold text-[18px]">
              Check out our career opportunities!
            </button>

          </div>
        </section>

        {/* ================= COLLAGE GRID ================= */}
        <section className="w-full bg-white py-12">
          <div className="max-w-[1200px] mx-auto px-6">

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

              <div className="rounded-[12px] bg-[#6ac93d] h-28"></div>

              <div className="rounded-[12px] overflow-hidden h-28">
                <img src={maarten} className="w-full h-full object-cover" />
              </div>

              <div className="rounded-[12px] overflow-hidden h-28">
                <img src={morris} className="w-full h-full object-cover" />
              </div>

              <div className="rounded-[12px] overflow-hidden h-28">
                <img src={lily} className="w-full h-full object-cover" />
              </div>

              <div className="rounded-[12px] overflow-hidden h-28">
                <img src={kelly} className="w-full h-full object-cover" />
              </div>

              <div className="rounded-[12px] overflow-hidden h-28">
                <img src={maina} className="w-full h-full object-cover" />
              </div>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
