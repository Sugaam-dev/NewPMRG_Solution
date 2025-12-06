import React from "react";

// 🔥 Import images the correct way
import MobileUI from "../../../assets/selfcare.png";
import PortalPhone from "../../../assets/invoiceing.png";
import SupportAgent from "../../../assets/kelly-quote-services.jpg";

export default function CustomerExperience() {
  return (
    <div className="w-full bg-white">

    
    

      {/* MOBILE APP SECTION */}
      <section className="px-6 lg:px-24 py-24 flex flex-col lg:flex-row items-center gap-16">
        <img
          src={MobileUI}
          alt="Mobile UI"
          className="w-full max-w-sm"
        />

        <div>
          <h2
            className="text-[32px] lg:text-[36px] leading-[1.15] font-bold mb-4"
            style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
          >
            Mobile App Integration
          </h2>

          <p
            className="text-[20px] leading-[1.7]"
            style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
          >
            CleverMobi’s APIs enable rich mobile app experiences. Customers
            manage accounts from smartphones with native app functionality.
            Real-time usage monitoring, instant plan changes, and mobile payment
            integration create seamless experiences matching expectations.
          </p>
        </div>
      </section>

      {/* INTUITIVE CUSTOMER PORTAL */}
      <section className="px-6 lg:px-24 py-24 text-center">
        <h2
          className="text-[36px] leading-[1.15] font-bold mb-6"
          style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
        >
          Intuitive Customer Portal
        </h2>

        <p
          className="text-[20px] leading-[1.7] max-w-4xl mx-auto mb-16"
          style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
        >
          Self-service portal provides customers with complete account control
          through clean, modern interface design. Customers easily view current
          plans and usage, update info, manage payments, and reduce support calls.
        </p>

        <img
          src={PortalPhone}
          alt="Customer Portal"
          className="rounded-xl w-full max-w-4xl mx-auto shadow-lg"
        />
      </section>

      {/* FEATURES ROW */}
      <section className="bg-[#0a3a21] text-white px-6 lg:px-24 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Transparent Billing */}
        <div>
          <h3
            className="text-[24px] leading-[1.15] font-bold mb-4"
            style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
          >
            Transparent Billing
          </h3>

          <p
            className="text-[18px] leading-[1.7]"
            style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
          >
            Customers access detailed usage breakdowns, charges, and real-time
            bill data — eliminating confusion and reducing support volume.
          </p>
        </div>

        {/* Proactive Communication */}
        <div>
          <h3
            className="text-[24px] leading-[1.15] font-bold mb-4"
            style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
          >
            Proactive Communication
          </h3>

          <p
            className="text-[18px] leading-[1.7]"
            style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
          >
            Automated SMS and email alerts notify customers about usage limits,
            payments, renewals, service changes, and special offers.
          </p>
        </div>

        {/* Seamless Service Changes */}
        <div>
          <h3
            className="text-[24px] leading-[1.15] font-bold mb-4"
            style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
          >
            Seamless Service Changes
          </h3>

          <p
            className="text-[18px] leading-[1.7]"
            style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
          >
            Service modifications happen instantly — upgrades, downgrades,
            add-ons, number changes, or suspensions without delay.
          </p>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="px-6 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">

        <img
          src={SupportAgent}
          className="rounded-xl w-full"
          alt="Support agent"
        />

        <div className="flex flex-col justify-center">
          <h2
            className="text-[36px] leading-[1.15] font-bold mb-6"
            style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
          >
            Support Integration
          </h2>

          <p
            className="text-[20px] leading-[1.7]"
            style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
          >
            Support teams see full customer information instantly — usage
            history, payments, requests, and configurations — eliminating
            delays and improving first-contact resolution.
          </p>
        </div>
      </section>
    </div>
  );
}
