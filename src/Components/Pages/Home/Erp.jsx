// src/pages/ErpPage.jsx
import React from "react";
import erp from'../../../assets/erp.jpg'
const Erp = () => {
  return (
    <main className="w-full bg-white text-slate-900 lg:pt-24 pb-16">
      {/* Full-width hero */}
      <section className="w-full px-6 md:px-8 lg:px-30">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 mb-2">
              PMRG Solution · ERP Services
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              ERP solutions that connect your entire business
            </h1>
            <p className="lg:text-lg text-slate-500 max-w-md leading-relaxed">
              At PMRG Solution we design and implement ERP systems that bring
              finance, sales, inventory, HR, and projects into a single
              platform. Your teams work on one source of truth, with real‑time
              data and streamlined workflows instead of scattered spreadsheets.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={erp}
              alt="ERP dashboard for PMRG Solution client"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* How it works + modules */}
      <section className="w-full mt-12 px-6 md:px-8 lg:px-30">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">How our ERP works</h2>
            <p className="lg:text-lg text-slate-500 max-w-md leading-relaxed">
              We build modular ERP setups where every module—finance, inventory,
              HR, CRM, or projects—shares the same database. When your team
              books a sale, the system can instantly update stock, revenue,
              customer balance, and dashboards, reducing manual entry and
              avoiding mistakes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">What PMRG covers</h2>
            <ul className="lg:text-lg text-slate-500 max-w-md leading-relaxed">
              <li>• Finance & accounting: invoicing, payments, reporting.</li>
              <li>• Sales & order management: quotes, orders, renewals.</li>
              <li>• Inventory & procurement: stock, purchasing, suppliers.</li>
              <li>• HR & payroll: employees, attendance, salaries.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full mt-12 px-6 md:px-8 lg:px-30">
        <h2 className="text-xl font-semibold mb-3">
          Why teams choose PMRG for ERP
        </h2>
        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-700">
          <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
            One clear picture of your business with consistent, accurate data
            across every department.
          </p>
          <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
            Automated processes that cut repetitive work and let your people
            focus on growth.
          </p>
          <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
            A scalable architecture so you can start small and extend the
            system as PMRG helps you grow.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Erp;
