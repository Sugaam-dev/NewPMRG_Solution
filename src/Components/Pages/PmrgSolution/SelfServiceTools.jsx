import React from "react";

import SubscriptionImg from "../../../assets/RapidLaunchImage.webp";
import HeroSection from "../HeroSection";
import selfservicetooldata from "../../../data/selfservicetooldata";
import { Smartphone, BarChart3, CreditCard } from "lucide-react";

// Heading 48px
function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={`mb-5 text-[48px] leading-[1.15] font-bold ${className}`}
     
    >
      {children}
    </h2>
  );
}

// Paragraph 20px
function SectionText({ children, className = "" }) {
  return (
    <p
      className={`text-[20px] leading-[1.7] font-normal ${className}`}
      
    >
      {children}
    </p>
  );
}

export default function SelfServiceTools() {
  return (
    <>
      <HeroSection {...selfservicetooldata} />

      <div className="w-full bg-white text-gray-900">
        {/* ACCOUNT MANAGEMENT */}
        <section className="px-6 lg:px-24 py-6 sm:py-10">
          <div className="max-w-screen-xl mx-auto text-center">
            <SectionHeading className="text-gray-900">
              Account Management
            </SectionHeading>

            <SectionText className="mx-auto mb-8 lg:w-3/4">
              Customers independently manage all account aspects through intuitive
              self-service portal. Update personal information and contact details,
              change passwords and security settings, manage communication preferences,
              add or remove authorized users, and access complete account history.
              Comprehensive account management reduces simple support requests.
            </SectionText>

            {/* Feature cards */}
            <div className="mt-6 rounded-2xl bg-slate-900/5 p-6 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="flex flex-col gap-4 text-left">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/5 text-sky-500">
                    <Smartphone size={22} strokeWidth={2.2} />
                  </div>
                  <h3
                    className="text-[20px] font-semibold"
                    style={{
                      fontFamily:
                        "PST Mail Sans, Helvetica, Arial, sans-serif",
                    }}
                  >
                    Plan and Service Changes
                  </h3>
                  <p
                    className="text-[15px] leading-[1.6] text-gray-700"
                    style={{
                      fontFamily:
                        "Mona Sans, Helvetica, Arial, sans-serif",
                    }}
                  >
                    Self-service plan modifications give customers control and
                    flexibility. Browse available plans and compare features, upgrade
                    or downgrade service levels instantly, add or remove service
                    features, modify data allowances or voice minutes, and activate
                    international roaming without calling support.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col gap-4 text-left">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/5 text-sky-500">
                    <BarChart3 size={22} strokeWidth={2.2} />
                  </div>
                  <h3
                    className="text-[20px] font-semibold"
                    style={{
                      fontFamily:
                        "PST Mail Sans, Helvetica, Arial, sans-serif",
                    }}
                  >
                    Usage Monitoring
                  </h3>
                  <p
                    className="text-[15px] leading-[1.6] text-gray-700"
                    style={{
                      fontFamily:
                        "Mona Sans, Helvetica, Arial, sans-serif",
                    }}
                  >
                    Real-time usage visibility helps customers manage consumption
                    effectively. View current period usage across voice, data, and
                    messaging, see remaining allowances, monitor trends across
                    periods, set custom usage alerts, and drill into detailed usage
                    records to prevent bill shock.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col gap-4 text-left">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/5 text-sky-500">
                    <CreditCard size={22} strokeWidth={2.2} />
                  </div>
                  <h3
                    className="text-[20px] font-semibold"
                    style={{
                      fontFamily:
                        "PST Mail Sans, Helvetica, Arial, sans-serif",
                    }}
                  >
                    Payment Management
                  </h3>
                  <p
                    className="text-[15px] leading-[1.6] text-gray-700"
                    style={{
                      fontFamily:
                        "Mona Sans, Helvetica, Arial, sans-serif",
                    }}
                  >
                    Comprehensive payment self-service reduces billing support volume.
                    View and download invoices, manage payment methods and auto-pay,
                    make one-time payments across channels, review payment history,
                    and set up payment plans for overdue balances to improve
                    collection rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUBSCRIPTION MANAGEMENT */}
        <section className="px-6 lg:px-10 py-5 lg:py-10">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* IMAGE */}
            <div className="flex justify-center lg:justify-start items-start lg:items-center">
              <div className="w-full max-w-lg rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.25)]">
                <img
                  src={SubscriptionImg}
                  alt="Subscription management"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="flex flex-col justify-center">
              <SectionHeading>Subscription Management</SectionHeading>
              <SectionText>
                For operators offering multiple services, self-service handles complex
                subscription scenarios. Manage multiple lines or services from one
                account, view family or group plan details and usage, control parental
                restrictions and service limits, coordinate upgrades across multiple
                subscriptions, and handle add-ons and supplementary services without
                requiring support calls.
              </SectionText>
            </div>
          </div>
        </section>

        {/* TROUBLE RESOLUTION */}
        <section className="px-6 lg:px-24 py-5 lg:py-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <SectionHeading className="mb-6">
              Trouble Resolution
            </SectionHeading>
            <SectionText className="mx-auto max-w-[950px]">
              Many customer issues resolve through self-service tools. Reset passwords
              and PINs independently, troubleshoot common problems with guided
              workflows, submit support tickets when self-resolution fails, track
              request status, and access knowledge base and FAQs. Self-service
              resolution significantly reduces support costs.
            </SectionText>
          </div>
        </section>
      </div>
    </>
  );
}
