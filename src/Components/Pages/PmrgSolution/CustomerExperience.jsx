import React from "react";

import MobileUI from "../../../assets/experience.jpeg";
import PortalPhone from "../../../assets/invoiceing.png";
import SupportAgent from "../../../assets/kelly-quote-services.jpg";
import HeroSection from "../HeroSection";
import customerexperiencedata from "../../../data/customerexperiencedata";
import { ReceiptIndianRupee, MessageCircleMore, RefreshCw } from "lucide-react";

export default function CustomerExperience() {
  return (
    <>
      <HeroSection {...customerexperiencedata} />

      <div className="w-full bg-white">
        {/* Mobile App Integration */}
        <section className="px-4 sm:px-6 lg:px-24 py-6 sm:py-10 bg-white">
          <div className="max-w-screen-xl mx-auto flex flex-col xl:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* IMAGE (mobile below) */}
            <div className="order-2 xl:order-1 flex justify-center w-full">
              <img
                src={MobileUI}
                alt="Mobile UI"
                className="w-full max-w-md object-contain rounded-3xl"
              />
            </div>

            {/* TEXT */}
            <div className="order-1 xl:order-2 max-w-2xl text-center xl:text-left flex flex-col justify-center">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-bold mb-4"
                style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
              >
                Mobile App Integration
              </h2>

              <p
                className="text-base sm:text-lg lg:text-xl leading-[1.7]"
                style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
              >
                PMRGSolution’s APIs enable rich mobile app experiences. Customers manage
                accounts from smartphones with native app functionality. Real-time usage
                monitoring, instant plan changes, and mobile payment integration create
                seamless experiences matching customer expectations. Mobile-first design
                reflects how customers actually interact with services.
              </p>
            </div>
          </div>
        </section>

        {/* Intuitive Customer Portal */}
        <section className="px-4 sm:px-6 lg:px-24 py-6 sm:py-10 bg-white text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-bold mb-4"
            style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
          >
            Intuitive Customer Portal
          </h2>

          <p
            className="text-base sm:text-lg lg:text-xl leading-[1.7] mx-auto mb-10 lg:w-[80%] xl:w-[70%]"
            style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
          >
            Self-service portal provides customers with complete account control through
            clean, modern interface design. Customers easily view current plans and usage,
            change services or upgrade plans, manage payment methods, download invoices and
            receipts, and update personal information. Intuitive design reduces support
            calls and improves satisfaction.
          </p>

          <div className="mx-auto max-w-md md:max-w-lg lg:max-w-xl">
            <img
              src={PortalPhone}
              alt="Customer Portal"
              className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.25)]"
            />
          </div>
        </section>

        {/* Features row – blue theme with Lucide */}
        <section className="bg-slate-950 text-white px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-16">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Transparent Billing */}
            <div className="bg-slate-900/80 border border-blue-700/60 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <div className="mb-5 flex items-center justify-center w-11 h-11 rounded-full bg-slate-800 text-sky-400">
                <ReceiptIndianRupee size={24} strokeWidth={2.2} />
              </div>

              <h3
                className="text-xl sm:text-2xl leading-[1.15] font-bold mb-3"
                style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
              >
                Transparent Billing
              </h3>

              <p
                className="text-sm sm:text-base leading-[1.7] text-slate-100/85"
                style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
              >
                Billing transparency builds trust and reduces complaints. Customers access
                detailed usage breakdowns showing exactly what they are charged for. Near
                real-time data shows current charges before bills arrive, with clear
                explanations of all fees to eliminate confusion and reduce “bill shock”.
              </p>
            </div>

            {/* Proactive Communication */}
            <div className="bg-slate-900/80 border border-blue-700/60 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <div className="mb-5 flex items-center justify-center w-11 h-11 rounded-full bg-slate-800 text-sky-400">
                <MessageCircleMore size={24} strokeWidth={2.2} />
              </div>

              <h3
                className="text-xl sm:text-2xl leading-[1.15] font-bold mb-3"
                style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
              >
                Proactive Communication
              </h3>

              <p
                className="text-sm sm:text-base leading-[1.7] text-slate-100/85"
                style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
              >
                Automated communication keeps customers informed throughout their journey.
                Configurable SMS and email alerts notify about usage thresholds, approaching
                limits, payment confirmations, service changes, and special offers, reducing
                unpleasant surprises customers dislike.
              </p>
            </div>

            {/* Seamless Service Changes */}
            <div className="bg-slate-900/80 border border-blue-700/60 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <div className="mb-5 flex items-center justify-center w-11 h-11 rounded-full bg-slate-800 text-sky-400">
                <RefreshCw size={24} strokeWidth={2.2} />
              </div>

              <h3
                className="text-xl sm:text-2xl leading-[1.15] font-bold mb-3"
                style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
              >
                Seamless Service Changes
              </h3>

              <p
                className="text-sm sm:text-base leading-[1.7] text-slate-100/85"
                style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
              >
                When customers modify services, changes happen instantly without
                frustration. Plan upgrades or downgrades take effect immediately, add‑ons
                activate in real time, and suspensions or number changes process without
                delays, demonstrating responsiveness and technical competence.
              </p>
            </div>
          </div>
        </section>

        {/* Support Integration */}
        <section className="px-4 sm:px-6 lg:px-24 py-6 sm:py-10 bg-white">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* IMAGE (mobile below) */}
            <div className="order-2 lg:order-1 w-full flex justify-center lg:justify-start">
              <img
                src={SupportAgent}
                alt="Support agent"
                className="w-full max-w-2xl rounded-[36px] object-cover shadow-[0_20px_40px_rgba(15,23,42,0.25)]"
              />
            </div>

            {/* TEXT */}
            <div className="order-1 lg:order-2 max-w-2xl">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-bold mb-4 sm:mb-6"
                style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
              >
                Support Integration
              </h2>

              <p
                className="text-base sm:text-lg lg:text-xl leading-[1.7]"
                style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
              >
                Customer service representatives access complete customer information for
                efficient support: full account history, usage details, payment records,
                and service configurations are immediately available. Changes made by
                representatives take effect instantly, and tight integration between
                support tools and PMRG Solution removes frustrating “let me check another
                system” experiences.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
