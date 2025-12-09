import React from 'react'
import TeamCarousel from './TeamCarousel'
import implement from '../../../assets/implement.jpg'
function Teams() {
  return (
    <>
      <section className="w-full bg-white pt-24 pb-20">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="rounded-[32px] overflow-hidden shadow-md">
          <div className="relative w-full pt-[100%] lg:pt-[80%]">
            <img
              src={implement}
              alt="Our team at work"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="text-[#111827]">
          <p className="text-[16px] font-medium text-blue-600 mb-3">
            Our team
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
            A team of passionate
          
            and skilled IT
       
            professionals
          </h2>

          <p className="font-pst lg:text-lg leading-[1.7] text-[#4b5563] max-w-[520px]">
            At CleverMobi, we believe a flexible, robust BSS is essential for
            telecom success. Our passionate experts simplify business
            processes, deliver flexible pricing and discounts, and provide
            proven carrier‑grade solutions. We gladly share our industry
            expertise to help you achieve growth and operational excellence.
          </p>
        </div>
      </div>
    </section>
     <section className="w-full bg-white pb-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <p className="text-[16px] font-medium text-blue-600 mb-3">
            Work at PMRG Solution
          </p>

          <h3 className="font-pst text-[32px] md:text-[42px] font-bold leading-[1.15] tracking-[-0.03em] mb-4">
            Join our dynamic team
            <br />
            and grow with us
          </h3>

          <p className="font-mona lg:text-lg leading-[1.7] font-normal max-w-[780px] mx-auto text-[#4b5563]">
            We are a (tech)-enthusiastic close group of colleagues who have
            innovation as their top priority. Every CleverMobi team member is
            free to share ideas to make things smarter. Sounds like a fit?
            We’d love to get to know you!
          </p>
        </div>
      </section>
      <TeamCarousel/>
    </>
  )
}

export default Teams
