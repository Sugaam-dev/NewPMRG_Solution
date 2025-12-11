import React from "react";
import securityImg from "../../../assets/security.png";     // update path
import dashboardsImg from "../../../assets/business.png";   // update path
import HeroSection from "../HeroSection";
import securityanalyticsdata from "../../../data/securityanalyticsdata";

export default function SecurityAnalyticsPage() {
  return (
    <>

    <HeroSection {...securityanalyticsdata}/>
    <div className="w-full font-[Mona Sans] text-[#0b1f1a]">
      {/* ===================== HERO ===================== */}
    

      {/* ===================== COMPREHENSIVE SECURITY ===================== */}
      <section className="px-8 md:px-20 py-10 grid md:grid-cols-2 gap-12 items-center">
       <div className="flex justify-center w-full">
            <div className="w-[90%] max-w-[500px] rounded-[32px] overflow-hidden shadow-lg">
                <img
                src={securityImg}
                alt="Security UI"
                className="w-full h-full object-cover"
                />
            </div>
            </div>


        <div>
          <h2 className="mb-5 text-4xl font-bold leading-tight">
            Comprehensive Security
          </h2>

          <p className="text-lg leading-relaxed font-normal">
            Multi-layered security protects against threats and unauthorized
            access. Encryption protects data in transit and at rest, role-based
            access control limits system access appropriately, authentication
            mechanisms verify user identities, audit logging tracks all system
            activities, and regular security assessments identify
            vulnerabilities. Security built into architecture rather than added
            later.
          </p>
        </div>
      </section>

      {/* ===================== DATA PRIVACY ===================== */}
      <section className="px-8 md:px-20 py-5 text-center">
        <h2 className="mb-5 text-4xl font-bold leading-tight">Data Privacy</h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed font-normal">
          Customer data privacy is paramount and built into PMRG Solution. GDPR
          compliance with appropriate data handling, customer consent management
          and preferences, data retention policies and automatic purging,
          privacy-by-design principles throughout platform, and data processing
          agreements meeting regulatory requirements. Privacy protection prevents
          costly violations and builds customer trust.
        </p>
      </section>

      {/* ===================== FRAUD PREVENTION ===================== */}
      <section className="bg-[#0a1a17] text-white px-8 md:px-20 py-24">
        <div className="text-center mb-16">
          <h2 className="mb-5 text-4xl font-bold leading-tight">
            Fraud Prevention
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed font-normal text-gray-300">
            Telecommunications fraud costs operators significantly. PMRG Solution
            includes fraud detection capabilities monitoring unusual usage
            patterns, identifying suspicious account activities, detecting
            payment fraud attempts, alerting operators to potential fraud, and
            supporting investigation with comprehensive data. Early fraud
            detection minimizes losses.
          </p>
        </div>

        {/* analytics blocks */}
<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-12">

  {/* BUSINESS ANALYTICS */}
            <div className="bg-[#0f2c24] p-8 rounded-[20px] border border-[#1e3a32] shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                {/* ICON */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#B7FF5A"
                className="w-10 h-10 mb-4"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                </svg>

                <h3 className="text-2xl font-bold mb-4">Business Analytics</h3>
                <p className="text-gray-300 leading-relaxed">
                Powerful analytics transform operational data into business insights.
                Pre-built reports cover financial performance, customer acquisition and
                retention, usage patterns and trends, product performance and popularity,
                and operational efficiency metrics. Standard reports provide immediate
                visibility without custom development.
                </p>
            </div>

  {/* CUSTOM ANALYTICS */}
            <div className="bg-[#0f2c24] p-8 rounded-[20px] border border-[#1e3a32] shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                {/* ICON */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#B7FF5A"
                className="w-10 h-10 mb-4"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-7M9 21V3M15 21v-10M20 21v-4" />
                </svg>

                <h3 className="text-2xl font-bold mb-4">Custom Analytics</h3>
                <p className="text-gray-300 leading-relaxed">
                Beyond standard reports, flexible analytics tools enable custom analysis.
                Ad hoc query capabilities explore data interactively, custom report
                builder creates specialized reports, data export for advanced analysis
                tools, API access to analytics data, and dashboard customization
                highlighting key metrics. Analytics flexibility supports diverse business
                needs.
                </p>
            </div>

            {/* PREDICTIVE INSIGHTS */}
            <div className="bg-[#0f2c24] p-8 rounded-[20px] border border-[#1e3a32] shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                {/* ICON */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#B7FF5A"
                className="w-10 h-10 mb-4"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
                </svg>

                <h3 className="text-2xl font-bold mb-4">Predictive Insights</h3>
                <p className="text-gray-300 leading-relaxed">
                Advanced analytics identify patterns predicting future outcomes. Churn
                prediction models identify at-risk customers, usage forecasting supports
                capacity planning, revenue projections inform financial planning, product
                success prediction guides development priorities, and customer lifetime
                value analysis focuses acquisition efforts. Predictive insights enable
                proactive management.
                </p>
            </div>

            </div>


       
      </section>



           <section className="relative px-8 md:px-20 py-5 text-center overflow-hidden">

                  

                    {/* TITLE + DESCRIPTION */}
                    <h2 className="mb-5 text-4xl font-bold leading-tight">
                        Real-Time Dashboards
                    </h2>

                    <p className="max-w-4xl mx-auto text-lg leading-relaxed font-normal mb-12">
                        Executive dashboards provide real-time business visibility. Monitor key
                        performance indicators continuously, track current period performance versus
                        targets, identify trends and anomalies immediately, drill down from
                        summaries to detailed data, and customize views for different stakeholders.
                        Real-time visibility enables rapid response to opportunities or problems.
                    </p>

                    {/* DASHBOARD IMAGES GRID */}
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="rounded-xl h-auto overflow-hidden bg-white">
                        <img src={dashboardsImg} className="w-full h-auto object-contain" alt="Dashboard" />
                        </div>

                        <div className="rounded-xl h-auto overflow-hidden bg-white">
                        <img src={dashboardsImg} className="w-full h-auto object-contain" alt="Dashboard" />
                        </div>

                        <div className="rounded-xl h-auto overflow-hidden bg-white">
                        <img src={dashboardsImg} className="w-full h-auto object-contain" alt="Dashboard" />
                        </div>

                        {/* <div className="rounded-xl shadow-md overflow-hidden bg-white">
                        <img src={dashboardsImg} className="w-full h-full object-cover" alt="Dashboard" />
                        </div>

                        <div className="rounded-xl shadow-md overflow-hidden bg-white">
                        <img src={dashboardsImg} className="w-full h-full object-cover" alt="Dashboard" />
                        </div>

                        <div className="rounded-xl shadow-md overflow-hidden bg-white">
                        <img src={dashboardsImg} className="w-full h-full object-cover" alt="Dashboard" />
                        </div> */}

                    </div>
                    </section>

      {/* ===================== REAL-TIME DASHBOARDS ===================== */}
      {/* <section className="px-8 md:px-20 py-24 text-center">
        <h2 className="mb-5 text-4xl font-bold leading-tight">
          Real-Time Dashboards
        </h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed font-normal mb-12">
          Executive dashboards provide real-time business visibility. Monitor key
          performance indicators continuously, track current period performance
          versus targets, identify trends and anomalies immediately, drill down
          from summaries to detailed data, and customize views for different
          stakeholders. Real-time visibility enables rapid response to
          opportunities or problems.
        </p>
         
        <img
          src={dashboardsImg}
          alt="Dashboard Analytics"
          className="w-full rounded-xl shadow-lg"
        />
      </section> */}
    </div>
    </>
  );
}
