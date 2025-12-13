
import { RefreshCw, ShieldCheck, MonitorCog } from "lucide-react";
import sunset from "../../../assets/combined.jpg";
import development from "../../../data/development";
import HeroSection from "../HeroSection";

export default function DevelopmentPhilosophyPage() {
  
 const handleNavigation = () => {
 window.open("https://wa.me/7722017100", "_blank");
};


  return (
    <>
      <HeroSection {...development} />

      <main className="w-full overflow-x-hidden bg-white text-[#1a1a1a] font-sans">
        {/* Customer-Driven Development */}
        <section className="w-full py-5 sm:py-8 lg:py-10 px-4 sm:px-6 md:px-20 bg-white">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              Customer-Driven Development
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
              PMRG Solution&rsquo;s roadmap is shaped by real operator needs, not
              theoretical requirements. Feedback from MVNO and MNO partners
              highlights pain points and opportunities, ensuring feature
              development addresses actual business challenges and delivers
              measurable value.
            </p>
          </div>
        </section>

        {/* Development Practices – 3 cards, blue theme */}
        <section className="w-full py-5 sm:py-8 lg:py-10 px-4 sm:px-6 md:px-20 bg-white">
          <div className="max-w-[1200px] mx-auto bg-slate-900/5 rounded-3xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {/* Agile Development */}
            <div>
              <div className="w-11 h-11 mb-4 flex items-center justify-center rounded-full bg-slate-900/5 text-sky-500">
                <RefreshCw size={24} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Agile Development Practices
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Modern agile methods enable rapid, iterative delivery. Short
                cycles ship features quickly, continuous testing protects
                quality, and frequent releases keep the platform evolving while
                adapting to changing requirements without long waterfall delays.
              </p>
            </div>

            {/* Quality First */}
            <div>
              <div className="w-11 h-11 mb-4 flex items-center justify-center rounded-full bg-slate-900/5 text-sky-500">
                <ShieldCheck size={24} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Quality First
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Comprehensive automated tests, code reviews, performance checks,
                and security assessments keep quality non‑negotiable. Strict
                quality gates prevent weak code from reaching production and
                avoid costly incidents later.
              </p>
            </div>

            {/* Modern Technology Stack */}
            <div>
              <div className="w-11 h-11 mb-4 flex items-center justify-center rounded-full bg-slate-900/5 text-sky-500">
                <MonitorCog size={24} strokeWidth={2.2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Modern Technology Stack
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                A private cloud‑native, microservices‑based, API‑first
                architecture ensures scalability and integration flexibility.
                Using current, well‑supported technologies keeps the platform
                performant and sustainable long term.
              </p>
            </div>
          </div>
        </section>

        {/* Continuous Improvement */}
        <section className="w-full py-5 sm:py-8 lg:py-10 px-4 sm:px-6 md:px-20 bg-white">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              Continuous Improvement
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
              PMRG Solution evolves continuously based on operations, customer
              input, technology trends, and competition. Regular, incremental
              improvements keep the platform current and innovative without
              disruptive, large‑scale upgrade projects.
            </p>
          </div>
        </section>

        {/* Experienced Team – text first on mobile */}
        <section className="w-full py-5 sm:py-8 lg:py-10 px-4 sm:px-6 md:px-20 bg-white">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* TEXT (mobile first) */}
            <div className="order-1 md:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
                Experienced Team
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 mb-6">
                PMRG Solution&rsquo;s engineers blend software expertise with
                telecommunications domain knowledge. Deep understanding of
                billing, provisioning, and regulatory constraints leads to
                software that fits mobile operator use cases without excessive
                customization. <br />
                <br />
                Does this sound like an environment you would like to work in?
                Join the team; PMRG Solution is always looking for people to
                grow with the platform.
              </p>
              <button
                onClick={handleNavigation}
                className="bg-slate-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-slate-800 transition"
              >
                Check out our career opportunities
              </button>
            </div>

            {/* IMAGE (mobile below) */}
            <div className="order-2 md:order-2 w-full">
              <img
                src={sunset}
                alt="Network tower at sunset"
                className="w-full h-auto object-contain rounded-[32px] shadow-[0_20px_40px_rgba(15,23,42,0.25)]"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
