import React from "react";
import sunset from "../../../assets/sunset.jpg";
import mvnosData from "../../../data/mvnosData";
import HeroSection from "../HeroSection";
import { Shapes, CreditCard, Users } from "lucide-react";

export default function Mvnos() {
  return (
    <>
      <HeroSection {...mvnosData} />

      <main className="w-full overflow-x-hidden">
        {/* Launch Quickly Section - blue theme */}
        <section className="w-full px-4 sm:px-6 py-6 sm:py-10 ">
          <div className="max-w-[900px] mx-auto mb-10 text-center ">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Launch Quickly
            </h2>

            <p className="text-base sm:text-lg lg:text-xl  leading-[1.7]">
            MVNOs need to reach market fast to compete effectively. PMRG-Solution enables rapid, AI-assisted deployment with 
            pre-configured workflows, proven best practices, and seamless MVNE integration. Launch new mobile services in weeks
             instead of months with AI-optimized billing and customer management ready from day one.
            </p>
          </div>

          {/* Features Section with Lucide icons */}
          <div className="max-w-[1200px] mx-auto bg-slate-900/5 rounded-3xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div>
              <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-sky-400">
                <Shapes size={22} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Flexible Product Management
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-[1.7]">
                Consumer MVNO success requires product flexibility and speed.
                PMRG-Solution lets you create new pricing plans in minutes using AI-assisted configuration, design powerful discount campaigns
                effortlessly, and launch promotions in hours instead of weeks. 
                AI-driven insights help test market responses quickly and adapt offerings based on customer feedback without technical barriers.
               </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-sky-400">
                <CreditCard size={22} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Efficient Billing Operations
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-[1.7]">
                Billing complexity can overwhelm growing MVNOs. PMRG-Solution streamlines operations with AI-powered smart invoicing, automated payment handling, and intelligent, AI-driven dunning processes. Near real-time usage data, enhanced by AI-based anomaly detection and insights, ensures transparency so your team focuses on growth rather than reconciliation.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-sky-400">
                <Users size={22} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Customer Management
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-[1.7]">
                Comprehensive customer management tools handle the complete lifecycle
                from signup through service delivery and support. AI-enabled self-service
                portals empower customers to manage accounts independently, while AI-assisted
                agent tools provide unified customer insights for fast, consistent support.
              </p>
            </div>
          </div>
        </section>

        {/* Seamless MVNE Integration Section */}
        <section className="w-full bg-white px-4 sm:px-6 py-6 sm:py-10">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* IMAGE (mobile below) */}
            <div className="order-2 md:order-2 w-full">
              <img
                src={sunset}
                alt="Network tower at sunset"
                className="w-full h-auto object-cover rounded-[32px] shadow-[0_20px_40px_rgba(15,23,42,0.25)]"
              />
            </div>

            {/* TEXT (mobile first) */}
            <div className="order-1 md:order-1 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 text-slate-900">
                Seamless MVNE Integration
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-[1.8] max-w-[550px]">
                PMRG-Solution integrates seamlessly with MVNEs for complete
                end-to-end operations. AI-assisted provisioning happens instantly when customers
                sign up or change plans, and AI-enhanced usage analytics ensure data flows
                continuously from network to billing. This integration eliminates data
                synchronization headaches common with separate systems.
              </p>
            </div>
          </div>
        </section>

        {/* Scale Confidently Section */}
        <section className="w-full bg-blue-200 px-4 sm:px-6 py-6 sm:py-10">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Scale Confidently
            </h2>
            <p className="text-base sm:text-lg lg:text-xl  leading-[1.7]">
             As your MVNO grows, PMRG-Solution scales effortlessly with AI-driven automation and intelligence. The platform handles thousands of customers with the same efficiency as hundreds. AI-powered automated processes prevent operational bottlenecks, so you can add new products, channels, or markets without platform limitations constraining your ambitions.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
