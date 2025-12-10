import React from "react";
import milestoneImg from "../../../assets/provisioning.png"; // replace with your actual image
import HeroSection from "../HeroSection";
import milestonedata from "../../../data/milestonedata";
import { useNavigate } from "react-router-dom";

export default function MilestonesPage() {
   const navigation =useNavigate();
   const handleNavigation=()=>{
    navigation('/contact');
   }
  return (
    <>

    <HeroSection {...milestonedata}/>
    <div className="w-full bg-white">

      {/* ------------------------- IMAGE + TEXT BLOCK (FIXED EXACTLY LIKE DESIGN) ------------------------- */}
      <section className="relative z-10 px-6 lg:px-20 py-10 lg:py-20">
        {/* <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24"> */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">


          {/* Image */}
          <div className="w-full lg:w-[48%]">
            <img
              src={milestoneImg}
              alt="Milestone"
              className="w-full h-auto rounded-[32px] object-cover shadow-[0_4px_40px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-[52%]">
            <h2 className="text-[48px] font-bold leading-[1.15] tracking-[-0.03em] mb-6">
              Platform Launch and <br /> Growth
            </h2>

            <p className="text-[20px] leading-[1.7] font-normal text-gray-700 max-w-[620px]">
              PMRG Solution launched its modern OSS/BSS platform built from scratch
              without legacy constraints. The platform now serves hundreds of
              thousands of mobile customers. This growth validates our
              architecture, reliability, and value proposition. Scaling while
              maintaining performance demonstrates platform robustness.
            </p>
          </div>

        </div>
      </section>

      {/* ------------------------- THREE HIGHLIGHT CARDS ------------------------- */}
      <section className="px-6 lg:px-20 py-5 lg:py-10">
        <div className="bg-[#F3F8E9] rounded-2xl p-5 lg:p-10 grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div>
            <div className="text-[#0B8A2F] text-3xl mb-4">📡</div>
            <h3 className="text-[24px] font-bold tracking-[-0.02em] mb-3">
              Technology Leadership
            </h3>
            <p className="text-[16px] leading-[1.7] text-gray-700">
              PMRG Solution’s platform supports latest mobile technologies
              including 5G service plans and billing, VoLTE and advanced voice
              services, and e20 py-5 lg:py-10M provisioning and management. Recognition as
              forward-thinking OSS/BSS provider attracts partners seeking modern
              solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="text-[#0B8A2F] text-3xl mb-4">🤝</div>
            <h3 className="text-[24px] font-bold tracking-[-0.02em] mb-3">
              Customer Satisfaction
            </h3>
            <p className="text-[16px] leading-[1.7] text-gray-700">
              High customer satisfaction reflects PMRG Solution’s quality and
              support. Operators choose PMRG Solution for modern technology, stay
              for reliable service and responsive support. Long-term
              partnerships demonstrate value delivery beyond launch.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="text-[#0B8A2F] text-3xl mb-4">🚀</div>
            <h3 className="text-[24px] font-bold tracking-[-0.02em] mb-3">
              Product Innovation
            </h3>
            <p className="text-[16px] leading-[1.7] text-gray-700">
              Regular platform enhancements demonstrate commitment to
              innovation. Performance improvements and technology updates keep
              PMRG Solution at the forefront of OSS/BSS capabilities without
              disruptive major upgrades.
            </p>
          </div>

        </div>
      </section>

      {/* ------------------------- CLEVERENABLE PARTNERSHIP ------------------------- */}
      <section className="px-6 lg:px-20 text-center py-10">
        <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[1.15] mb-6">
          CleverEnable Partnership
        </h2>

        <p className="text-[20px] max-w-4xl mx-auto leading-[1.7] text-gray-700 mb-10">
          Strong partnership with CleverEnable creates complete MVNE solutions.
          Deep integration between platforms provides seamless end-to-end
          operations. Joint customers benefit from coordinated support and
          unified experience. Collaboration creates superior solutions compared
          to fragmented vendor approaches.
        </p>

        <button onClick={handleNavigation} className="bg-[#0B8A2F] hover:bg-[#0a7a29] text-white px-8 py-3 rounded-full text-[18px] font-medium transition">
          PMRG Enable MVNE
        </button>
      </section>

    </div>
    </>
  );
}
