import React from "react";

import RapidLaunchImage from "../../../assets/RapidLaunchImage.webp";
import ReliabilityImage from "../../../assets/provisioning.png";
import HeroSection from "../HeroSection";
import platformhighlightsdata from "../../../data/platformhighlightsdata";
import { Workflow, Radar, Forward } from "lucide-react";

export default function PlatformHighlights() {
  return (
    <>
      <HeroSection {...platformhighlightsdata} />

      <div className="w-full overflow-hidden">
        {/* White background content */}
        <div className="w-full bg-white pt-10 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 lg:pb-10">
          {/* Rapid Product Launch */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT IMAGE */}
            <div className="relative w-full h-full">
              <img
                src={RapidLaunchImage}
                alt="Rapid Product Launch"
                className="rounded-[30px] w-full h-full object-cover shadow-[0_20px_40px_rgba(15,23,42,0.25)]"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6"
                style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
              >
                Rapid Product Launch
              </h2>

              <p
                className="text-base sm:text-lg lg:text-xl text-slate-700 leading-[1.7]"
                style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
              >
                Launch new pricing plans, products, or features in hours instead of
                weeks or months. PMRG Solution’s flexible product catalog and automated
                workflows eliminate lengthy deployment cycles. Create promotional
                campaigns effortlessly and test market responses quickly so speed to
                market becomes a competitive advantage.
              </p>
            </div>
          </div>

          {/* Flexible Product Catalog */}
          <div className="max-w-6xl mx-auto text-center mt-10 px-4 sm:px-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6"
              style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
            >
              Flexible Product Catalog
            </h2>

            <p
              className="text-base sm:text-lg lg:text-xl text-slate-700 leading-[1.7] max-w-4xl mx-auto"
              style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
            >
              Define unlimited pricing plans, bundle combinations, and service
              offerings without platform constraints. Support simple prepaid plans,
              complex postpaid subscriptions, hybrid models, and innovative pricing
              structures. PMRG Solution adapts to your product strategy rather than
              forcing compromises based on platform limitations.
            </p>

            {/* Card grid */}
            <div className="bg-slate-900/5 rounded-[40px] p-6 sm:p-8 lg:p-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 shadow-sm">
              {/* CARD 1 */}
              <div className="text-left">
                <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                  <Workflow size={24} strokeWidth={2.2} />
                </div>

                <h3
                  className="text-xl sm:text-2xl font-semibold mb-3"
                  style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                >
                  Automated Operations
                </h3>

                <p
                  className="text-sm sm:text-base text-slate-700 leading-[1.7]"
                  style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                >
                  Extensive automation reduces manual work and improves consistency.
                  Smart invoicing generates accurate bills automatically. Payment
                  processing supports multiple currencies and methods, while automated
                  dunning manages overdue accounts intelligently and instant
                  provisioning enables real-time service activation.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="text-left">
                <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                  <Radar size={24} strokeWidth={2.2} />
                </div>

                <h3
                  className="text-xl sm:text-2xl font-semibold mb-3"
                  style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                >
                  Real-Time Data
                </h3>

                <p
                  className="text-sm sm:text-base text-slate-700 leading-[1.7]"
                  style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                >
                  Near real-time usage data provides transparency for customers and
                  operators. Customers monitor consumption and avoid bill shock, while
                  operators identify trends and anomalies immediately. Real-time rating
                  calculates charges as usage occurs, enabling proactive management
                  impossible with batch-processed legacy systems.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="text-left">
                <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                  <Forward size={24} strokeWidth={2.2} />
                </div>

                <h3
                  className="text-xl sm:text-2xl font-semibold mb-3"
                  style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
                >
                  Modern Architecture
                </h3>

                <p
                  className="text-sm sm:text-base text-slate-700 leading-[1.7]"
                  style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
                >
                  Private cloud-native design provides scalability and reliability.
                  Microservices architecture allows independent component updates.
                  API‑first approach enables extensive integrations, and a modern
                  technology stack ensures performance and long-term supportability.
                </p>
              </div>
            </div>
          </div>

          {/* Proven Reliability */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6"
                style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
              >
                Proven Reliability
              </h2>

              <p
                className="text-base sm:text-lg lg:text-xl text-slate-700 leading-[1.7]"
                style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
              >
                Despite modern architecture, PMRG Solution delivers proven reliability,
                supporting thousands of customers across multiple mobile operators.
                Robust error handling and strict data validation prevent issues.
                Comprehensive monitoring detects problems quickly, and automated
                recovery mechanisms minimize disruption so innovation comes with
                dependable stability.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full h-full">
              <img
                src={ReliabilityImage}
                alt="Proven Reliability"
                className="rounded-[30px] shadow-[0_20px_40px_rgba(15,23,42,0.25)] w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
