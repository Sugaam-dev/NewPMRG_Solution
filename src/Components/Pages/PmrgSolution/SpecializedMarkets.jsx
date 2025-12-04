import React from "react";
import "./specialized-markets.css";
import heroImg from "../../../assets/sunset.jpg";
import cardImg from "../../../assets/sunset.jpg";
import mapImg from "../../../assets/sunset.jpg";

const IconIoT = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8BC34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
  </svg>
);

const IconModel = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8BC34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h18" />
    <path d="M6 21V7" />
    <path d="M18 21V7" />
    <path d="M10 12h4" />
  </svg>
);

const IconWholesale = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8BC34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 7h10" />
    <path d="M7 12h10" />
    <path d="M7 17h10" />
  </svg>
);

export default function SpecializedMarkets() {
  return (
    <main className="sm-page">

      {/* HERO — green block with blob */}
      <section className="sm-hero">
        <div className="sm-hero-inner">
          <div className="sm-hero-text">
            <h1 className="sm-hero-heading">Adapted for Unique Requirements</h1>
            <p className="sm-hero-paragraph">
              B2B operators, IoT service providers, and mobile operators with specialized requirements need flexible BSS platforms adapting to unique business models. CleverMobi’s modern architecture supports diverse use cases beyond traditional consumer mobile services.
            </p>
          </div>

          <div className="sm-hero-visual" aria-hidden>
            {/* decorative rounded image box to the right (keeps screenshot feel) */}
            <div className="sm-hero-image">
              <img src={heroImg} alt="Adapted for Unique Requirements" />
            </div>
            <svg className="sm-hero-blob" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden>
              <path d="M600,100 C520,220 480,260 420,300 C360,340 240,380 120,320 C0,260 40,120 120,80 C200,40 360,-10 460,40 C560,90 640,-20 600,100 Z" />
            </svg>
          </div>
        </div>
      </section>

      {/* IMAGE + B2B Mobile Services (image left, text right) */}
      <section className="sm-b2b">
        <div className="sm-b2b-inner">
          <div className="sm-b2b-image">
            <img src={cardImg} alt="B2B Mobile Services" />
          </div>

          <div className="sm-b2b-copy">
            <h2 className="sm-title">B2B Mobile Services</h2>
            <p className="sm-paragraph">
              Business customers require different capabilities than consumers. CleverMobi handles multi-user corporate accounts, hierarchical organizational structures, customized billing and invoicing, bulk management and provisioning, and corporate-specific reporting. Enterprise sales cycles and contract complexity are supported through flexible configuration matching B2B business models.
            </p>
          </div>
        </div>
      </section>

      {/* DARK band with 3 cards */}
      <section className="sm-dark-cards">
        <div className="sm-dark-inner">
          <div className="sm-logo-row">
            {/* <div className="sm-logo">CleverMobi</div> */}
          </div>

          <div className="sm-cards">
            <article className="sm-card">
              <div className="sm-card-icon"><IconIoT /></div>
              <h3 className="sm-card-title">IoT Connectivity Management</h3>
              <p className="sm-card-text">
                IoT services differ fundamentally from consumer mobile. CleverMobi supports millions of low-data device connections, specialized routing for machine-to-machine communication, device lifecycle management, and API-based provisioning for massive deployments.
              </p>
            </article>

            <article className="sm-card">
              <div className="sm-card-icon"><IconModel /></div>
              <h3 className="sm-card-title">Custom Business Models</h3>
              <p className="sm-card-text">
                Specialized operators often have unique business models requiring flexible billing and charging. CleverMobi’s architecture supports custom pricing, partner revenue sharing, reseller models, and non-standard product structures without platform constraints.
              </p>
            </article>

            <article className="sm-card">
              <div className="sm-card-icon"><IconWholesale /></div>
              <h3 className="sm-card-title">Wholesale and MVNO Enablement</h3>
              <p className="sm-card-text">
                Some operators provide wholesale services or enable MVNOs on their network. CleverMobi supports these models with partner management, wholesale rating and billing, and multi-tenant operations from a single platform.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL OPERATIONS (text left, image right) */}
      <section className="sm-international">
        <div className="sm-international-inner">
          <div className="sm-international-copy">
            <h2 className="sm-title">International Operations</h2>
            <p className="sm-paragraph">
              Operating across multiple countries introduces complexity. CleverMobi handles multi-currency billing and payments, country-specific tax and regulatory requirements, localized customer communications, and international roaming management. Expand geographically without rebuilding business support systems for each market.
            </p>
          </div>

          <div className="sm-international-image">
            <img src={mapImg} alt="International Operations" />
          </div>
        </div>
      </section>

      {/* Integration Flexibility (centered) */}
      <section className="sm-integration">
        <div className="sm-integration-inner">
          <h2 className="sm-integration-title">Integration Flexibility</h2>
          <p className="sm-paragraph sm-integration-text">
            Specialized operations often require unique integrations. CleverMobi’s open API architecture connects with industry-specific systems, custom applications, legacy infrastructure requiring continued operation, and partner or supplier systems. Integration flexibility ensures CleverMobi fits your ecosystem rather than forcing ecosystem changes.
          </p>
        </div>
      </section>

    </main>
  );
}
