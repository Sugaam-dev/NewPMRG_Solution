import React from 'react';

const Crm = () => {
  return (
    <section className="relative overflow-hidden bg-white text-[#111827]">
      {/* BIG LIGHT GREY BACKGROUND BLOB */}
      <div className="hidden md:block absolute -left-40 bottom-[-120px] w-[520px] h-[320px] rounded-[999px] bg-[#edf0ea]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 relative">
        {/* TITLE + DESCRIPTION */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Use the best CRM for online marketing
          </h1>
          <p className="mt-4 lg:text-lg  leading-relaxed text-[#4b5563]">
            Combine CleverMobi seamlessly with HubSpot—a CRM purpose‑built for sales and marketing.
            Your data is always in sync. Effortlessly navigate between systems, using intuitive card
            views to switch context instantly.
          </p>
        </header>

        {/* VISUAL BLOCK */}
        <div className="relative flex justify-center mt-4">
          {/* LIGHT AQUA CIRCLE ON LEFT (BEHIND BLACK CARD) */}
          <div className="hidden md:block absolute -left-24 top-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-[#b9f1f3] z-0" />

          {/* BLACK MOCKUP CARD */}
          <div className="relative w-full max-w-4xl rounded-[32px] overflow-hidden shadow-[0_32px_60px_rgba(15,23,42,0.25)] bg-black z-10">
            <div className="p-2 bg-black">
              <div className="rounded-[26px] overflow-hidden bg-white">
                <img
                  src="https://wp-api.clevergroup.nl/mobi/wp-content/uploads/sites/3/2024/10/crm-integration.png"
                  alt="CRM dashboard"
                  className="w-full h-auto object-cover align-middle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crm;
