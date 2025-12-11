


import React from "react";

// Importing images from assets
import RapidLaunchImage from "../../../assets/cleverenable.webp";
import ReliabilityImage from "../../../assets/provisioning.png";
import HeroSection from "../HeroSection";
import platformhighlightsdata from "../../../data/platformhighlightsdata";

export default function PlatformHighlights() {
  return (
    <>
      <HeroSection {...platformhighlightsdata} />

      <div className="w-full overflow-hidden">

        {/* ------------------ WHITE BACKGROUND CONTENT ------------------ */}
        <div className="w-full bg-white pt-20 pb-9">

          {/* ------------------ RAPID PRODUCT LAUNCH ------------------ */}
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

            {/* LEFT IMAGE */}
            <div className="relative w-full h-full">
              <img
                src={RapidLaunchImage}
                alt="Rapid Product Launch"
                className="rounded-[30px] w-full h-full object-cover shadow-md"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2
                className="text-[48px] font-semibold mb-6"
                style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
              >
                Rapid Product Launch
              </h2>

              <p
                className="text-gray-700 leading-[1.7] text-[20px]"
                style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
              >
                Launch new pricing plans, products, or features in hours instead of
                weeks or months. PMRG Solution’s flexible product catalog and automated
                workflows eliminate lengthy deployment cycles. Create promotional
                campaigns effortlessly and test market responses quickly. Speed to
                market becomes competitive advantage rather than frustration.
              </p>
            </div>
          </div>

          {/* ------------------ FLEXIBLE PRODUCT CATALOG ------------------ */}
          <div className="max-w-6xl mx-auto text-center  mt-10 px-6">

            <h2
              className="text-[48px] font-semibold mb-6"
              style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
            >
              Flexible Product Catalog
            </h2>

            <p
              className="text-gray-700 leading-[1.7] text-[20px] max-w-4xl mx-auto"
              style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
            >
              Define unlimited pricing plans, bundle combinations, and service
              offerings without platform constraints. Support simple prepaid plans,
              complex postpaid subscriptions, hybrid models, and innovative pricing
              structures. PMRG Solution adapts to your product strategy rather than
              forcing compromises based on platform limitations.
            </p>

            {/* ------------------ CARD GRID (PERFECT MATCH STYLE) ------------------ */}
            <div className="bg-[#F2F7E9] rounded-[40px] p-5 mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 shadow-sm">

              {/* CARD 1 */}
              <div className="text-left">
                <div className="text-[#65B32E] mb-4 text-3xl">
                  <i className="fas fa-file-invoice"></i>
                </div>

                <h3
                  className="text-[24px] font-semibold mb-3"
                  style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                >
                  Automated Operations
                </h3>

                <p
                  className="text-gray-700 text-[16px] leading-[1.7]"
                  style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                >
                  Extensive automation reduces manual work and improves consistency.
                  Smart invoicing generates accurate bills automatically. Payment
                  processing supports multiple currencies and methods. Automated
                  dunning manages overdue accounts intelligently while provisioning
                  enables instant service activation. Automation enables lean and
                  efficient operations.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="text-left">
                <div className="text-[#65B32E] mb-4 text-3xl">
                  <i className="fas fa-bullhorn"></i>
                </div>

                <h3
                  className="text-[24px] font-semibold mb-3"
                  style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                >
                  Real-Time Data
                </h3>

                <p
                  className="text-gray-700 text-[16px] leading-[1.7]"
                  style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                >
                  Near real-time usage data provides transparency for customers and operators. Customers monitor consumption and avoid bill shock.
                   Operators identify trends and anomalies immediately. Real-time rating calculates charges as usage occurs. 
                  Current data enables proactive management impossible with batch-processed legacy systems.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="text-left">
                <div className="text-[#65B32E] mb-4 text-3xl">
                  <i className="fas fa-forward"></i>
                </div>

                <h3
                  className="text-[24px] font-semibold mb-3"
                  style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                >
                  Modern Architecture
                </h3>

                <p
                  className="text-gray-700 text-[16px] leading-[1.7]"
                  style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                >
                  Private Cloud-native design provides scalability and reliability. Microservices architecture allows independent component updates.
                   API-first approach enables extensive integration capabilities. Modern technology stack ensures performance and supportability. 
                  Architecture built for today's requirements rather than compromises inherited from decades past.
                </p>
              </div>
            </div>
          </div>

          {/* ------------------ PROVEN RELIABILITY (UPDATED TO MATCH PERFECT DESIGN) ------------------ */}
          <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2  items-center ">

            {/* LEFT CONTENT */}
            <div>
              <h2
                className="text-[48px] font-semibold mb-6"
                style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
              >
                Proven Reliability
              </h2>

              <p
                className="text-gray-700 leading-[1.7] text-[20px]"
                style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
              >
                Despite modern architecture, PMRG Solution delivers proven reliability
                supporting thousands of customers across multiple mobile operators.
                Robust error handling and strict data validation prevent issues.
                Comprehensive monitoring detects problems quickly. Automated
                recovery mechanisms minimize disruption. Innovation meets
                dependability — PMRG Solution combines performance with stability.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full h-full">
              <img
                src={ReliabilityImage}
                alt="Proven Reliability"
                className="rounded-[30px] shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
