import sunset from "../../../assets/sunset.jpg";
import "./clevermobi.css";


// import "./clevermobi.css"

export default function CleverMobiPage() {
  return (
    <main className="clevermobi-main">
      {/* Launch Quickly Section */}
      <section className="launch-section">
        <div className="launch-container">
          <h2 className="launch-title">Launch Quickly</h2>
          <p className="launch-description">
            MVNOs need to reach market fast to compete effectively. CleverMobi enables rapid deployment with
            pre-configured workflows, proven best practices, and seamless MVNE integration. Launch new mobile services
            in weeks instead of months with complete billing and customer management ready from day one.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <h3 className="feature-title">Flexible Product Management</h3>
            <p className="feature-description">
              Consumer MVNO success requires product flexibility and speed. Launch new pricing plans in minutes, design
              powerful discount campaigns effortlessly, and launch promotions in hours instead of weeks. Test market
              responses quickly and adopt offerings based on customer feedback without technical barriers.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 3v18" />
              </svg>
            </div>
            <h3 className="feature-title">Efficient Billing Operations</h3>
            <p className="feature-description">
              Billing complexity can overwhelm growing MVNOs. CleverMobi streamlines operations with smart invoicing,
              automated payment handling, and intelligent charging processes. Near real-time usage data ensures
              transparency. Customers receive timely, accurate bills while your team focuses on growth rather than
              billing reconciliation.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="feature-title">Customer Management</h3>
            <p className="feature-description">
              Comprehensive customer management tools handle the complete lifecycle from signup through service delivery
              and support. Self-service portals empower customers to manage accounts independently. Customer service
              representatives access complete information for efficient support. Automated workflows reduce manual
              effort and improve consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Seamless MVNE Integration Section */}
      <section className="mvne-section">
        <div className="mvne-content">
          <div className="mvne-image-wrapper">
         <img
            src={sunset}
            alt="Network tower at sunset"
           
            className="mvne-image"
            />


          </div>
          <div className="mvne-text-wrapper">
            <h2 className="mvne-title">Seamless MVNE Integration</h2>
            <p className="mvne-description">
              CleverMobi connects your MVNO platform directly to MVNE infrastructure from network to billing. This
              integration eliminates data synchronization headaches common with separate systems.
            </p>
            <button className="cta-button">CleverEnable MVNE</button>
          </div>
        </div>
      </section>

      {/* Scale Confidently Section */}
      <section className="scale-section">
        <div className="scale-container">
          <h2 className="scale-title">Scale Confidently</h2>
          <p className="scale-description">
            As your MVNO grows, CleverMobi scales effortlessly. The platform handles thousands of customers with the
            same efficiency as hundreds. Automated processes prevent operational bottlenecks. Add new products,
            channels, or markets without platform limitations constraining your ambitions.
          </p>
        </div>
      </section>
    </main>
  )
}
