import React from "react";
import "./mnos.css";
import sunset from "../../../assets/sunset.jpg";

/* ============================= */
/*  INLINE SVG ICON COMPONENTS   */
/* ============================= */

// Icon 1 — Full Technology Support (your uploaded icon style)
const IconTech = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4CAF50"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
  </svg>
);

// Icon 2 — Operational Efficiency
const IconEfficiency = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4CAF50"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="21 11 21 7 17 7" />
  </svg>
);

// Icon 3 — Product Innovation Speed
const IconSpeed = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4CAF50"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export default function Mnos() {
  return (
    <main className="cm-page">

      {/* ================================ */}
      {/* REPLACE LEGACY SYSTEMS SECTION   */}
      {/* ================================ */}

      <section className="cm-section">
        <div className="cm-section-inner">
          
          <div className="cm-centered">
            <h2 className="cm-section-title">Replace Legacy Systems</h2>

            <p className="cm-paragraph cm-section-lead">
              Many MNOs operate on decades-old BSS platforms with accumulated
              technical debt, limited flexibility, and high maintenance costs.
              CleverMobi provides a modern alternative built from scratch.
              Migrate from legacy systems to gain agility, reduce costs, and
              enable innovation previously impossible with outdated
              infrastructure.
            </p>
          </div>

          {/* =============== FEATURES =============== */}

          <div className="cm-features">

            {/* FEATURE 1 */}
            <div className="cm-feature">
              <div className="cm-feature-icon">
                <IconTech />
              </div>

              <h3 className="cm-feature-title">Full Technology Support</h3>

              <p className="cm-paragraph feature-text">
                CleverMobi natively supports modern technologies including 5G
                service plans and billing, VoLTE and advanced voice services,
                and eSIM provisioning and management. Legacy platforms struggle
                with these technologies through complex workarounds.
              </p>
            </div>

            {/* FEATURE 2 */}
            <div className="cm-feature">
              <div className="cm-feature-icon">
                <IconEfficiency />
              </div>

              <h3 className="cm-feature-title">Operational Efficiency</h3>

              <p className="cm-paragraph feature-text">
                Modern architecture dramatically improves operational efficiency.
                Automated workflows reduce manual processes and errors.
                Self-service capabilities deflect support volume.
              </p>
            </div>

            {/* FEATURE 3 */}
            <div className="cm-feature">
              <div className="cm-feature-icon">
                <IconSpeed />
              </div>

              <h3 className="cm-feature-title">Product Innovation Speed</h3>

              <p className="cm-paragraph feature-text">
                CleverMobi enables launching new pricing plans, bundled
                offerings, or promotional campaigns in hours instead of weeks or
                months.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================================ */}
      {/*        MIGRATION SUPPORT         */}
      {/* ================================ */}

      <section className="cm-section">
        <div className="cm-section-inner migration-grid">
          
          <div className="cm-image-card">
            <img src={sunset} alt="Migration Support" />
          </div>

          <div className="cm-right-col">
            <h3 className="cm-section-title">Migration Support</h3>

            <p className="cm-paragraph">
              Migrating from legacy BSS platforms is complex but manageable
              with proper planning and execution. CleverMobi's experienced team
              supports the entire migration process including detailed planning,
              risk mitigation, phased migration, data migration, validation, and
              parallel operation during transition periods ensuring continuity.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
