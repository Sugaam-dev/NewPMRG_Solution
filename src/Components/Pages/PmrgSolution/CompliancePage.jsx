import React from "react";
import PortalPhone from "../../../assets/provisioning.png";
import HeroSection from "../HeroSection";
import compliancedata from "../../../data/compliancedata";
import { ShieldCheck, Scale, FileText } from "lucide-react";

export default function CompliancePage() {
  return (
    <>
      <HeroSection {...compliancedata} />

      <div className="w-full bg-white text-[#0b1f1a]">
        {/* TELECOMMUNICATIONS REGULATIONS */}
        <section className="px-4 sm:px-6 md:px-20 py-5 sm:py-8 lg:py-10 bg-white">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8"
   
          >
            Telecommunications Regulations
          </h2>

          <p
            className="max-w-3xl mx-auto text-center text-base sm:text-lg lg:text-xl leading-[1.7] mb-8 sm:mb-10"
        
          >
            PMRG Solution supports telecommunications regulatory requirements
            including transparent pricing and contract information, service
            quality reporting capabilities, number portability support and
            documentation, and regulatory reporting functionality. Platform
            capabilities align with regulatory obligations, reducing compliance
            burden.
          </p>

          {/* THREE CARDS – BLUE THEME WITH LUCIDE */}
          <div className="bg-slate-900/5 rounded-[32px] p-6 sm:p-8 lg:p-10 mt-4">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* CARD 1 */}
              <div>
                <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                  <ShieldCheck size={24} strokeWidth={2.2} />
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-3"
             
             
                >
                  Data Protection & Privacy
                </h3>
                <p
                  className="leading-[1.7] text-[15px] sm:text-[17px] text-slate-800"
                 
                >
                  GDPR and privacy regulations require specific capabilities
                  built into PMRG Solution: consent management and tracking,
                  data‑subject rights (access and deletion), retention policies
                  with automated enforcement, privacy impact support, and data
                  processing agreements that meet regulatory requirements.
                </p>
              </div>

              {/* CARD 2 */}
              <div>
                <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                  <Scale size={24} strokeWidth={2.2} />
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-3"
              
                >
                  Consumer Protection
                </h3>
                <p
                  className="leading-[1.7] text-[15px] sm:text-[17px] text-slate-800"
              
                >
                  Consumer protection rules drive BSS requirements: bill‑shock
                  prevention with usage alerts, transparent pricing and fee
                  disclosure, simple cancellation flows, structured complaint
                  handling and dispute resolution, and cooling‑off support,
                  improving satisfaction and lowering regulatory risk.
                </p>
              </div>

              {/* CARD 3 */}
              <div>
                <div className="mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/5 text-sky-500">
                  <FileText size={24} strokeWidth={2.2} />
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-3"
                
                >
                  Financial Compliance
                </h3>
                <p
                  className="leading-[1.7] text-[15px] sm:text-[17px] text-slate-800"
                 
                >
                  Financial regulations affect billing and revenue operations:
                  tax calculation and collection, revenue‑recognition support,
                  audit‑ready trails, financial reporting, and PCI‑aligned
                  payment handling ensure proper accounting and reduce audit
                  exposure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RECORD RETENTION */}
        <section className="px-4 sm:px-6 md:px-20 pt-5 sm:pt-8 lg:pt-10 pb-5 sm:pb-8 text-center bg-white">
          <h2
            className="font-bold mb-4 sm:mb-6 leading-[1.15] text-3xl sm:text-4xl lg:text-5xl"
          
          >
            Record Retention
          </h2>

          <p
            className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-[1.7]"
           
          >
            Regulations require retaining records for specified periods. PMRG
            Solution manages retention automatically via configurable policies
            by record type, automated archival of aged records, secure storage
            that meets regulations, and fast retrieval for audits or legal
            requests, removing manual overhead.
          </p>
        </section>

        {/* REGULATORY REPORTING – TEXT FIRST, IMAGE BELOW ON MOBILE */}
        <section className="px-4 sm:px-6 md:px-20 py-5 sm:py-8 lg:py-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* TEXT (mobile first) */}
          <div className="order-1 md:order-1 max-w-xl">
            <h2
              className="font-bold mb-4 sm:mb-6 leading-[1.15] text-3xl sm:text-4xl lg:text-5xl"
             
            >
              Regulatory Reporting
            </h2>

            <p
              className="text-base sm:text-lg lg:text-xl leading-[1.7]"
             
            >
              Many jurisdictions require periodic regulatory reports. PMRG
              Solution supports these obligations with standard templates for
              common filings, export to external reporting tools, complete audit
              records, and documentation of compliance activities, simplifying
              reporting workloads.
            </p>
          </div>

          {/* IMAGE (mobile below) */}
          <div className="order-2 md:order-2 flex justify-center">
            <img
              src={PortalPhone}
              alt="Regulatory Reporting"
              className="rounded-[32px] w-[80%] max-w-[480px] object-cover shadow-[0_20px_40px_rgba(15,23,42,0.25)]"
            />
          </div>
        </section>

        {/* EVOLVING REGULATIONS – BLUE THEME */}
        <section className="bg-blue-200 text-center px-4 sm:px-6 md:px-20 py-8 sm:py-12 lg:py-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-[1.15]"
          
          >
            Evolving Regulations
          </h2>

          <p
            className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-[1.7]"
           
          >
            Telecommunications regulations evolve continuously. PMRG Solution
            monitors regulatory changes that affect mobile operators, delivers
            required platform updates, communicates operational impacts, and
            helps ensure continued compliance as rules shift, reducing operator
            burden.
          </p>
        </section>
      </div>
    </>
  );
}
