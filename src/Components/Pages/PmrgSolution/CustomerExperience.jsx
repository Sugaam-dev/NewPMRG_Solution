import React from "react";

// 🔥 Import images the correct way
import MobileUI from "../../../assets/selfcare.png";
import PortalPhone from "../../../assets/invoiceing.png";
import SupportAgent from "../../../assets/kelly-quote-services.jpg";
import HeroSection from "../HeroSection";
import customerexperiencedata from "../../../data/customerexperiencedata";

export default function CustomerExperience() {
  return (
    <>
    <HeroSection {...customerexperiencedata}/>
    <div className="w-full bg-white">

      {/* ⭐ PERFECTLY CENTERED MOBILE APP SECTION */}
     <section className="px-6 lg:px-24 py-20 md:py-20">

  <div className="max-w-screen-xl mx-auto flex flex-col xl:flex-row items-center justify-center gap-16">

    {/* IMAGE */}
    <div className="flex justify-center w-full">
      <img
        src={MobileUI}
        alt="Mobile UI"
        className="w-full max-w-md object-contain"
      />
    </div>

    {/* TEXT */}
    <div className="max-w-2xl text-center xl:text-left flex flex-col justify-center">
      <h2
        className="text-[48px] leading-[1.15] font-bold mb-6"
        style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
      >
        Mobile App Integration
      </h2>

      <p
        className="text-[20px] leading-[1.7]"
        style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
      >
        CleverMobi’s APIs enable rich mobile app experiences. Customers manage 
        accounts from smartphones with native app functionality. Real-time usage 
        monitoring, instant plan changes, and mobile payment integration create 
        seamless experiences matching customer expectations. Mobile-first design 
        reflects how customers actually interact with services.
      </p>
    </div>

  </div>
</section>


      {/* INTUITIVE CUSTOMER PORTAL */}
     {/* INTUITIVE CUSTOMER PORTAL */}
               <section className="px-6 lg:px-24 py-16 md:py-2 text-center">

                  <h2
                    className="text-[48px] leading-[1.15] font-bold mb-8"
                    style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Intuitive Customer Portal
                  </h2>

                  <p
                    className="text-[20px] leading-[1.7] mx-auto mb-16 lg:w-[80%] xl:w-[70%]"
                    style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Self-service portal provides customers with complete account control 
                    through clean, modern interface design. Customers easily view current 
                    plans and usage, change services or upgrade plans, manage payment methods, 
                    download invoices and receipts, and update personal information. Intuitive 
                    design reduces support calls and improves satisfaction.
                  </p>

                  <img
                    src={PortalPhone}
                    alt="Customer Portal"
                    className="rounded-xl w-full max-w-4xl mx-auto shadow-lg"
                  />
                </section>


      {/* FEATURES ROW */}
   {/* FEATURES ROW - EXACT MATCH TO FIRST SCREENSHOT */}
            <section className="bg-[#082d1f] text-white px-6 lg:px-24 py-32">
              <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Transparent Billing */}
                <div className="bg-[#0b3a25] border border-[#1c4d35] rounded-2xl p-10 shadow-lg">
                  <div className="mb-6">
                    {/* Icon */}
                    <span className="text-[#c6ff40] text-4xl">💰</span>
                  </div>

                  <h3
                    className="text-[26px] leading-[1.15] font-bold mb-4"
                    style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Transparent Billing
                  </h3>

                  <p
                    className="text-[18px] leading-[1.7]"
                    style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Billing transparency builds trust and reduces complaints. Customers access detailed usage breakdowns showing exactly what 
                    they're charged for. Near real-time data shows current charges before bills arrive. 
                    Clear explanations of all fees and charges eliminate confusion. Transparent billing reduces "bill shock" and support volume.
                  </p>
                </div>

                {/* Proactive Communication */}
                <div className="bg-[#0b3a25] border border-[#1c4d35] rounded-2xl p-10 shadow-lg">
                  <div className="mb-6">
                    <span className="text-[#c6ff40] text-4xl">📣</span>
                  </div>

                  <h3
                    className="text-[26px] leading-[1.15] font-bold mb-4"
                    style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Proactive Communication
                  </h3>

                  <p
                    className="text-[18px] leading-[1.7]"
                    style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Automated communication keeps customers informed throughout their journey. Customizable SMS and email alerts notify 
                    about usage thresholds, approaching limits, payment confirmations, service changes,
                    and special offers. Proactive communication improves experience and reduces surprises customers hate.
                  </p>
                </div>

                {/* Seamless Service Changes */}
                <div className="bg-[#0b3a25] border border-[#1c4d35] rounded-2xl p-10 shadow-lg">
                  <div className="mb-6">
                    <span className="text-[#c6ff40] text-4xl">🔄</span>
                  </div>

                  <h3
                    className="text-[26px] leading-[1.15] font-bold mb-4"
                    style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Seamless Service Changes
                  </h3>

                  <p
                    className="text-[18px] leading-[1.7]"
                    style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                  >
                    When customers modify services, changes happen instantly without frustration. Plan upgrades or downgrades take effect immediately. 
                    Add-on services activate in real-time. Number changes or service suspensions process without delays. 
                    Seamless changes demonstrate responsiveness and technical competence.
                  </p>
                </div>

              </div>
            </section>


      {/* SUPPORT SECTION */}
     {/* SUPPORT SECTION — EXACT MATCH TO FIRST SCREENSHOT */}
                  <section className="px-6 lg:px-24 py-32">
                    <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                      {/* LEFT IMAGE */}
                      <div className="w-full flex justify-center lg:justify-start">
                        <img
                          src={SupportAgent}
                          alt="Support agent"
                          className="w-full max-w-2xl rounded-[36px] object-cover"
                        />
                      </div>

                      {/* RIGHT TEXT */}
                      <div className="max-w-2xl">
                        <h2
                          className="text-[48px] leading-[1.15] font-bold mb-8"
                          style={{ fontFamily: 'PST Mail Sans, Helvetica, Arial, sans-serif' }}
                        >
                          Support Integration
                        </h2>

                        <p
                          className="text-[20px] leading-[1.7]"
                          style={{ fontFamily: 'Mona Sans, Helvetica, Arial, sans-serif' }}
                        >
                          Customer service representatives access complete customer information enabling efficient support. 
                          Full account history, usage details, payment records, and service configurations are immediately available.
                           Representatives make changes that take effect instantly. 
                          Integration between support tools and CleverMobi eliminates frustrating “let me check another system” experiences.
                        </p>
                      </div>

                    </div>
                  </section>


    </div>
    </>
  );
}
