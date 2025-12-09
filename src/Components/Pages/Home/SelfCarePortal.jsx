// src/pages/SelfCarePortal.jsx
import React from "react";
import self from '../../../assets/self.jpeg'
import { useNavigate } from "react-router-dom";
const SelfCarePortal = () => {
    const navigate =useNavigate();
const navi=()=>{
    navigate('/contact')
}
  return (
    <main className="w-full bg-white text-slate-900 pb-10 pt-6 md:pt-16 lg:pt-16 ">
      {/* Hero - image LEFT, text RIGHT */}
      <section className="w-full px-6 md:px-8 lg:px-30">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] items-center">
          {/* LEFT: image */}
          <div className="order-1 md:order-1 rounded-3xl overflow-hidden shadow-xl bg-blue-900">
            <div className="relative w-full pt-[70%]">
              <img
                src={self}
                alt="Customer using self-care portal on laptop and mobile"
                className="absolute inset-0 h-full w-full object-cover opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 via-blue-900/30 to-transparent" />
            </div>
          </div>

          {/* RIGHT: text */}
          <div className="order-2 md:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500 mb-2">
              PMRG Solution · Self‑Care Portal
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Transform customer support with digital self‑care
            </h1>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
              Our Self‑Care application lets your customers manage their
              accounts on web and mobile while your teams reduce call‑center
              load, improve satisfaction, and gain real‑time insight into
              behavior.
            </p>
            <div className="grid gap-3 text-sm text-slate-900 md:grid-cols-2">
              <p className="rounded-xl border border-blue-100 bg-blue-50/70 p-3">
                Omnichannel access with a unified experience across web and app.
              </p>
              <p className="rounded-xl border border-blue-100 bg-blue-50/70 p-3">
                Personalized dashboards, notifications, and self‑service flows.
              </p>
              <p className="rounded-xl border border-blue-100 bg-blue-50/70 p-3">
                Enterprise‑grade security, suitable for telecom and other sectors.
              </p>
              <p className="rounded-xl border border-blue-100 bg-blue-50/70 p-3">
                Automation that cuts routine tickets and boosts digital adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Telecom use case */}
      <section className="w-full mt-14 px-6 md:px-8 lg:px-30">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Designed for high‑volume service providers
            </h2>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3">
              Customers can check balances, recharge, change plans, and raise
              complaints in a few taps, with every action synchronized to your
              billing and CRM systems.
            </p>
            <ul className="text-sm text-slate-800 space-y-1">
              <li>• Balance and usage view, one‑click top‑ups and upgrades.</li>
              <li>• Complaint logging and status tracking without calling support.</li>
              <li>• Notifications for offers, renewals, and service updates.</li>
              <li>• Deep integration with BSS, CRM, and identity layers.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm">
            <h3 className="font-semibold mb-2">Why organizations work with PMRG</h3>
            <ul className="space-y-2 text-slate-800">
              <li>• Ready‑to‑use modules for fast rollout and lower risk.</li>
              <li>• Architecture that can plug in AI chatbots and new channels.</li>
              <li>• Analytics to understand behavior and optimize journeys.</li>
              <li>• Clear ROI from fewer tickets and higher self‑service usage.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="w-full mt-14 px-6 md:px-8 lg:px-30">
        <div className="rounded-3xl bg-blue-900 text-white px-6 py-10 md:px-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Ready to modernize your self‑care experience?
            </h2>
            <p className="text-sm md:text-base text-blue-100 max-w-xl">
              PMRG Solution can connect the Self‑Care portal to your existing
              systems and tailor it to your customers or citizens.
            </p>
          </div>
          <button onClick={navi} className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-100 transition-colors">
            Book a demo
          </button>
        </div>
      </section>
    </main>
  );
};

export default SelfCarePortal;
