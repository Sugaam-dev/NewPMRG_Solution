import React from 'react';
import { TrendingUp } from 'lucide-react';

const BusinessInsights = () => {
  return (
    <section className="bg-[#021c34] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* LEFT: TEXT */}
        <div className="w-full lg:w-1/2">
          {/* icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0ea5e9]/10">
              <TrendingUp className="w-5 h-5 text-[#38bdf8]" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            Business insights
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-slate-200 max-w-xl">
            Leverage our ready‑to‑use Power BI datasets and reports, or empower your BI experts with
            direct data access. Effortlessly analyze contract value, customer usage, churn rates,
            CPA, and optimize purchase strategies.
          </p>
        </div>

        {/* RIGHT: DASHBOARD CARD */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-3xl rounded-[32px] overflow-hidden bg-white shadow-[0_30px_60px_rgba(15,23,42,0.45)]">
        

            {/* image area */}
            <div className="bg-white">
              <img
                src="https://wp-api.clevergroup.nl/mobi/wp-content/uploads/sites/3/2024/10/business.png"
                alt="Business insights dashboard"
                className="w-full h-auto object-cover align-middle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInsights;
