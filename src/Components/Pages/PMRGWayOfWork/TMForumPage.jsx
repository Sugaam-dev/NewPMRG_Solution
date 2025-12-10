import React from "react";
import teamImg from "../../../assets/Navbar/tm.jpeg";
import HeroSection from "../HeroSection";
import tmforumdata from "../../../data/tmforumdata";

export default function TMForumPage() {
  return (
   <>
   <HeroSection {...tmforumdata}/>
    <main className="w-full bg-white text-[#1a1f1c] overflow-hidden">

      {/* =============================
          EXPERIENCED TEAM — PERFECT MATCH + CSS RULES APPLIED
      ============================== */}
      <section className="w-full px-6 py-5 lg:py-10">

        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center 
                        font-medium leading-[1.6] tracking-[-0.02em]">

          {/* LEFT IMAGE — ABSOLUTE FIX, BORDER RADIUS 32PX */}
         <div className="w-full rounded-[32px] overflow-hidden">
  <img
    src={teamImg}
    alt="PMRG Solution Team"
    className="w-full h-auto"
  />
</div>


          {/* RIGHT TEXT — UPDATED TYPOGRAPHY */}
          <div>
            <h2 className=" text-[46px] font-bold leading-[1.15] mb-8">
              Experienced Team
            </h2>

            <p className=" text-[16px] text-[#1a1f1c]">
              PMRG Solution’s development team combines software engineering expertise with
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
   </>
  );
}
