import React from "react";
import BillingImg from "../../../assets/business1.png";
import LaptopImg from "../../../assets/crm-integration.png";
import HeroSection from "../HeroSection";
import operationsintegrationdata from "../../../data/operationsintegrationdata";

export default function OperationsIntegrationsPage() {
  return (
   <>
   <HeroSection {...operationsintegrationdata}/>
   
    <div className="w-full font-[Mona Sans] text-[#0b1f1a]">

      {/* ========================= BILLING OPERATIONS ========================= */}
                           <section className="px-8 md:px-20 py-10 grid md:grid-cols-2 gap-16 place-items-center">

                        {/* IMAGE BLOCK */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-[520px] rounded-[32px] overflow-hidden shadow-xl">
                            <img
                                src={BillingImg}
                                alt="Billing Dashboard"
                                className="w-full h-full object-cover"
                            />
                            </div>
                        </div>

                        {/* TEXT BLOCK */}
                        <div className="text-left">
                            <h2 className="text-4xl font-bold mb-6 leading-tight">
                            Efficient Billing <br />Operations
                            </h2>

                            <p className="text-lg leading-relaxed text-[#0b1f1a]">
                            PMRG Solution automates billing operations from usage collection through
                            payment reconciliation. Automated invoice generation on flexible schedules,
                            multiple invoice formats and delivery methods, payment processing across
                            multiple channels, automated dunning with intelligent escalation, revenue
                            recognition and accounting integration, and reconciliation workflows
                            ensuring accuracy. Billing efficiency reduces costs and improves cash flow.
                            </p>
                        </div>

                        </section>



      {/* ========================= PROVISIONING AUTOMATION ========================= */}
    <section className="px-8 md:px-20 py-5 text-center">
                <h2 className="text-4xl font-bold leading-tight mb-6">
                    Provisioning Automation
                </h2>

                <p className="max-w-4xl mx-auto text-[20px] leading-[1.7] font-normal tracking-normal">
                    Automated provisioning integrates with MVNEs like CleverEnable for seamless
                    operations. New customer activation happens instantly, plan changes take effect
                    in real-time, number portability executes automatically, service suspensions
                    and reactivations process immediately, and bulk operations handle large-scale
                    changes. Provisioning automation eliminates delays frustrating customers and
                    operators.
                </p>
                </section>


                    {/* ========================= 3 FEATURE CARDS ========================= */}
                <section className="bg-[#071a16] px-8 md:px-20 py-28">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-stretch">
                    
                    {/* CARD 1 */}
                    <div className="bg-[#0e2b24] border border-[#1a3c33] rounded-2xl p-10 shadow-[0_0_35px_rgba(0,0,0,0.3)] h-full flex flex-col">
                    <div className="mb-6">
                        <svg className="w-10 h-10 text-[#B7FF5A]" fill="none" stroke="#B7FF5A" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 5v14M5 12h14" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Customer Lifecycle Management</h3>
                    <p className="text-gray-300 leading-[1.7] flex-1">
                        Complete customer lifecycle workflows from acquisition through retention or departure. Onboarding automation ensures
                        consistent customer activation, service delivery workflows manage ongoing operations, retention campaigns target at-risk customers,
                        win-back programs re-engage departed customers,
                        and offboarding processes handle service termination properly. Lifecycle management improves customer value.
                    </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-[#0e2b24] border border-[#1a3c33] rounded-2xl p-10 shadow-[0_0_35px_rgba(0,0,0,0.3)] h-full flex flex-col">
                    <div className="mb-6">
                        <svg className="w-10 h-10 text-[#B7FF5A]" fill="none" stroke="#B7FF5A" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M16 7l-4 4-4-4m8 5l-4 4-4-4" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Partner and Reseller Management</h3>
                    <p className="text-gray-300 leading-[1.7] flex-1">
                        For operators using indirect channels, PMRG Solution supports partner operations. Partner portal access for account management,
                        commission calculation and payment, revenue sharing workflows, partner performance analytics, 
                        and multi-tier partner hierarchies. Channel management capabilities enable indirect sales models.
                    </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-[#0e2b24] border border-[#1a3c33] rounded-2xl p-10 shadow-[0_0_35px_rgba(0,0,0,0.3)] h-full flex flex-col">
                    <div className="mb-6">
                        <svg className="w-10 h-10 text-[#B7FF5A]" fill="none" stroke="#B7FF5A" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Open API Architecture</h3>
                    <p className="text-gray-300 leading-[1.7] flex-1">
                    PMRG Solution's comprehensive REST APIs enable extensive integration. Well-documented endpoints covering all platform functionality,
                        standard authentication and security, webhook support for event notifications, rate limiting and usage quotas,
                        and versioning supporting backward compatibility. Open APIs prevent vendor lock-in and enable custom development.
                    </p>
                    </div>

                </div>
                </section>


      {/* ========================= PRE-BUILT INTEGRATIONS ========================= */}
      <section className="px-8 md:px-20 py-10 text-center">
        <h2 className="text-4xl font-bold leading-tight mb-5">
          Pre-Built Integrations
        </h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed mb-16">
          Beyond open APIs, PMRG Solution offers pre-built integrations with common systems. Payment gateway connections for major providers, 
          accounting system integration for financial data, CRM platform connections for customer data, MVNE integration especially with
           CleverEnable, and communication platform integration for SMS and email. Pre-built integrations accelerate deployment.
        </p>

        {/* Laptop mockup */}
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-xl w-[90%] max-w-4xl">
            <img src={LaptopImg} alt="Integrations Dashboard" className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* ========================= INTEGRATION SUPPORT ========================= */}
      <section className="px-8 md:px-20 py-5 text-center">
        <h2 className="text-4xl font-bold leading-tight mb-5">
          Integration Support
        </h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          PMRG Solution’s team supports complex integration projects including
          architecture consultation, custom connector development, testing and
          validation, documentation and training, and ongoing integration
          maintenance. Integration expertise ensures PMRG Solution fits seamlessly
          into your ecosystem.
        </p>
      </section>

    </div>
   </>
  );
}
