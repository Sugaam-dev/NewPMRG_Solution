// // src/pages/ErpPage.jsx
// import React from "react";
// import erp from'../../../assets/erp.jpeg'
// const Erp = () => {
//   return (
//     <main className="w-full bg-white text-slate-900 lg:pt-15 lg:pb-15">
//       {/* Full-width hero */}
//       <section className="w-full px-6 md:px-8 lg:px-30">
//         <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 mb-2">
//               PMRG Solution · ERP Services
//             </p>
//             <h1 className="text-3xl md:text-4xl font-bold mb-3">
//               ERP solutions that connect your entire business
//             </h1>
//             <p className="lg:text-lg text-slate-500  leading-relaxed">
//               At PMRG Solution we design and implement ERP systems that bring
//               finance, sales, inventory, HR, and projects into a single
//               platform. AI-powered analytics, forecasting, and intelligent automation give
//               your teams one source of truth, with real-time insights and streamlined
//               workflows instead of scattered spreadsheets.
//             </p>
//           </div>

//           <div className="rounded-2xl overflow-hidden shadow-md">
//             <img
//               src={erp}
//               alt="ERP dashboard for PMRG Solution client"
//               className="w-full h-full object-cover"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </section>

//       {/* How it works + modules */}
//       <section className="w-full mt-12 px-6 md:px-8 lg:px-30">
//         <div className="grid gap-8 md:grid-cols-2">
//           <div>
//             <h2 className="text-xl font-semibold mb-2">How our ERP works</h2>
//             <p className="lg:text-lg text-slate-500  leading-relaxed">
//               We build modular ERP setups where every module—finance, inventory,
//               HR, CRM, or projects—shares the same database. When your team
//               books a sale, the system can instantly update stock, revenue,
//               customer balance, and dashboards, reducing manual entry and
//               avoiding mistakes.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold mb-2">What PMRG Solution covers</h2>
//             <ul className="lg:text-lg text-slate-500  leading-relaxed">
//               <li>• Finance & accounting: invoicing, payments, reporting.</li>
//               <li>• Sales & order management: quotes, orders, renewals.</li>
//               <li>• Inventory & procurement: stock, purchasing, suppliers.</li>
//               <li>• HR & payroll: employees, attendance, salaries.</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="w-full mt-12 px-6 md:px-8 lg:px-30">
//         <h2 className="text-xl font-semibold mb-3">
//           Why teams choose PMRG Solution for ERP
//         </h2>
//         <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-700">
//           <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
//             One clear picture of your business with consistent, accurate data
//             across every department.
//           </p>
//           <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
//             Automated processes that cut repetitive work and let your people
//             focus on growth.
//           </p>
//           <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
//             A scalable architecture so you can start small and extend the
//             system as PMRG Solution helps you grow.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Erp;


// src/pages/ErpPage.jsx
import React, { useState, useRef } from "react";
import erp from "../../../assets/erp.jpeg";

const Erp = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = false;
    videoRef.current.play().then(() => {
      setHasStarted(true);
    }).catch(() => {
      setHasStarted(true);
    });
  };

  return (
    <main className="w-full bg-white text-slate-900 lg:pt-15 lg:pb-15">
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
            <p className="lg:text-lg text-slate-500 leading-relaxed">
              At PMRG Solution we design and implement ERP systems that bring
              finance, sales, inventory, HR, and projects into a single
              platform. AI-powered analytics, forecasting, and intelligent automation give
              your teams one source of truth, with real-time insights and streamlined
              workflows instead of scattered spreadsheets.
            </p>
          </div>

          {/* RIGHT: ERP image + inline video, same CRM style */}
          <div className="rounded-2xl overflow-hidden shadow-md bg-slate-200">
            <div className="relative w-full aspect-[16/9]">
              {/* Base image */}
              <img
                src={erp}
                alt="ERP dashboard for PMRG Solution client"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              {/* ERP video (replace src path with your ERP video) */}
              <video
                ref={videoRef}
                src="../video/erpvideo.mp4" 
                poster={erp}
                className="absolute inset-0 w-full h-full object-cover z-10"
                playsInline
                controls={hasStarted}
                preload="none"
                controlsList="nodownload"
              />

              {/* Initial white triangle in top-left */}
              {!hasStarted && (
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="absolute top-3 left-3 z-20 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/55 hover:bg-black/75 transition-colors"
                  aria-label="Play ERP demo video"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How it works + modules */}
      <section className="w-full mt-12 px-6 md:px-8 lg:px-30">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">How our ERP works</h2>
            <p className="lg:text-lg text-slate-500 leading-relaxed">
              We build modular ERP setups where every module—finance, inventory,
              HR, CRM, or projects—shares the same database. When your team
              books a sale, the system can instantly update stock, revenue,
              customer balance, and dashboards, reducing manual entry and
              avoiding mistakes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">What PMRG Solution covers</h2>
            <ul className="lg:text-lg text-slate-500 leading-relaxed">
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
          Why teams choose PMRG Solution for ERP
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
            system as PMRG Solution helps you grow.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Erp;
