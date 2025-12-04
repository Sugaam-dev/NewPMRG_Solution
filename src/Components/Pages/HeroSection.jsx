import React from "react";
import heroImg from "../../assets/clevermobi.png"; // your image

const HeroSection = () => {
  return (
    <section className="relative overflow-visible bg-[#0b6b1f]">
      {/* 100vh hero */}
      <div className="mx-auto flex h-screen max-w-7xl flex-col items-center gap-10 px-4 py-12 md:grid md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        {/* Left content */}
        <div className="text-left text-white">
          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Business software for
            <br />
            mobile operators
          </h1>

          <p className="mb-6 max-w-xl text-base leading-relaxed md:text-lg">
            CleverMobi introduces a cutting‑edge Business Support System (BSS)
            built exclusively for mobile operators. It empowers you to launch
            price plans in minutes, design any discount or campaign, and
            accelerate growth and innovation.
          </p>

          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-md hover:bg-slate-100">
            Get started
          </button>
        </div>

        {/* Right: foreground image card + SVG background shape */}
        <div className="relative flex h-[360px] w-full items-center justify-center md:h-[500px]">
          {/* SVG back layer that overflows below the hero */}
          <svg
            className="absolute bottom-[-120px] right-4 h-[300px] w-[85%] md:right-10 md:h-[340px] md:w-[80%]"
            viewBox="0 0 400 260"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* big rounded rectangle; tweak rx, colors, gradients as you like */}
            <rect
              x="0"
              y="0"
              width="400"
              height="260"
              rx="80"
              fill="#158732"
            />
          </svg>

          {/* Front white image card, offset up/left */}
          <div className="relative z-10 h-[300px] w-[85%] translate-x-[-20px] translate-y-[-20px] overflow-hidden rounded-[60px] bg-white shadow-2xl md:h-[360px] md:w-[80%] md:translate-x-[-30px] md:translate-y-[-30px]">
            <img
              src={heroImg}
              alt="People working at computers"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
