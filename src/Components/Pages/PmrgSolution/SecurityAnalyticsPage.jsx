import React from "react";
import securityImg from "../../../assets/security.png";
import dashboardsImg from "../../../assets/business.png";
import HeroSection from "../HeroSection";
import securityanalyticsdata from "../../../data/securityanalyticsdata";
import { LineChart, BarChart3, PanelsTopLeft } from "lucide-react";

export default function SecurityAnalyticsPage() {
  return (
    <>
      <HeroSection {...securityanalyticsdata} />

      <div className="w-full font-[Mona Sans] text-[#0b1f1a]">
        {/* COMPREHENSIVE SECURITY */}
        <section className="px-4 sm:px-6 py-5 sm:py-8 lg:py-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex justify-center w-full">
            <div className="w-[90%] max-w-[500px] rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.25)]">
              <img
                src={securityImg}
                alt="Security UI"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Comprehensive Security
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
              Multi-layered security protects against threats and unauthorized
              access. Encryption protects data in transit and at rest,
              role-based access control limits system access appropriately,
              authentication mechanisms verify user identities, audit logging
              tracks all system activities, and regular security assessments
              identify vulnerabilities. Security is built into the architecture
              rather than added later.
            </p>
          </div>
        </section>

        {/* DATA PRIVACY */}
        <section className="px-4 sm:px-6 py-5 sm:py-8 text-center bg-white">
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Data Privacy
          </h2>
          <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
            Customer data privacy is paramount and built into PMRG Solution.
            GDPR compliance with appropriate data handling, customer consent
            management and preferences, data retention policies and automatic
            purging, privacy‑by‑design principles throughout the platform, and
            data processing agreements meeting regulatory requirements all help
            prevent costly violations and build customer trust.
          </p>
        </section>

        {/* FRAUD PREVENTION + ANALYTICS */}
        <section className="bg-slate-950 text-white px-4 sm:px-6 py-5 sm:py-8 lg:py-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Fraud Prevention
              </h2>
              <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed font-normal text-slate-200">
                Telecommunications fraud costs operators significantly. PMRG
                Solution includes fraud detection capabilities monitoring unusual
                usage patterns, identifying suspicious account activities,
                detecting payment fraud attempts, alerting operators to potential
                fraud, and supporting investigation with comprehensive data so
                early detection minimizes losses.
              </p>
            </div>

            {/* Analytics blocks */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-6 sm:mt-10">
              {/* BUSINESS ANALYTICS */}
              <div className="bg-slate-900/80 p-6 lg:p-8 rounded-[20px] border border-blue-700/60 shadow-[0_0_20px_rgba(0,0,0,0.35)]">
                <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-full bg-slate-800 text-sky-400">
                  <LineChart size={22} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Business Analytics
                </h3>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                  Powerful analytics transform operational data into business
                  insights. Pre‑built reports cover financial performance,
                  customer acquisition and retention, usage patterns and trends,
                  product performance, and operational efficiency metrics,
                  providing immediate visibility without custom development.
                </p>
              </div>

              {/* CUSTOM ANALYTICS */}
              <div className="bg-slate-900/80 p-6 lg:p-8 rounded-[20px] border border-blue-700/60 shadow-[0_0_20px_rgba(0,0,0,0.35)]">
                <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-full bg-slate-800 text-sky-400">
                  <BarChart3 size={22} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Custom Analytics
                </h3>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                  Beyond standard reports, flexible analytics tools enable custom
                  analysis: ad hoc queries, custom report builders, data export
                  for external tools, API access to analytics data, and
                  configurable dashboards that surface the metrics each team
                  cares about most.
                </p>
              </div>

              {/* PREDICTIVE INSIGHTS */}
              <div className="bg-slate-900/80 p-6 lg:p-8 rounded-[20px] border border-blue-700/60 shadow-[0_0_20px_rgba(0,0,0,0.35)]">
                <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-full bg-slate-800 text-sky-400">
                  <PanelsTopLeft size={22} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Predictive Insights
                </h3>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                  Advanced analytics identify patterns that predict future
                  outcomes. Churn prediction highlights at‑risk customers, usage
                  forecasting supports capacity planning, revenue projections
                  inform financial planning, and customer lifetime value analysis
                  focuses acquisition and retention on the most valuable
                  segments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REAL-TIME DASHBOARDS */}
        <section className="relative px-4 sm:px-6 py-5 sm:py-8 lg:py-10 text-center overflow-hidden bg-white">
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Real-Time Dashboards
          </h2>
          <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed font-normal mb-8 sm:mb-10">
            Executive dashboards provide real-time business visibility. Monitor
            key performance indicators continuously, track current period
            performance versus targets, identify trends and anomalies
            immediately, drill down from summaries to detailed data, and
            customize views for different stakeholders. Real-time visibility
            enables rapid response to opportunities or problems.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl h-auto overflow-hidden bg-white shadow-[0_12px_30px_rgba(15,23,42,0.25)]">
              <img
                src={dashboardsImg}
                className="w-full h-auto object-contain"
                alt="Dashboard"
              />
            </div>
            <div className="rounded-xl h-auto overflow-hidden bg-white shadow-[0_12px_30px_rgba(15,23,42,0.25)]">
              <img
                src={dashboardsImg}
                className="w-full h-auto object-contain"
                alt="Dashboard"
              />
            </div>
            <div className="rounded-xl h-auto overflow-hidden bg-white shadow-[0_12px_30px_rgba(15,23,42,0.25)]">
              <img
                src={dashboardsImg}
                className="w-full h-auto object-contain"
                alt="Dashboard"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
