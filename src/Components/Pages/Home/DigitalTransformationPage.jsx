// DigitalTransformationPage.jsx
import React from "react";
import { Smartphone, Zap, Cloud, ArrowRight, CheckCircle } from "lucide-react";
import digital from "../../../assets/digital-transformation.jpg";

const DigitalTransformationPage = () => {
  const WHATSAPP_NUMBER = "7722017100";

  const whatsappMessage = () => {
    const message = encodeURIComponent(
      "Hi, I’d like to know more about your services and opportunities."
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-white text-slate-900">
      {/* Top area */}
      <div className="px-6 py-6 md:px-10 lg:px-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
          Digital Transformation Services
        </h2>

        <p className="mx-auto max-w-2xl lg:text-lg text-slate-500">
          PMRG Solution modernizes your business operations with custom web applications,
          intelligent process automation, secure cloud infrastructure, and seamless
          integrations between your existing tools so teams work faster, with fewer errors,
          and your customers get a smooth digital experience across every touchpoint.
        </p>

        {/* Cards strip */}
        <div className="mt-10 rounded-2xl bg-blue-50 px-6 py-8 md:px-12 md:py-10 grid gap-6 md:grid-cols-3 text-left">
          <div>
            <Smartphone className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 lg:text-lg font-semibold text-slate-900">
              Modern Web Apps
            </h3>
            <p className="mt-1 text-sm text-slate-500 leading-relaxed">
              Fully responsive websites, portals, and internal tools with modern UI/UX,
              role-based access, and APIs that connect smoothly with your CRM, ERP,
              and third‑party services.
            </p>
          </div>

          <div>
            <Zap className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 lg:text-lg font-semibold text-slate-900">
              Process Automation
            </h3>
            <p className="mt-1 text-sm text-slate-500 leading-relaxed">
              Replace manual spreadsheets and emails with automated workflows, approvals,
              notifications, and rule-based actions so your team focuses on high‑value work
              instead of repetitive tasks.
            </p>
          </div>

          <div>
            <Cloud className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 lg:text-lg font-semibold text-slate-900">
              Cloud Migration
            </h3>
            <p className="mt-1 text-sm text-slate-500 leading-relaxed">
              Move from legacy servers to secure AWS/Azure cloud setups with backups,
              monitoring, and scaling so your applications stay fast, reliable, and ready
              for future growth.
            </p>
          </div>
        </div>

        {/* CTA button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={whatsappMessage}
            className="group inline-flex items-center bg-gradient-to-br from-[#0e1540] via-[#06256e] to-[#1d3fae] text-white pt-2 pb-2 pl-20 pr-20 rounded-4xl font-medium transform transition-all duration-300 hover:from-[#1d3fae] hover:via-[#2563eb] hover:to-[#4f46e5] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            Get Started
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom area */}
      <div className="px-6 py-6 md:px-10 lg:px-24">
        <div className="mx-auto flex max-w-6xl flex-col  gap-12 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* Left text column */}
          <div className="flex h-full items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                Complete Transformation Process
              </h2>

              <p className="lg:text-lg text-slate-500 max-w-md leading-relaxed mb-8">
                We discover your needs, design digital solutions, build modern systems,
                and continuously optimize them so your business keeps improving, not just
                at launch but over the long term.
              </p>

              {/* 4 Process Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Discovery & Planning
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Understand current systems, pain points, and goals, then create a
                      clear, phased roadmap aligned with your business priorities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Experience Design
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Map customer and internal user journeys, then design simple,
                      intuitive screens and flows that reduce friction at every step.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Development & Integration
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Implement secure, scalable backends and frontends, integrate with
                      your existing tools, and ensure data flows correctly between systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Launch & Optimization
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Go live with monitoring, collect feedback and usage data, and apply
                      regular improvements to stability, speed, and user experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-blue-600">40%</div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">
                    Faster Delivery
                  </div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-emerald-600">-60%</div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">
                    Manual Work
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right image card – image from top */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[260px] md:h-[320px] lg:h-[360px] w-full">
            <img
              className="w-full h-full object-cover object-top"
              src={digital}
              alt="digital transformation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationPage;
