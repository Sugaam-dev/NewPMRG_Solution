// import React from "react";
// import crm from '../../../assets/crm.jpeg'
// const Crm = () => {
//   return (
//     <main className="w-full bg-white text-slate-900 pb-10 pt-6 md:pt-16 lg:pt-16">
//       {/* Full-width hero */}
//       <section className="w-full px-6 md:px-8 lg:px-30">
//         <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 mb-2">
//               PMRG Solution · CRM Services
//             </p>
//             <h1 className="text-3xl md:text-4xl font-bold mb-3">
//               CRM that puts your customers at the center
//             </h1>
//             <p className="lg:text-lg text-slate-500  leading-relaxed">
//               PMRG Solution builds CRM platforms that keep all your customer
//               information—leads, deals, emails, calls, and support requests—in
//               one place. AI-powered insights and recommendations give sales,
//               marketing, and service teams the same 360° view, so every interaction
//               feels consistent and personal.
//             </p>
//           </div>

//           <div className="rounded-2xl overflow-hidden shadow-md">
//             <img
            
//               src={crm }
//               alt="CRM dashboard for PMRG Solution client"
//               className="w-full h-full object-cover"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </section>

//       {/* How it works + tracking */}
//       <section className="w-full mt-12 px-6 md:px-8 lg:px-30">
//         <div className="grid gap-8 md:grid-cols-2">
//           <div>
//             <h2 className="text-xl font-semibold mb-2">How our CRM works</h2>
//             <p className="lg:text-lg text-slate-500  leading-relaxed">
//               We connect your website forms, email, phone, and campaigns into
//               one CRM pipeline. Leads move through stages with clear owners,
//               tasks, and reminders, so your team never loses track of a follow‑up
//               or opportunity.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold mb-2">
//               What PMRG Solution helps you track
//             </h2>
//             <ul className="lg:text-lg text-slate-500  leading-relaxed">
//               <li>• Contacts and companies with full interaction history.</li>
//               <li>• Deals and pipelines with values, stages, and probabilities.</li>
//               <li>• Campaign performance and lead sources.</li>
//               <li>• Service tickets and SLAs for existing customers.</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="w-full mt-12 px-6 md:px-8 lg:px-30">
//         <h2 className="text-xl font-semibold mb-3">
//           Why PMRG Solution is the right partner for CRM
//         </h2>
//         <div className="grid gap-4 md:grid-cols-3 text-sm">
//           <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
//             Stronger relationships through complete context on every customer
//             and faster, smarter responses.
//           </p>
//           <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
//             More revenue from organized pipelines, automatic reminders, and
//             clear sales priorities.
//           </p>
//           <p className="rounded-xl border border-slate-200 p-3 leading-relaxed">
//             Actionable insights with dashboards tailored by PMRG Solution to your
//             goals, teams, and reporting needs.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Crm;



import React, { useState, useRef } from "react";
import crm from '../../../assets/crm.jpeg';

const Crm = () => {
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
    <main className="w-full bg-white text-slate-900 pb-10 pt-6 md:pt-16 lg:pt-16">
      {/* Full-width hero */}
      <section className="w-full px-6 md:px-8 lg:px-30">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center">
          {/* LEFT: text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 mb-2">
              PMRG Solution · CRM Services
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              CRM that puts your customers at the center
            </h1>
            <p className="lg:text-lg text-slate-500 leading-relaxed">
              PMRG Solution builds CRM platforms that keep all your customer
              information—leads, deals, emails, calls, and support requests—in
              one place. AI-powered insights and recommendations give sales,
              marketing, and service teams the same 360° view, so every interaction
              feels consistent and personal.
            </p>
          </div>

          {/* RIGHT: image + video banner */}
          <div className="rounded-2xl overflow-hidden shadow-md bg-slate-200">
            <div className="relative w-full aspect-[16/9]">
              {/* Base image */}
              <img
                src={crm}
                alt="CRM dashboard for PMRG Solution client"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              {/* Video (same size, loads on demand) */}
              <video
                ref={videoRef}
                src="../video/crmvideo.mp4"
                poster={crm}
                className="absolute inset-0 w-full h-full object-cover z-10"
                playsInline
                controls={hasStarted}       // show controls only after first click
                preload="none"
                controlsList="nodownload"
              />

              {/* INITIAL play button: white triangle, top-left */}
              {!hasStarted && (
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="absolute top-3 left-3 z-20 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/55 hover:bg-black/75 transition-colors"
                  aria-label="Play CRM demo video"
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

      {/* How it works + tracking */}
      <section className="w-full mt-12 px-6 md:px-8 lg:px-30">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">How our CRM works</h2>
            <p className="lg:text-lg text-slate-500 leading-relaxed">
              We connect your website forms, email, phone, and campaigns into
              one CRM pipeline. Leads move through stages with clear owners,
              tasks, and reminders, so your team never loses track of a follow‑up
              or opportunity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              What PMRG Solution helps you track
            </h2>
            <ul className="lg:text-lg text-slate-500 leading-relaxed">
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
          Why PMRG Solution is the right partner for CRM
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
            Actionable insights with dashboards tailored by PMRG Solution to your
            goals, teams, and reporting needs.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Crm;
