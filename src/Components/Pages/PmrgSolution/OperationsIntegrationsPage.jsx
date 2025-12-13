import React from "react";
import BillingImg from "../../../assets/business1.png";
import LaptopImg from "../../../assets/crm-integration.png";
import HeroSection from "../HeroSection";
import operationsintegrationdata from "../../../data/operationsintegrationdata";
import { Receipt, Users, Network, PlugZap } from "lucide-react";

export default function OperationsIntegrationsPage() {
  return (
    <>
      <HeroSection {...operationsintegrationdata} />

      <div className="w-full font-[Mona Sans] text-[#0b1f1a]">
        {/* BILLING OPERATIONS */}
        <section className="px-4 sm:px-6 md:px-20 py-5 sm:py-8 lg:py-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* TEXT (mobile first) */}
          <div className="order-1 md:order-1 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Efficient Billing
              <br />
              Operations
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#0b1f1a]">
              PMRG Solution automates billing operations from usage collection
              through payment reconciliation. Automated invoice generation,
              multiple invoice formats and delivery methods, payment processing
              across channels, intelligent dunning, revenue recognition and
              accounting integration, and reconciliation workflows all work
              together to improve cash flow and reduce cost.
            </p>
          </div>

          {/* IMAGE (mobile below) */}
          <div className="order-2 md:order-2 flex justify-center">
            <div className="w-full max-w-[520px] rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.25)]">
              <img
                src={BillingImg}
                alt="Billing Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* PROVISIONING AUTOMATION */}
        <section className="px-4 sm:px-6 md:px-20 py-5 sm:py-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            Provisioning Automation
          </h2>
          <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-[1.7] font-normal tracking-normal">
            Automated provisioning integrates with MVNEs like PMRG Solution for
            seamless operations. New customer activations happen instantly, plan
            changes take effect in real time, number portability executes
            automatically, service suspensions and reactivations process
            immediately, and bulk operations handle large-scale changes without
            manual intervention.
          </p>
        </section>

        {/* 3 FEATURE CARDS – BLUE THEME WITH LUCIDE */}
        <section className="bg-slate-950 px-4 sm:px-6 md:px-20 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-12 items-stretch text-white">
            {/* CARD 1 */}
            <div className="bg-slate-900/80 border border-blue-700/60 rounded-2xl p-8 lg:p-10 shadow-[0_0_35px_rgba(0,0,0,0.35)] h-full flex flex-col">
              <div className="mb-5 flex items-center justify-center w-11 h-11 rounded-full bg-slate-800 text-sky-400">
                <Users size={24} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Customer Lifecycle Management
              </h3>
              <p className="text-sm sm:text-base text-slate-100/85 leading-[1.7] flex-1">
                Complete lifecycle workflows from acquisition through retention
                or departure. Onboarding automation, service delivery flows,
                targeted retention campaigns, win‑back programs, and structured
                offboarding together increase customer value and reduce churn.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-slate-900/80 border border-blue-700/60 rounded-2xl p-8 lg:p-10 shadow-[0_0_35px_rgba(0,0,0,0.35)] h-full flex flex-col">
              <div className="mb-5 flex items-center justify-center w-11 h-11 rounded-full bg-slate-800 text-sky-400">
                <Network size={24} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Partner & Reseller Management
              </h3>
              <p className="text-sm sm:text-base text-slate-100/85 leading-[1.7] flex-1">
                Support indirect channels with partner portals, commission
                calculation and payment, revenue‑sharing workflows, performance
                analytics, and multi‑tier hierarchies so channel operations stay
                transparent and scalable.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-slate-900/80 border border-blue-700/60 rounded-2xl p-8 lg:p-10 shadow-[0_0_35px_rgba(0,0,0,0.35)] h-full flex flex-col">
              <div className="mb-5 flex items-center justify-center w-11 h-11 rounded-full bg-slate-800 text-sky-400">
                <PlugZap size={24} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Open API Architecture
              </h3>
              <p className="text-sm sm:text-base text-slate-100/85 leading-[1.7] flex-1">
                Comprehensive REST APIs expose all platform capabilities with
                secure authentication, webhooks, rate limiting, and versioning.
                This prevents vendor lock‑in and enables custom applications and
                deeper ecosystem integrations.
              </p>
            </div>
          </div>
        </section>

        {/* PRE-BUILT INTEGRATIONS */}
        <section className="px-4 sm:px-6 md:px-20 py-5 sm:py-8 text-center bg-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-5">
            Pre-Built Integrations
          </h2>
          <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-10 sm:mb-12">
            Beyond open APIs, PMRG Solution offers pre‑built integrations with
            common systems: payment gateways, accounting platforms, CRM
            solutions, MVNEs, and communication providers. These connectors
            accelerate deployment and reduce implementation risk.
          </p>

          {/* IMAGE ALWAYS BELOW TEXT */}
          <div className="flex justify-center">
            <div className="rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.25)] w-[90%] max-w-4xl">
              <img
                src={LaptopImg}
                alt="Integrations Dashboard"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* INTEGRATION SUPPORT */}
        <section className="px-4 sm:px-6 md:px-20 py-5 sm:py-8 text-center bg-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-5">
            Integration Support
          </h2>
          <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            PMRG Solution’s team supports complex integration projects including
            architecture consultation, custom connector development, testing and
            validation, documentation and training, and ongoing integration
            maintenance so the platform fits smoothly into your existing
            ecosystem.
          </p>
        </section>
      </div>
    </>
  );
}
