import React from "react";

// --- Placeholder image imports (Option A) ---
// Replace with your actual images.
import SubscriptionImg from "../../../assets/cleverenable.webp";
import HeroSection from "../HeroSection";
import selfservicetooldata from "../../../data/selfservicetooldata";

/** --------------------------------------------------
 *  Typography Helpers (required by your design system)
 * --------------------------------------------------*/

// Heading component (48px, bold, PST Mail Sans)
function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={`mb-5 text-[48px] leading-[1.15] font-bold ${className}`}
      style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
    >
      {children}
    </h2>
  );
}

// Paragraph component (20px, regular, Mona Sans)
function SectionText({ children, className = "" }) {
  return (
    <p
      className={`text-[20px] leading-[1.7] font-normal ${className}`}
      style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
    >
      {children}
    </p>
  );
}

/** --------------------------------------------------
 * Main Component
 * --------------------------------------------------*/

export default function SelfServiceTools() {
  return (
    <>

    <HeroSection {...selfservicetooldata}/>
      <div className="w-full bg-white text-gray-900">

        {/* ================= ACCOUNT MANAGEMENT ================= */}
        <section className="px-6 lg:px-24 py-20">
          <div className="max-w-screen-xl mx-auto text-center">

            {/* Heading */}
            <SectionHeading className="text-gray-900">
              Account Management
            </SectionHeading>

            {/* Intro Paragraph */}
            <SectionText className="mx-auto mb-10 lg:w-3/4">
              Customers independently manage all account aspects through intuitive
              self-service portal. Update personal information and contact details,
              change passwords and security settings, manage communication preferences,
              add or remove authorized users, and access complete account history.
              Comprehensive account management reduces simple support requests.
            </SectionText>

            {/* Feature cards wrapper */}
            <div className="mt-8 rounded-xl bg-[#f0f7e8] p-6 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Feature 1 */}
                <div className="flex flex-col gap-4">
                  <div className="text-[#3a9b1f] text-2xl">📱</div>
                  <h3
                    className="text-[20px] font-semibold"
                    style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Plan and Service Changes
                  </h3>
                  <p
                    className="text-[15px] leading-[1.6] text-gray-700"
                    style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Self-service plan modifications give customers control and flexibility. Browse available plans and compare features,
                     upgrade or downgrade service levels instantly, add or remove service features, modify data allowances or voice minutes,
                     and activate international roaming. Immediate changes without calling support improve satisfaction.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col gap-4">
                  <div className="text-[#3a9b1f] text-2xl">📊</div>
                  <h3
                    className="text-[20px] font-semibold"
                    style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Usage Monitoring
                  </h3>
                  <p
                    className="text-[15px] leading-[1.6] text-gray-700"
                    style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Real-time usage visibility helps customers manage consumption effectively. View current billing period usage across voice, data, 
                    and messaging, see remaining allowances and included quantities, monitor trends across multiple periods,
                     set custom usage alerts and thresholds, and drill down into detailed usage records. Transparency prevents bill shock.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col gap-4">
                  <div className="text-[#3a9b1f] text-2xl">💳</div>
                  <h3
                    className="text-[20px] font-semibold"
                    style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Payment Management
                  </h3>
                  <p
                    className="text-[15px] leading-[1.6] text-gray-700"
                    style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                  >
                    Comprehensive payment self-service reduces billing support volume. View and download current and historical invoices,
                     manage payment methods and automatic payments, make one-time payments through multiple channels, view payment history and receipts,
                     and set up payment plans for overdue balances. Flexible payment options improve collection rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SUBSCRIPTION MANAGEMENT ================= */}
       {/* ================= SUBSCRIPTION MANAGEMENT (PERFECT ALIGNMENT) ================= */}
                <section className="px-6 lg:px-24 py-10 lg:py-20">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* LEFT IMAGE — same vertical alignment as screenshot */}
                    <div className="flex justify-center lg:justify-start items-start lg:items-center">
                    <div className="w-full max-w-lg rounded-[32px] overflow-hidden shadow-xl">
                        <img
                        src={SubscriptionImg}
                        alt="Subscription management"
                        className="w-full h-full object-cover"
                        />
                    </div>
                    </div>

                    {/* RIGHT TEXT — aligned to vertical center of the image */}
                    <div className="flex flex-col justify-center">
                    <SectionHeading>Subscription Management</SectionHeading>

                    <SectionText>
                        For operators offering multiple services, self-service handles complex subscription scenarios. 
                        Manage multiple lines or services from one account, view family or group plan details and usage, 
                        control parental restrictions and service limits, coordinate upgrades across multiple subscriptions, 
                        and handle add-ons and supplementary services. Complex account management without requiring support calls.
                    </SectionText>
                    </div>

                </div>
                </section>


        {/* ================= TROUBLE RESOLUTION ================= */}
          {/* ================= TROUBLE RESOLUTION (Perfect Match) ================= */}
                    <section className="px-6 lg:px-24 py-20">
                    <div className="max-w-screen-xl mx-auto text-center">

                        <SectionHeading className="mb-6">
                        Trouble Resolution
                        </SectionHeading>

                        <SectionText
                        className="mx-auto max-w-[950px]" // keeps width tight like screenshot
                        >
                        Many customer issues resolve through self-service tools. Reset passwords and PINs
                        independently, troubleshoot common problems with guided workflows, submit support
                        tickets when self-resolution fails, track request status, and access knowledge base
                        and FAQs. Self-service resolution reduces support costs significantly.
                        </SectionText>

                    </div>
                    </section>


      </div>
    </>
  );
}
