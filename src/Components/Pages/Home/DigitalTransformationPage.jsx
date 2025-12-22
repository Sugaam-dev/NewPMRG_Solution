// DigitalTransformationPage.jsx
import React from "react";
import { Smartphone, Zap, Cloud, ArrowRight, CheckCircle } from "lucide-react";
import digital from "../../../assets/digital-transformation.jpg"
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
      <div className="px-6 py-16 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
          Digital Transformation Services
        </h2>

        <p className="mx-auto max-w-2xl lg:text-lg text-slate-500">
          PMRG Solution modernizes your business operations with custom web applications, intelligent process automation, 
          secure cloud infrastructure, and seamless system integrations that drive efficiency and growth.
        </p>

        {/* Cards strip - Enhanced */}
        <div className="mt-10 rounded-2xl bg-blue-50 px-6 py-8 md:px-12 md:py-10 grid gap-6 md:grid-cols-3 text-left">
          <div>
            <Smartphone className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 lg:text-lg font-semibold text-slate-900">
              Modern Web Apps
            </h3>
            <p className="mt-1 text-sm text-slate-500 leading-relaxed">
              Fully responsive websites, customer portals, and admin dashboards with modern UI/UX and API integrations.
            </p>
          </div>

          <div>
            <Zap className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 lg:text-lg font-semibold text-slate-900">
              Process Automation
            </h3>
            <p className="mt-1 text-sm text-slate-500 leading-relaxed">
              Eliminate manual work with workflow automation, approval systems, notifications, and CRM/ERP integrations.
            </p>
          </div>

          <div>
            <Cloud className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 lg:text-lg font-semibold text-slate-900">
              Cloud Migration
            </h3>
            <p className="mt-1 text-sm text-slate-500 leading-relaxed">
              Secure AWS/Azure cloud infrastructure with auto-scaling, backup systems, and 99.9% uptime guarantees.
            </p>
          </div>
        </div>

        {/* Enhanced gradient buttons - vice versa */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={whatsappMessage} className="group inline-flex items-center bg-gradient-to-br from-[#0e1540] via-[#06256e] to-[#1d3fae] text-white pt-2 pb-2 pl-20 pr-20 rounded-4xl font-medium transform transition-all duration-300 hover:from-[#1d3fae] hover:via-[#2563eb] hover:to-[#4f46e5] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/50">
            Get Started <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
         
        </div>
      </div>

      {/* Bottom area - Enhanced with 4 points */}
      <div className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* Left text column */}
          <div className="flex h-full items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                Complete Transformation Process
              </h2>

              <p className="lg:text-lg text-slate-500 max-w-md leading-relaxed mb-8">
                We discover your needs, design digital solutions, build modern systems, and optimize for continuous growth.
              </p>

              {/* 4 Process Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Discovery & Planning</h4>
                    <p className="text-sm text-slate-500 mt-1">Business analysis, roadmap creation, and stakeholder alignment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Experience Design</h4>
                    <p className="text-sm text-slate-500 mt-1">Wireframes, prototypes, and customer journey optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Development & Integration</h4>
                    <p className="text-sm text-slate-500 mt-1">Full-stack implementation with existing system integration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Launch & Optimization</h4>
                    <p className="text-sm text-slate-500 mt-1">Deployment, monitoring, and continuous performance improvement</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-blue-600">40%</div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">Faster Delivery</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-emerald-600">-60%</div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">Manual Work</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right image card */}
          <div className="rounded-2xl overflow-hidden shadow-md">
       
      
            <img className="w-full h-full object-cover" src={digital} alt="digital transformation" />
            </div>
      
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationPage;
