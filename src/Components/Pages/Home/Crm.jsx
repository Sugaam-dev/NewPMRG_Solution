import React from "react";
import crm from '../../../assets/crm.svg'
const Crm = () => {
  return (
    <main className="w-full bg-white text-slate-900 pt-24 pb-16">
      {/* Full-width hero */}
      <section className="w-full px-6 md:px-8 lg:px-30">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 mb-2">
              PMRG Solution · CRM Services
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              CRM that puts your customers at the center
            </h1>
            <p className="lg:text-lg text-slate-500 max-w-md leading-relaxed">
              PMRG Solution builds CRM platforms that keep all your customer
              information—leads, deals, emails, calls, and support requests—in
              one place. Sales, marketing, and service teams see the same 360°
              view, so every interaction feels consistent and personal.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
            
              src={crm }
              alt="CRM dashboard for PMRG Solution client"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* How it works + tracking */}
      <section className="w-full mt-12 px-4 md:px-6 lg:px-30">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">How our CRM works</h2>
            <p className="lg:text-lg text-slate-500 max-w-md leading-relaxed">
              We connect your website forms, email, phone, and campaigns into
              one CRM pipeline. Leads move through stages with clear owners,
              tasks, and reminders, so your team never loses track of a follow‑up
              or opportunity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              What PMRG helps you track
            </h2>
            <ul className="lg:text-lg text-slate-500 max-w-md leading-relaxed">
              <li>• Contacts and companies with full interaction history.</li>
              <li>• Deals and pipelines with values, stages, and probabilities.</li>
              <li>• Campaign performance and lead sources.</li>
              <li>• Service tickets and SLAs for existing customers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full mt-12 px-6 md:px-8 lg:px-30">
        <h2 className="text-xl font-semibold mb-3">
          Why PMRG is the right partner for CRM
        </h2>
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
            Stronger relationships through complete context on every customer
            and faster, smarter responses.
          </p>
          <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
            More revenue from organized pipelines, automatic reminders, and
            clear sales priorities.
          </p>
          <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
            Actionable insights with dashboards tailored by PMRG to your
            goals, teams, and reporting needs.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Crm;
