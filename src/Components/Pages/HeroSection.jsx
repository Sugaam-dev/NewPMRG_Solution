// src/components/HeroSection.jsx
import React from "react";

const HeroSection = ({
  image,
  title,
  highlight,
  description,
  buttonLabel,
  buttonHref,
}) => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-br from-[#0b1f6b] via-[#020617] to-[#030712]
        pt-16 md:pt-10
      "
    >
      <style jsx>{`
        .hero-shapes {
          position: absolute;
          width: clamp(280px, 55vw, 640px);
          height: clamp(220px, 56vw, 420px);
          right: clamp(-10px, 8vw, 0px);
          top: clamp(10vh, 18vh, 20vh);
          z-index: 1;
        }

        /* base blob – matches section background blues */
        .shape-bg {
          background: radial-gradient(
            circle at 30% 30%,
            #2563eb,
            #0b1f6b 55%,
            #020617 100%
          );
          height: 100%;
          width: 100%;
          border-top-left-radius: 55%;
          border-bottom-left-radius: 55%;
          filter: blur(20px);
          position: absolute;
          opacity: 0.85;
        }

        /* top-right blob – bright blue accent */
        .shape-float1 {
          background: radial-gradient(
            circle at 20% 80%,
            #60a5fa 0%,
            #3b82f6 45%,
            #1d4ed8 100%
          );
          width: clamp(150px, 34vw, 280px);
          height: clamp(150px, 34vw, 280px);
          border-radius: 50%;
          position: absolute;
          top: 0%;
          right: 10%;
          filter: blur(22px);
          animation: float1 5.5s ease-in-out infinite alternate;
          opacity: 0.9;
        }

        /* left blob – cyan/blue mix */
        .shape-float2 {
          background: radial-gradient(
            circle at 80% 20%,
            #38bdf8 0%,
            #0ea5e9 45%,
            #1d4ed8 100%
          );
          width: clamp(180px, 38vw, 320px);
          height: clamp(180px, 38vw, 320px);
          border-radius: 50%;
          position: absolute;
          top: 38%;
          left: 0%;
          filter: blur(24px);
          animation: float2 6s ease-in-out infinite alternate-reverse;
          opacity: 0.9;
        }

        /* middle organic blob – soft highlight */
        .shape-float3 {
          background: linear-gradient(
            135deg,
            #e0f2fe 0%,
            #60a5fa 45%,
            #1d4ed8 100%
          );
          width: clamp(120px, 30vw, 230px);
          height: clamp(120px, 30vw, 230px);
          border-radius: 42% 60% 52% 70%;
          position: absolute;
          bottom: 10%;
          right: 30%;
          filter: blur(19px);
          animation: pulseFloat 4.8s ease-in-out infinite;
          opacity: 0.9;
        }

        @keyframes float1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-12%, 10%) scale(1.1);
          }
        }

        @keyframes float2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(10%, -10%) scale(1.12);
          }
        }

        @keyframes pulseFloat {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-5%, 4%) scale(1.16);
          }
        }

        @media (max-width: 640px) {
          .hero-shapes {
            width: clamp(260px, 88vw, 360px);
            height: clamp(210px, 68vw, 300px);
            right: 0;
            top: 8vh;
          }
        }
      `}</style>

      <div
        className="
          mx-auto flex min-h-[100vh] max-w-[1440px]
          flex-col items-center gap-8
          px-4 py-8
          md:grid md:min-h-[100vh] md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-16
          relative
        "
      >
        {/* LEFT: text */}
        <div className="order-2 w-full text-left text-white md:order-1 z-20">
          <h1 className="mb-4 text-[22px] font-semibold leading-snug md:text-5xl md:leading-tight lg:text-6xl">
            {title}
            <br />
            {highlight && (
              <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-cyan-200 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h1>
          <p className="mb-5 max-w-md text-[13px] leading-relaxed text-slate-100 md:max-w-xl md:text-lg">
            {description}
          </p>
          {buttonLabel && buttonHref && (
            <a href={buttonHref}>
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-md transition hover:bg-slate-100">
                {buttonLabel}
              </button>
            </a>
          )}
        </div>

        {/* RIGHT: image + shapes */}
        <div className="order-1 relative flex w-full items-center justify-center md:order-2 md:h-[460px]">
          <div className="hero-shapes">
            <div className="shape-bg" />
            <div className="shape-float1" />
            <div className="shape-float2" />
            <div className="shape-float3" />
          </div>

          <div className="relative z-30 h-[220px] w-full overflow-hidden rounded-[32px] bg-white shadow-2xl md:h-[440px] md:w-full md:rounded-[56px]">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
