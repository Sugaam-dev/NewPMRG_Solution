import React from "react";
import "./home.css";
import img from "../../../assets/sunset.jpg";

/* ---------- Small SVG icons ---------- */
const IconCheck = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IconChart = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8BC34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 3v18h18" />
    <path d="M7 13V8" />
    <path d="M12 16V6" />
    <path d="M17 10v6" />
  </svg>
);

const IconClock = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8BC34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

/* ---------- Page Component ---------- */
export default function Home() {
  return (
    <main className="home-page">

      {/* ================= SECTION 1 — HERO (green band) ================= */}
      <section className="hero band-green">
        <div className="wrap hero-grid">
          <div className="hero-left">
            <h1 className="heading hero-heading">Modern BSS for Network Operators</h1>
            <p className="lead hero-lead">
              Mobile network operators seeking to replace legacy business support systems find
              CleverMobi's modern platform delivers capabilities, flexibility, and speed impossible
              with older systems. Built without legacy constraints, CleverMobi transforms MNO
              operations and competitive agility.
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-image">
              <img src={img} alt="Hero visual" />
            </div>

            <svg className="hero-blob" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden>
              <path d="M600,100 C520,220 480,260 420,300 C360,340 240,380 120,320 C0,260 40,120 120,80 C200,40 360,-10 460,40 C560,90 640,-20 600,100 Z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 — Title band: Automated invoicing & payments ================= */}
      <section className="section title-band">
        <div className="wrap center narrow">
          <h2 className="heading section-title">Automated invoicing &amp; payments</h2>
          <p className="lead section-sub">Streamline billing with smart invoicing, payment handling, and automated pricing logic.</p>
        </div>
      </section>

      {/* ================= SECTION 3 — three-feature rounded ivory card ================= */}
      <section className="section">
        <div className="wrap features-wrap">
          <div className="features-card">
            <article className="feature">
              <div className="feature-icon"><IconCheck /></div>
              <h3 className="feature-title">Automated Dunning &amp; Communication</h3>
              <p className="feature-copy">Automate dunning, retries, notifications and customer messaging with rules-based flows.</p>
            </article>

            <article className="feature">
              <div className="feature-icon"><IconClock /></div>
              <h3 className="feature-title">Seamless Payment Integration</h3>
              <p className="feature-copy">Integrate PSPs and local payment methods with secure tokenization and reconciliation.</p>
            </article>

            <article className="feature">
              <div className="feature-icon"><IconChart /></div>
              <h3 className="feature-title">Cashback Loyalty Wallet</h3>
              <p className="feature-copy">Reward customers automatically with wallet balances or cashbacks for flexible promotions.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4 — Seamless, Real-Time Provisioning (left text, right image) ================= */}
      <section className="section">
        <div className="wrap split">
          <div className="split-copy">
            <h3 className="heading small">Seamless, Real-Time Provisioning &amp; Control</h3>
            <p className="paragraph">
              CleverMobi's customizable provisioning orchestrates realtime services across IMS, cloud and telco stacks.
              Integrations with network elements enable automated service activation and monitoring.
            </p>
          </div>

          <div className="split-image">
            <img src={img} alt="Provisioning visual" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 5 — Green Pricing Band with form-like fields + mini-features ================= */}
      <section className="section band-green pricing-band">
        <div className="wrap narrow center">
          <h2 className="heading">Flexible Pricing, Unlimited Possibilities</h2>
          <p className="lead small">Configure flexible pricing and discounts using simple expressions. Launch offers quickly and monitor results.</p>

          <div className="pricing-form">
            <label className="field">
              <div className="field-label">Name</div>
              <div className="field-value">First 12 months 50% discount on 2 year bundle</div>
            </label>

            <label className="field">
              <div className="field-label">Description</div>
              <pre className="field-code">{`1 bundleDuration.y == 2 && period < 13 ?
"first 12 months 50% discount" : ""`}</pre>
            </label>

            <label className="field">
              <div className="field-label">Amount</div>
              <pre className="field-code">{`1 bundleDuration.y == 2 && period < 13 ?
bundle.getPrice() * -0.5 : 0`}</pre>
            </label>
          </div>

          <div className="pricing-minis">
            <div className="mini">
              <div className="mini-icon"><IconCheck /></div>
              <div className="mini-title">Intuitive Version Control</div>
              <div className="mini-copy">Track pricing changes and roll back easily across environments.</div>
            </div>

            <div className="mini">
              <div className="mini-icon"><IconChart /></div>
              <div className="mini-title">Powerful Discount Engine</div>
              <div className="mini-copy">Compose conditional discounts and promotions with programmable rules.</div>
            </div>

            <div className="mini">
              <div className="mini-icon"><IconClock /></div>
              <div className="mini-title">Reward Customer Advocacy</div>
              <div className="mini-copy">Automate loyalty incentives and referral rewards to boost retention.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6 — CRM promo (center + image) ================= */}
      <section className="section">
        <div className="wrap center narrow">
          <h3 className="heading small">Use the best CRM for online marketing</h3>
          <p className="lead small">Combine CleverMobi's customer data with CRM tools to run campaigns that convert.</p>

          <div className="crm-graphic">
            <img src={img} alt="CRM mockup" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7 — Business insights (dark band) ================= */}
      <section className="section band-dark insights-band">
        <div className="wrap split reverse">
          <div className="insight-image">
            <img src={img} alt="Analytics" />
          </div>

          <div className="insight-copy">
            <div className="insight-icon"><IconChart /></div>
            <h3 className="heading small white">Business insights</h3>
            <p className="paragraph white">Leverage dashboards and analytics to measure revenue, churn and product performance across your business.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8 — Testimonial ================= */}
      <section className="section">
        <div className="wrap narrow">
          <div className="testimonial-card">
            <div className="testimonial-copy">
              <p className="testimonial-quote">"The product gave us powerful pricing strategy and instant impact on our revenues."</p>
            </div>
            <div className="testimonial-photo">
              <img src={img} alt="Customer" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9 — Team intro ================= */}
      <section className="section">
        <div className="wrap center narrow">
          <h3 className="heading small">A team of passionate and skilled IT professionals</h3>
          <p className="paragraph">We deliver solutions that scale — from product design to operations, our experts bring real-world telco experience.</p>
        </div>
      </section>

      {/* ================= SECTION 10 — Gallery grid ================= */}
      <section className="section">
        <div className="wrap gallery-wrap">
          <div className="gallery-grid">
            <div className="g-item g-large green-flag">Eindhoven</div>
            <div className="g-item"><img src={img} alt="gallery1" /></div>
            <div className="g-item"><img src={img} alt="gallery2" /></div>
            <div className="g-item tall"><img src={img} alt="gallery3" /></div>
            <div className="g-item"><img src={img} alt="gallery4" /></div>
            <div className="g-item badge">ISO 27001</div>
          </div>
        </div>
      </section>

    </main>
  );
}
