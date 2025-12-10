import { useNavigate } from "react-router-dom";
import sunset from "../../../assets/develop.webp";
import development from "../../../data/development";
import HeroSection from "../HeroSection";

export default function DevelopmentPhilosophyPage() {
     const navigation =useNavigate();
   const handleNavigation=()=>{
    navigation('/contact');
   }
  return (
    <>
    <HeroSection {...development}/>
    <main className="w-full overflow-x-hidden bg-white text-[#1a1a1a] font-sans">

      {/* Customer-Driven Development Section */}
      <section className="w-full py-5 lg:py-10 px-4 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Customer-Driven Development</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            PMRG Solution's roadmap is shaped by real operator needs, not theoretical requirements.
            We listen to MVNO and MNO partners identifying pain points and opportunities. Feature
            development addresses actual business challenges our customers face. Regular feedback
            loops ensure we're building valuable capabilities that deliver tangible benefits.
          </p>
        </div>
      </section>

      {/* Development Practices Section (NEW DESIGN LIKE FIRST IMAGE) */}
      <section className="w-full py-5 lg:py-10 px-4 bg-[#ffffff]">
        <div className="max-w-[1200px] mx-auto bg-[#f4f9e9] rounded-3xl p-10 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Agile Development */}
          <div>
            <div className="w-10 h-10 text-[#6fbf2b] mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mb-3">Agile Development Practices</h3>

            <p className="text-gray-700 leading-relaxed">
              Modern agile methodologies enable rapid, iterative development. Short development cycles
              deliver features quickly. Continuous testing ensures quality throughout development.
              Regular releases provide frequent improvements. Agile approach allows adapting to changing
              requirements without lengthy waterfall processes that delay value delivery.
            </p>
          </div>

          {/* Quality First */}
          <div>
            <div className="w-10 h-10 text-[#6fbf2b] mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mb-3">Quality First</h3>

            <p className="text-gray-700 leading-relaxed">
              Quality is non-negotiable at PMRG Solution. Comprehensive automated testing catches issues
              early. Code reviews ensure maintainability and standards compliance. Performance testing
              validates scalability. Security assessments identify vulnerabilities. Quality gates prevent
              substandard code from reaching production. Investment in quality prevents costly problems
              later.
            </p>
          </div>

          {/* Modern Technology Stack */}
          <div>
            <div className="w-10 h-10 text-[#6fbf2b] mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <path d="M2 17h20" />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mb-3">Modern Technology Stack</h3>

            <p className="text-gray-700 leading-relaxed">
              PMRG Solution uses current, well-supported technologies chosen for reliability and performance.
              Private Cloud-native architecture provides scalability. Microservices design enables independent
              component evolution. API-first approach ensures integration flexibility. Modern stack ensures
              platform remains supportable and competitive long-term.
            </p>
          </div>

        </div>
      </section>

      {/* Continuous Improvement Section */}
      <section className="w-full py-5 lg:py-10 px-4 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Continuous Improvement</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Development never stops with initial launch. PMRG Solution continuously enhances the platform
            based on operational learnings, customer feedback, technology evolution, and competitive
            developments. Regular improvements keep the platform current and competitive. Customers benefit
            from ongoing innovation without major upgrade projects.
          </p>
        </div>
      </section>

      {/* Experienced Team Section */}
      <section className="w-full py-5 lg:py-10 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          {/* <div className="w-full max-w-[450px] mx-auto rounded-xl overflow-hidden"> */}
          <div className="w-full">
            <img
              src={sunset}
              alt="Network tower at sunset"
              // className="w-full h-[450px] rounded-xl"
              className="w-full h-auto object-contain rounded-[32px]"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Experienced Team</h2>

            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              PMRG Solution's development team combines software engineering expertise with telecommunications
              domain knowledge. Developers understand billing complexity, provisioning requirements, and
              regulatory constraints. This dual expertise produces software that works elegantly for mobile
              operator use cases rather than generic solutions requiring extensive customization.
              <br /><br />
              Does this seem like an environment you would like to work in? Join our team! We are constantly
              looking for new people to work and grow with us!
            </p>

            <button onClick={handleNavigation} className="bg-[#b8d920] text-[#1a1a1a] font-semibold py-3 px-6 rounded-full hover:bg-[#a3c41a] transition">
              Check out our career opportunities
            </button>
          </div>

        </div>
      </section>

    </main>
    </>
  );
}
