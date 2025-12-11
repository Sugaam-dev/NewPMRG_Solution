import React from "react";
import europeImg from "../../../assets/provisioning.png";
import HeroSection from "../HeroSection";
import mvneconnectivitydata from "../../../data/mvneconnectivitydata";

export default function MVNEConnectivity() {
  return (
<>
<HeroSection {...mvneconnectivitydata}/>

    <main className="w-full bg-white text-[#1a1f1c]">

      {/* ============================
          THREE INFO CARDS (LIGHT BG BLOCK)
      ============================= */}
      <section className="px-6 py-5 lg:py-10">
        <div className="max-w-[1200px] mx-auto bg-[#f5fbe9] rounded-[28px] p-5 lg:p-16 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Card 1 */}
            <div>
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#76c53b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>

              <h3 className=" text-[22px] font-bold leading-[1.2] mb-3">
                New to the Game?
              </h3>

              <p className=" text-[16px] leading-[1.7]">
                Starting a mobile operator business from scratch in the Netherlands? PMRG Solution helps you launch successfully. 
                We offer our OSS/BSS software exclusively combined with CleverEnable's Mobile Core Network from our sister company.
                This integrated solution provides everything needed to launch your MVNO quickly and efficiently. 
                For additional information or inquiries, contact us via email or phone.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#76c53b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M3 12h3" />
                  <path d="M18 12h3" />
                  <path d="M12 3v3" />
                  <path d="M12 18v3" />
                </svg>
              </div>

              <h3 className="text-[22px] font-bold leading-[1.2] mb-3">
                Looking for a New Software Partner?
              </h3>

              <p className=" text-[16px] leading-[1.7]">
                Already working with an MVNE but want to change your OSS/BSS software partner?
                PMRG Solution integrates seamlessly with existing network infrastructure. 
                We can connect our software with KPN's, Vodafone's, or other MVNEs' networks.
                Migration from your current BSS platform to PMRG Solution happens smoothly without disrupting operations or losing customer data.
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#76c53b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>

              <h3 className=" text-[22px] font-bold leading-[1.2] mb-3">
                Outside of the Netherlands?
              </h3>

              <p className="text-[16px] leading-[1.7]">
                Based outside the Netherlands? No problem. PMRG Solution integrates with any MVNE regardless of location.
                Our standard protocols and flexible integration approach support MVNEs across Europe, South America, and beyond.
                Geographic location doesn't limit our ability to provide excellent OSS/BSS solutions for your mobile operations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================
          CLEVERENABLE INTEGRATION (CENTERED)
      ============================= */}
      <section className="px-6 lg:px-25 py-5 lg:py-10 text-center">
        <div className=" mx-auto">

          <h2 className=" text-[42px] md:text-[48px] font-bold leading-[1.15] mb-6">
            CleverEnable Integration
          </h2>

          <p className="text-[18px] leading-[1.7] text-[#2b2f2c] mb-8">
            Integration with CleverEnable’s MVNE platform provides the smoothest experience for operators in the Netherlands. 
            Both systems are designed together for seamless operation. Real-time synchronization keeps customer data consistent. 
            Provisioning happens instantly when customers signup or change services. Combined solution eliminates integration headaches
            common with separate vendors.
          </p>

          {/* <button className="bg-[#6ac93d] hover:bg-[#5fba36] transition px-6 py-3 rounded-full font-['Mona_Sans'] text-[16px] font-semibold">
            CleverEnable MVNE
          </button> */}
        </div>
      </section>

      {/* ============================
          STANDARD MVNE PROTOCOLS — FIXED PERFECT VERSION
      ============================= */}
      <section className="px-6 lg:px-25 py-5 lg:py-10">
        <div className="  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="rounded-[36px] overflow-hidden">
            <img
              src={europeImg}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="">
            <h2 className=" text-[48px] font-bold leading-[1.15] mb-6">
              Standard MVNE<br />Protocols
            </h2>

            <p className=" text-[16px] leading-[1.7] tracking-normal text-[#1a1f1c] max-w-[620px]">
              PMRG Solution supports standard telecommunications protocols for MVNE
              integration. Industry-standard interfaces enable connections to most MVNEs
              including KPN, Vodafone, Odido, and international network enablers.
              Protocols for provisioning, usage collection, and service management work
              reliably. Standards-based approach provides vendor flexibility without
              sacrificing integration quality.
            </p>
          </div>

        </div>
      </section>

    </main>
</>
  );
}
