import sunset from "../../assets/sunset.jpg";
import "./developmentphilosophypage.css"

export default function DevelopmentPhilosophyPage() {
  return (
    <main className="clevermobi-main">
      {/* Built for Mobile Operators Section - REMOVED PER REQUEST */}

      {/* Customer-Driven Development Section */}
      <section className="customer-development-section">
        <div className="customer-development-container">
          <h2 className="section-title">Customer-Driven Development</h2>
          <p className="section-description">
            CleverMobi's roadmap is shaped by real operator needs, not theoretical requirements. We listen to MVNO and
            MNO partners identifying pain points and opportunities. Feature development addresses actual business
            challenges our customers face. Regular feedback loops ensure we're building valuable capabilities that
            deliver tangible benefits.
          </p>
        </div>
      </section>

      {/* Development Practices Section */}
      <section className="practices-section">
        <div className="practices-grid">
          <div className="practice-card">
            <div className="practice-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="practice-title">Agile Development Practices</h3>
            <p className="practice-description">
              Agile methodologies enable rapid, iterative development cycles delivering better value quickly. Continuous
              testing delivers features rapidly and adoption swiftly. Continuous releases provide frequent improvements.
              Agile approach allows adapting to changing requirements without lengthy waterfall processes that delay
              value delivery.
            </p>
          </div>

          <div className="practice-card">
            <div className="practice-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="practice-title">Quality First</h3>
            <p className="practice-description">
              Quality is non-negotiable at CleverMobi. Comprehensive security reviews guard against threats. Code
              reviews ensure maintainability and security. Early. Code reviews ensure maintainability and security.
              Rigorous automated testing validates functionality and performance. Robust monitoring provides live
              visibility at release into production. Investment in quality prevents costly problems later.
            </p>
          </div>

          <div className="practice-card">
            <div className="practice-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <path d="M2 17h20" />
              </svg>
            </div>
            <h3 className="practice-title">Modern Technology Stack</h3>
            <p className="practice-description">
              CleverMobi uses current, well-supported technology and practices enabling world-class engineering. Private
              Cloud native architecture provides scalability. Microservices design enables independent component
              evolution. API first approach ensures integration flexibility. Modern stack ensures platform remains
              dependable and competitive long-term.
            </p>
          </div>
        </div>
      </section>

      {/* Continuous Improvement Section */}
      <section className="continuous-section">
        <div className="continuous-container">
          <h2 className="section-title">Continuous Improvement</h2>
          <p className="section-description">
            Development never stops with initial launch. CleverMobi continuously enhances the platform based on
            operational learnings, customer feedback, technology evolution, and competitive developments. Regular
            improvements keep the platform current and competitive. Customers benefit from ongoing innovation without
            major upgrade projects.
          </p>
        </div>
      </section>

      {/* Experienced Team Section */}
      <section className="team-section">
        <div className="team-content">
           <div className="mvne-image-wrapper">
                  <img
                     src={sunset}
                     alt="Network tower at sunset"
                    
                     className="mvne-image"
                     />
         
         
                   </div>
          <div className="team-text-wrapper">
            <h2 className="team-title">Experienced Team</h2>
            <p className="team-description">
              CleverMobi's development team combines software engineering expertise with telecommunications domain
              knowledge. Developers understand billing complexity, provisioning requirements, and regulatory
              constraints. This dual expertise produces software that works elegantly for mobile operator use cases
              rather than generic solutions requiring extensive customization. Does this seem like an environment you
              would like to work in? Join our team! We are constantly looking for new people to work and grow with us!
            </p>
            <button className="team-cta-button">Check out our career opportunities</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
     
    </main>
  )
}
