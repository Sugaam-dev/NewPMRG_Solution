import React, { useState, useEffect, useRef } from "react";
import implImg1 from "../../../assets/implement.jpg";
import implImg2 from "../../../assets/lunchsupport.jpg";
import HeroSection from "../HeroSection";
import implementationapproachdata from "../../../data/implementationapproachdata";

export default function ImplementationApproach() {
  const [activeStep, setActiveStep] = useState(1);
  const intervalRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Discovery and Planning",
      description:
        "Implementation begins with thorough discovery to understand your business model, existing systems and data, regulatory requirements, timeline constraints, and success criteria. Detailed planning identifies tasks, dependencies, risks, and milestones, so expectations are realistic and aligned.",
    },
    {
      id: 2,
      title: "System Configuration",
      description:
        "System configuration tailors the platform to your specific requirements, including product catalog setup, workflows, and integration points. Branding and customization reflect your identity, turning a generic platform into your solution.",
    },
    {
      id: 3,
      title: "Data Migration",
      description:
        "For operators migrating from existing systems, data migration is critical. PMRG Solution supports migration through data mapping and transformation, migration tool development, validation ensuring accuracy, phased migration reducing risk, and parallel operation during transition.",
    },
    {
      id: 4,
      title: "Integration and Testing",
      description:
        "Comprehensive integration and testing ensures everything works together. End-to-end and performance testing validate real-world usage, while user acceptance testing confirms the solution meets expectations before launch.",
    },
  ];

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [steps.length]);

  const handleStepClick = (stepId) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveStep(stepId);

    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev % steps.length) + 1);
      }, 5000);
    }, 100);
  };

  return (
    <>
      <HeroSection {...implementationapproachdata} />

      <main className="w-full bg-white text-[#1a1f1c] overflow-hidden">
        {/* IMPLEMENTATION SECTION */}
        <section className="w-full px-6 py-5 lg:py-10 ">
          <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* LEFT CONTENT */}
            <div className="relative">
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-tight font-bold mb-4 md:mb-6">
                Implementation
              </h2>

              <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2b2f2c] mb-8 md:mb-10">
                We guide you through the process of implementation and help you
                every step of the way.
              </p>

              {/* Steps */}
              <div className="relative space-y-8 md:space-y-10">
                {steps.map((step) => {
                  const isActive = activeStep === step.id;
                  return (
                    <div
                      key={step.id}
                      className="flex items-stretch space-x-4"
                    >
                      {/* Step circle + line */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <button
                          onClick={() => handleStepClick(step.id)}
                          className={`w-8 h-8 flex items-center justify-center rounded-full border-3 font-bold text-sm transition-all duration-300 ${
                            isActive
                              ? "bg-blue-500 border-blue-500 text-white shadow-lg"
                              : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400"
                          }`}
                          style={{ minHeight: "32px" }}
                        >
                          {step.id}
                        </button>

                        {/* Line fills full text height */}
                        {isActive && (
                          <div className="flex-1 w-[3px] bg-blue-500 rounded-full mt-2 animate-grow-line" />
                        )}
                      </div>

                      {/* Step content */}
                      <div className="flex-1 pt-1">
                        <p
                          onClick={() => handleStepClick(step.id)}
                          className={`font-bold text-base mb-3 cursor-pointer transition-colors duration-300 ${
                            isActive ? "text-blue-600 text-lg" : "text-gray-800"
                          }`}
                        >
                          {step.title}
                        </p>

                        {isActive && (
                          <div className="text-sm leading-relaxed text-gray-700 pl-1 max-w-[90%] animate-slideIn">
                            {step.description}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <img
                src={implImg1}
                alt="Implementation"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* TRAINING & DOCUMENTATION */}
        <section className="w-full px-6 py-5 lg:py-10 text-center">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-tight font-bold mb-4 md:mb-6">
              Training and Documentation
            </h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2b2f2c]">
              Successful adoption requires proper training and documentation.
              Operations team training covers daily tasks. Customer service
              training ensures support readiness. Administrator training enables
              system management. Comprehensive documentation provides ongoing
              reference so teams can operate confidently from day one.
            </p>
          </div>
        </section>

        {/* LAUNCH SUPPORT */}
        <section className="w-full px-6 py-5 lg:py-10">
          <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] order-2 lg:order-1">
              <img
                src={implImg2}
                alt="Launch Support"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-tight font-bold mb-4 md:mb-6">
                Launch Support
              </h2>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2b2f2c] max-w-[550px]">
                PMRG Solution provides intensive support during launch. On-site
                or remote assistance is available during go-live, with close
                monitoring to detect and resolve issues quickly. Post-launch
                reviews identify improvements and ensure a smooth transition to
                live operations.
              </p>
            </div>
          </div>
        </section>

        {/* ONGOING PARTNERSHIP */}
        <section className="w-full px-6 py-5 lg:py-10 text-left lg:text-center">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-tight font-bold mb-4 md:mb-6">
              Ongoing Partnership
            </h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-[#2b2f2c]">
              Implementation doesn't end at launch. PMRG Solution maintains an
              ongoing partnership through regular check-ins, continuous
              optimization, support for new requirements, and platform updates
              and enhancements. The focus is on long-term success beyond the
              initial rollout.
            </p>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes grow-line {
          from {
            transform: scaleY(0);
            transform-origin: top;
          }
          to {
            transform: scaleY(1);
            transform-origin: top;
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-grow-line {
          animation: grow-line 5s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.7s ease-out forwards;
        }
      `}</style>
    </>
  );
}
