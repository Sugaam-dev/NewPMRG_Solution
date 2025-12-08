import React from "react";
import { Bell, CreditCard, WalletCards } from "lucide-react";

const PmrgFeaturs = () => {
  return (
 <section className="bg-white text-slate-900">
      {/* Top area -------------------------------------------------------- */}
      <div className="px-6 py-16 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
          Automated invoicing &amp; payments
        </h2>

        <p className="mx-auto max-w-xl lg:text-lg text-slate-500">
          Streamline billing with smart invoicing, payment handling and automated dunning fees.
        </p>

        {/* Cards strip */}
        <div className="mt-8 rounded-2xl bg-blue-50 px-6 py-6 md:px-10 md:py-8 grid gap-6 md:grid-cols-3 text-left">
          <div>
            <Bell className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 lg:text-lg font-semibold text-slate-900">
              Automated Dunning &amp; Communication
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Effortlessly manage payment reminders and invoice notifications with fully automated
              communication.
            </p>
          </div>

          <div>
            <CreditCard className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 lg:text-lg font-semibold text-slate-900">
              Seamless Payment Integration
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Automate direct payments, debits and account suspensions to reduce manual work and
              secure your cash flow.
            </p>
          </div>

          <div>
            <WalletCards className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 lg:text-lg font-semibold text-slate-900">
              Cashback Loyalty Wallet
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Reward customers with instant cashback that automatically applies to future invoices.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom area ----------------------------------------------------- */}
      <div className="px-6 pb-5 md:px-16 lg:px-5">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* Left text column */}
          <div className="flex h-full items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Seamless, Real-Time Provisioning &amp; Control
              </h2>

              <p className="mt-4 lg:text-lg text-slate-500 max-w-md leading-relaxed">
                Automated provisioning integrates with your stack to enable instant bundle
                assignment, balance management, number portability and service toggling.
              </p>

              <p className="mt-2 lg:text-lg text-slate-500 max-w-md leading-relaxed">
                Real-time usage data and customizable alerts keep every stakeholder informed and in
                control.
              </p>
            </div>
          </div>

          {/* Right image card */}
          <div className="h-[340px] w-full overflow-hidden rounded-3xl shadow-sm md:h-[360px]">
            <img
              src="https://images.pexels.com/photos/5076515/pexels-photo-5076515.jpeg"
              alt="Person using phone"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PmrgFeaturs;
