import React from "react";
import PortalPhone from "../../../assets/provisioning.png";
import HeroSection from "../HeroSection";
import compliancedata from "../../../data/compliancedata";

export default function CompliancePage() {
  return (
<>
    <HeroSection {...compliancedata}/>
    
    <div className="w-full bg-white text-black">

      {/* =============================
          SECTION: TELECOM REGULATIONS
      ============================== */}
      <section className="px-6 md:px-20 py-20 bg-white text-black">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-10"
          style={{
            fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif",
          }}
        >
          Telecommunications Regulations
        </h2>

        <p
          className="max-w-3xl mx-auto text-center mb-16 leading-7"
          style={{
            fontFamily: "Mona Sans, Helvetica, Arial, sans-serif",
          }}
        >
          CleverMobi supports telecommunications regulatory requirements
          including transparent pricing and contract information, service
          quality reporting capabilities, number portability support and
          documentation, and regulatory reporting functionality. Platform
          capabilities align with regulatory obligations reducing compliance
          burden.
        </p>

       {/* =============================
    THREE CARDS WRAPPED TO MATCH SCREENSHOT #1
============================== */}
<div className="bg-[#F3F7E7] rounded-[32px] p-12 md:p-16 mt-10">

  <div className="grid md:grid-cols-3 gap-12">

    {/* CARD 1 */}
    <div>
      {/* ICON */}
      <div className="mb-6">
        <svg width="36" height="36" fill="none" stroke="#6FBF4A" strokeWidth="2"
          viewBox="0 0 24 24">
          <path d="M3 17l3-6h11l4 6H3zM6 11l2-4h8l2 4H6z" />
        </svg>
      </div>

      <h3
        className="text-2xl font-bold mb-4"
        style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
      >
        Data Protection and Privacy
      </h3>

      <p
        className="leading-7 text-[17px]"
        style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
      >
        GDPR and privacy regulations require specific capabilities built into CleverMobi. Customer consent management and tracking,
         data subject rights including access and deletion, data retention policies and automated enforcement, privacy 
        impact assessment support, and data processing agreements meeting requirements. Privacy compliance prevents costly violations.
      </p>
    </div>

    {/* CARD 2 */}
    <div>
      {/* ICON */}
      <div className="mb-6">
        <svg width="36" height="36" fill="none" stroke="#6FBF4A" strokeWidth="2"
          viewBox="0 0 24 24">
          <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
        </svg>
      </div>

      <h3
        className="text-2xl font-bold mb-4"
        style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
      >
        Consumer Protection
      </h3>

      <p
        className="leading-7 text-[17px]"
        style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
      >
        Consumer protection regulations shape BSS platform requirements. Bill shock prevention through usage alerts, transparent pricing and 
        fee disclosure, easy subscription cancellation processes, complaint handling and dispute resolution, 
        and cooling-off period support. Consumer protection compliance reduces regulatory risk and improves customer satisfaction.
      </p>
    </div>

    {/* CARD 3 */}
    <div>
      {/* ICON */}
      <div className="mb-6">
        <svg width="36" height="36" fill="none" stroke="#6FBF4A" strokeWidth="2"
          viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      <h3
        className="text-2xl font-bold mb-4"
        style={{ fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif" }}
      >
        Financial Compliance
      </h3>

      <p
        className="leading-7 text-[17px]"
        style={{ fontFamily: "Mona Sans, Helvetica, Arial, sans-serif" }}
      >
        Financial regulations affect billing and revenue operations. Tax calculation and collection support, revenue recognition compliance,
         audit trail maintenance, financial reporting capabilities,
         and payment processing compliance including PCI-DSS. Financial compliance ensures proper accounting and reduces audit risk.
      </p>
    </div>

  </div>
</div>

      </section>


      {/* =============================
      SECTION: RECORD RETENTION
============================== */}
<section className="px-6 md:px-20 pt-24 pb-10 text-center">

  <h2
   className="font-bold mb-8 leading-[1.15]"
style={{
  fontSize: "2.75rem",
  fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif",
}}

  >
    Record Retention
  </h2>

  <p
    className="max-w-4xl mx-auto text-[18px] leading-8"
    style={{
      fontFamily: "Mona Sans, Helvetica, Arial, sans-serif",
    }}
  >
    Regulations require retaining records for specified periods. CleverMobi manages
    retention automatically with configurable retention policies by record type,
    automated archival of aged records, secure storage meeting regulations, and
    retrieval capabilities for audits or legal requests. Automated retention ensures
    compliance without manual management.
  </p>

</section>


      {/* =============================
          SECTION: REGULATORY REPORTING
      ============================== */}



{/* =============================
      SECTION: REGULATORY REPORTING
============================== */}
<section className="px-6 md:px-20 py-24 grid md:grid-cols-2 gap-16 items-center">

  {/* IMAGE LEFT */}
  <div className="flex justify-center">
    <img
      src={PortalPhone}
      alt="Regulatory Reporting"
      className="rounded-[32px] w-[80%] max-w-[480px] object-cover shadow-md"
    />
  </div>

  {/* TEXT RIGHT */}
  <div className="max-w-xl">
    <h2
      className="font-bold mb-6 leading-[1.15]"
      style={{
        fontSize: "2.75rem",
        fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif",
      }}
    >
      Regulatory Reporting
    </h2>

    <p
      className="text-[18px] leading-8"
      style={{
        fontFamily: "Mona Sans, Helvetica, Arial, sans-serif",
      }}
    >
      Many jurisdictions require periodic regulatory reports. CleverMobi
      supports reporting requirements with standard report templates for
      common filings, data export for external reporting tools, audit
      support with comprehensive records, and documentation of compliance
      activities. Reporting capabilities simplify regulatory obligations.
    </p>
  </div>

</section>

      {/* =============================
          SECTION: EVOLVING REGULATIONS
      ============================== */}
      <section className="bg-[#0C7B32] text-white text-center px-6 md:px-20 py-28">
        <h2
          className="text-3xl md:text-5xl font-bold mb-8 leading-[1.15]"
          style={{
            fontFamily: "PST Mail Sans, Helvetica, Arial, sans-serif",
          }}
        >
          Evolving Regulations
        </h2>

        <p
          className="max-w-3xl mx-auto text-lg leading-7"
          style={{
            fontFamily: "Mona Sans, Helvetica, Arial, sans-serif",
          }}
        >
          Telecommunications regulations evolve continuously. CleverMobi monitors
          regulatory changes affecting mobile operators, implements required
          platform updates, communicates changes impacting operations, and
          ensures continued compliance as regulations evolve. Regulatory
          monitoring reduces operator burden while keeping compliance efficient.
        </p>
      </section>
    </div>
</>
  );
}
