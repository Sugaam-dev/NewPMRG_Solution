import React from "react";
import ourteamsdata from "../../../data/ourteamsdata";
import pratima from "../../../assets/TeamsPhoto/pratima-mishra.webp";
import rekha from "../../../assets/TeamsPhoto/rekha-ghosh.webp";
import bhadrayu from "../../../assets/TeamsPhoto/bhadrayu-panda.webp";
import pamir from "../../../assets/TeamsPhoto/pamir.webp";
import shilpa from "../../../assets/TeamsPhoto/Shilpa_A.webp";
import advait from "../../../assets/TeamsPhoto/advait-tiwari.webp";
import rohit from "../../../assets/TeamsPhoto/photo_rohit_new.webp";
import sonal from "../../../assets/TeamsPhoto/sonal-kamble.webp";
import HeroSection from "../HeroSection";
// Add this line to fix the error:
// import chris from "../../../assets/chris.jpg"; 

export default function OurTeamPage() {
  const team = [
    { name: "Pratima Mishra", img: pratima },
    { name: "Rekha Ghosh", img: rekha },
    { name: "Bhadrayu Panda", img: bhadrayu },
    { name: "Pamir Nayak", img: pamir },
    { name: "Shilpa Amminabhavi", img: shilpa },
    { name: "Advait Tivari", img: advait },
    { name: "Rohit Ghosh", img: rohit },
    { name: "Sonal Kamble", img: sonal },
  ];

  return (
    <>
      <HeroSection {...ourteamsdata}/>
      <main className="w-full bg-white text-[#0f1a17] overflow-x-hidden">
        {/* Description section unchanged */}
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
              Together, we're committed to helping telecoms accelerate growth,
              enhance customer retention, and stay ahead in a rapidly evolving market.
            </p>
          </div>
        </section>

        {/* Team Grid - Optimized responsive breakpoints */}
        <section className="w-full bg-white py-8">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-10 text-center">
              <span className="text-blue-600 font-pst uppercase tracking-[0.5px] text-[16px] block mb-2">
                Team
              </span>
              <h3 className="font-pst font-bold leading-[1.15] tracking-[-0.03em] text-[32px] md:text-[40px] lg:text-[42px]">
                Get to know our passionate and <br /> knowledgeable team of developers.
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10">
              {team.map((member) => (
                <div 
                  key={member.name} 
                  className="group flex flex-col items-start hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="rounded-[12px] overflow-hidden bg-gray-100 w-full group-hover:shadow-lg transition-shadow">
                    <div className="relative w-full pt-[115%]">
                      <img
                        src={member.img}
                        alt={member.name}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:brightness-110 transition-all"
                      />
                    </div>
                  </div>
                  <div className="mt-3 font-pst text-[15px] font-semibold">
                    {member.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Success - COMMENT OUT UNTIL chris import added */}
        
        <section className="w-full bg-white py-20">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-pst text-[48px] font-bold leading-[1.15] tracking-[-0.03em] mb-5">
                Customer Success <br /> Focus
              </h3>
              <p className="font-mona text-[20px] leading-[1.7] font-normal">
                PMRG Solution's team focuses intensely on customer success beyond just technology
                delivery. We understand mobile operator business models, competitive challenges,
                and growth objectives. Team members work collaboratively with partners,
                communicate transparently about capabilities, and help operators succeed.
                Customer success mindset pervades our culture.
              </p>
            </div>
            <div className="rounded-[18px] overflow-hidden shadow-md">
              <div className="relative w-full pt-[105%]">
                <img
                  src=''
                  alt="customer success"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
       

        {/* Join Team and other sections unchanged */}
        <section className="w-full bg-white py-20">
          <div className="max-w-[900px] mx-auto px-6 text-center">
            <h3 className="font-pst text-[48px] font-bold leading-[1.15] tracking-[-0.03em] mb-5">
              Join our dynamic team and grow with us
            </h3>
            <p className="font-mona text-[20px] leading-[1.7] font-normal max-w-[850px] mx-auto">
              We are a (tech)-enthusiastic close group of colleagues who have innovation
              as their top priority. Every PMRG Solution team member is free to share ideas
              to make things smarter. Sounds like a fit? We'd love to get to know you!
            </p>
            <button className="mt-10 bg-[#0b1c55] hover:bg-[#2a437e] text-white px-8 py-4 rounded-full font-semibold text-[18px] transition-all">
              Check out our career opportunities!
            </button>
          </div>
        </section>

      </main>
    </>
  );
}
