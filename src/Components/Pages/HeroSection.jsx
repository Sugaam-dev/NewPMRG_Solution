// // src/components/HeroSection.jsx
// import React from "react";

// const HeroSection = ({
//   image,
//   title,
//   highlight,
//   description,
//   buttonLabel,
//   buttonHref,
//   showAnimation = true,
// }) => {
//   return (
//     //  <section className="relative overflow-hidden bg-gradient-to-br from-[#030712] via-[#020617] to-[#0b1f6b] pt-16 md:pt-10">
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f6b] via-[#020617] to-[#030712] pt-16 md:pt-10">
//       <style jsx>{`
//         .hero-shapes {
//           position: absolute;
//           width: clamp(280px, 55vw, 640px);
//           height: clamp(220px, 56vw, 420px);
//           right: clamp(-20px, -5vw, -10px);
//           bottom: clamp(-20px, -8vh, -15px);
//           z-index: 1;
//         }
//         .shape-bg { 
//           background: radial-gradient(circle at 30% 30%, #2563eb, #0b1f6b 55%, #020617 100%); 
//           height: 100%; width: 100%; 
//           border-top-left-radius: 55%; border-bottom-left-radius: 55%; 
//           filter: blur(20px); position: absolute; opacity: 0.85; 
//         }
//         .shape-float1 { 
//           background: radial-gradient(circle at 20% 80%, #60a5fa 0%, #3b82f6 45%, #1d4ed8 100%); 
//           width: clamp(150px, 34vw, 280px); height: clamp(150px, 34vw, 280px); 
//           border-radius: 50%; position: absolute; bottom: 0%; right: 5%; 
//           filter: blur(22px); animation: float1 5.5s ease-in-out infinite alternate; opacity: 0.9; 
//         }
//         .shape-float2 { 
//           background: radial-gradient(circle at 80% 20%, #38bdf8 0%, #0ea5e9 45%, #1d4ed8 100%); 
//           width: clamp(180px, 38vw, 320px); height: clamp(180px, 38vw, 320px); 
//           border-radius: 50%; position: absolute; bottom: 25%; left: 0%; 
//           filter: blur(24px); animation: float2 6s ease-in-out infinite alternate-reverse; opacity: 0.9; 
//         }
//         .shape-float3 { 
//           background: linear-gradient(135deg, #e0f2fe 0%, #60a5fa 45%, #1d4ed8 100%); 
//           width: clamp(120px, 30vw, 230px); height: clamp(120px, 30vw, 230px); 
//           border-radius: 42% 60% 52% 70%; position: absolute; top: 20%; right: 0%; 
//           filter: blur(19px); animation: pulseFloat 4.8s ease-in-out infinite; opacity: 0.9; 
//         }
//         @keyframes float1 { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(-12%, -10%) scale(1.1); } }
//         @keyframes float2 { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(8%, -8%) scale(1.12); } }
//         @keyframes pulseFloat { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(5%, -4%) scale(1.16); } }
        
//         /* MOBILE BELOW 1024px - IMAGE TOP, TEXT BOTTOM */
//         @media (max-width: 1023px) { 
//           .hero-shapes { 
//             width: clamp(260px, 88vw, 360px); 
//             height: clamp(210px, 68vw, 300px); 
//             right: -10px; bottom: -90px; 
//           }
//           .container { 
//             flex-direction: column !important; 
//             align-items: stretch !important;
//             gap: 3rem !important; 
//             padding: 3rem 1rem !important;
//           }
//           .image-section { 
//             order: 1 !important; 
//             width: 100% !important;
//             margin-bottom: 0 !important;
//           }
//           .text-section { 
//             order: 2 !important; 
//             width: 100% !important;
//             text-align: center !important;
//             padding: 0 1rem !important;
//           }
//           .text-section h1 { 
//             font-size: clamp(28px, 8vw, 36px) !important; 
//             line-height: 1.2 !important; 
//             margin-bottom: 1.5rem !important;
//           }
//           .text-section p { 
//             font-size: clamp(16px, 4.5vw, 18px) !important; 
//             line-height: 1.6 !important;
//             max-width: 100% !important;
//             margin: 0 auto 2rem auto !important;
//           }
//           .text-section button { 
//             display: block !important; 
//             margin: 0 auto !important; 
//             padding: 14px 40px !important; 
//             font-size: 16px !important;
//           }
//           .image-container { 
//             width: 95% !important; 
//             max-width: 400px !important;
//             margin: 0 auto !important;
//           }
//         }
//       `}</style>

//       <div className="mx-auto container flex min-h-screen max-w-[1440px] flex-col lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-8 lg:py-16 relative items-center gap-8 px-4 py-8">
        
//         {/* IMAGE SECTION - TOP ON MOBILE */}
//         {image && (
//           <div className="image-section relative flex w-full items-center justify-center lg:order-2 lg:w-[95%]">
//             {showAnimation && (
//               <div className="hero-shapes">
//                 <div className="shape-bg" />
//                 <div className="shape-float1" />
//                 <div className="shape-float2" />
//                 <div className="shape-float3" />
//               </div>
//             )}
//             <div className="image-container relative z-30 mx-auto flex w-full max-w-4xl overflow-hidden rounded-[32px] lg:rounded-[56px]">
//               <img
//                 src={image}
//                 alt={title}
//                 loading="lazy"
//                 className="h-auto w-full max-w-full max-h-[500px] object-contain lg:max-h-[600px] xl:max-h-[700px]"
//               />
//             </div>
//           </div>
//         )}

//         {/* TEXT - BOTTOM ON MOBILE, LEFT ON DESKTOP */}
//         <div className="text-section order-2 w-full px-6 text-left text-white lg:order-1 lg:px-12 lg:pl-10 z-20">
//           <h1 className="mb-4 text-[28px] font-semibold leading-snug lg:text-5xl lg:leading-tight xl:text-6xl">
//             {title}
//             <br />
//             {highlight && (
//               <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-cyan-200 bg-clip-text text-transparent">
//                 {highlight}
//               </span>
//             )}
//           </h1>
//           <p className="mb-5 max-w-md text-base leading-relaxed text-slate-100 lg:max-w-xl lg:text-lg">
//             {description}
//           </p>
//           {buttonLabel && buttonHref && (
//             <a href={buttonHref}>
//               <button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-xl transition-all hover:bg-slate-100 hover:shadow-2xl">
//                 {buttonLabel}
//               </button>
//             </a>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;










// src/components/HeroSection.jsx
import React from "react";

const HeroSection = ({
  image,
  title,
  highlight,
  description,
  buttonLabel,
  buttonHref,
  showAnimation = true,
}) => {
  return (
    // DIAGONAL GRADIENT: Starts Dark Navy (Top Left) -> Ends Bright Blue (Bottom Right)
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020410] via-[#0f172a] to-[#172554] pt-16 md:pt-10">
    <style jsx>{`
  /* --- 1. GLOSSY OVERLAY --- 
     Creates a 'glass' sheen from the top-center. 
     Keeps the top-left dark for your Blue Logo visibility. */
  .gloss-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 50% -20%, 
      rgba(56, 189, 248, 0.15), /* Light Blue shine */
      rgba(2, 6, 23, 0) 65%     /* Fades to transparent */
    );
    z-index: 0;
    pointer-events: none;
  }

  /* --- 2. BACKGROUND SHAPES CONTAINER --- */
  .hero-shapes {
    position: absolute;
    width: clamp(280px, 55vw, 640px);
    height: clamp(220px, 56vw, 420px);
    right: clamp(-20px, -5vw, -10px);
    bottom: clamp(-20px, -8vh, -15px);
    z-index: 1;
  }

  /* --- 3. THE SHAPES (COLORS) --- */
  
  /* Main dark blue blob behind image */
  .shape-bg { 
    background: radial-gradient(circle at 30% 30%, #172554, #0f172a 60%, transparent 100%); 
    height: 100%; 
    width: 100%; 
    border-top-left-radius: 55%; 
    border-bottom-left-radius: 55%; 
    filter: blur(50px); 
    position: absolute; 
    opacity: 0.8; 
  }

  /* Floating Highlight 1: Electric Blue */
  .shape-float1 { 
    background: radial-gradient(circle at center, #60a5fa 0%, #2563eb 50%, transparent 100%); 
    width: clamp(150px, 34vw, 280px); 
    height: clamp(150px, 34vw, 280px); 
    border-radius: 50%; 
    position: absolute; 
    bottom: 5%; 
    right: 5%; 
    filter: blur(45px); 
    animation: float1 6s ease-in-out infinite alternate; 
    opacity: 0.6; 
  }

  /* Floating Highlight 2: Cyan/Ice Blue (Adds the "Gloss") */
  .shape-float2 { 
    background: radial-gradient(circle at center, #bae6fd 0%, #0ea5e9 50%, transparent 100%); 
    width: clamp(180px, 38vw, 320px); 
    height: clamp(180px, 38vw, 320px); 
    border-radius: 50%; 
    position: absolute; 
    bottom: 25%; 
    left: -10%; 
    filter: blur(45px); 
    animation: float2 7s ease-in-out infinite alternate-reverse; 
    opacity: 0.5; 
  }

  /* Floating Highlight 3: White/Silver (Subtle reflection) */
  .shape-float3 { 
    background: linear-gradient(135deg, #f0f9ff 0%, #7dd3fc 45%, #0369a1 100%); 
    width: clamp(120px, 30vw, 230px); 
    height: clamp(120px, 30vw, 230px); 
    border-radius: 42% 60% 52% 70%; 
    position: absolute; 
    top: 10%; 
    right: 5%; 
    filter: blur(35px); 
    animation: pulseFloat 5s ease-in-out infinite; 
    opacity: 0.3; 
  }

  /* --- 4. ANIMATIONS --- */
  @keyframes float1 { 
    0% { transform: translate(0, 0) scale(1); } 
    100% { transform: translate(-20px, -20px) scale(1.1); } 
  }
  @keyframes float2 { 
    0% { transform: translate(0, 0) scale(1); } 
    100% { transform: translate(25px, -15px) scale(1.12); } 
  }
  @keyframes pulseFloat { 
    0%, 100% { transform: translate(0, 0) scale(1); } 
    50% { transform: translate(10px, -10px) scale(1.15); } 
  }
  
  /* --- 5. MOBILE RESPONSIVENESS (Below 1024px) --- */
  @media (max-width: 1023px) { 
    .hero-shapes { 
      width: clamp(260px, 88vw, 360px); 
      height: clamp(210px, 68vw, 300px); 
      right: -10px; 
      bottom: -90px; 
    }
    .container { 
      flex-direction: column !important; 
      align-items: stretch !important;
      gap: 3rem !important; 
      padding: 3rem 1rem !important;
    }
    /* Image goes on TOP for mobile */
    .image-section { 
      order: 1 !important; 
      width: 100% !important;
      margin-bottom: 0 !important;
    }
    /* Text goes on BOTTOM for mobile */
    .text-section { 
      order: 2 !important; 
      width: 100% !important;
      text-align: center !important;
      padding: 0 1rem !important;
    }
    .text-section h1 { 
      font-size: clamp(28px, 8vw, 36px) !important; 
      line-height: 1.2 !important; 
      margin-bottom: 1.5rem !important;
    }
    .text-section p { 
      font-size: clamp(16px, 4.5vw, 18px) !important; 
      line-height: 1.6 !important;
      max-width: 100% !important;
      margin: 0 auto 2rem auto !important;
    }
    .text-section button { 
      display: block !important; 
      margin: 0 auto !important; 
      padding: 14px 40px !important; 
      font-size: 16px !important;
    }
    .image-container { 
      width: 95% !important; 
      max-width: 400px !important;
      margin: 0 auto !important;
    }
  }
`}</style>
      
      <div className="gloss-overlay" />

      <div className="mx-auto container flex min-h-screen max-w-[1440px] flex-col lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-8 lg:py-16 relative items-center gap-8 px-4 py-8">
        
        {/* IMAGE */}
        {image && (
          <div className="image-section relative flex w-full items-center justify-center lg:order-2 lg:w-[95%]">
            {showAnimation && (
              <div className="hero-shapes">
                <div className="shape-bg" />
                <div className="shape-float1" />
                <div className="shape-float2" />
              </div>
            )}
            <div className="image-container relative z-30 mx-auto flex w-full max-w-4xl overflow-hidden rounded-[32px] lg:rounded-[56px]">
              <img src={image} alt={title} className="h-auto w-full max-w-full max-h-[500px] object-contain lg:max-h-[600px] xl:max-h-[700px]" />
            </div>
          </div>
        )}

        {/* TEXT */}
        <div className="text-section order-2 w-full px-6 text-left text-white lg:order-1 lg:px-12 lg:pl-10 z-20">
          <h1 className="mb-4 text-[28px] font-semibold leading-snug lg:text-5xl lg:leading-tight xl:text-6xl">
            {title}
            <br />
            {highlight && (
              <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h1>
          <p className="mb-5 max-w-md text-base leading-relaxed text-blue-100 lg:max-w-xl lg:text-lg">
            {description}
          </p>
          {buttonLabel && buttonHref && (
            <a href={buttonHref}>
              <button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50 transition-all">
                {buttonLabel}
              </button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;





// // src/components/HeroSection.jsx
// import React from "react";

// const HeroSection = ({
//   image,
//   title,
//   highlight,
//   description,
//   buttonLabel,
//   buttonHref,
//   showAnimation = true,
// }) => {
//   return (
//     // BASE: Deep Slate (Top-Left for Logo) -> Rich Teal (Bottom-Right)
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#115e59] pt-16 md:pt-10">
//       <style jsx>{`
//         /* --- 1. GLOSS OVERLAY (Minty/Ice White) --- */
//         .gloss-overlay {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(
//             circle at 50% -20%, 
//             rgba(45, 212, 191, 0.15), /* Minty gloss */
//             rgba(2, 6, 23, 0) 65%
//           );
//           z-index: 0;
//           pointer-events: none;
//         }

//         /* --- 2. SHAPES --- */
//         .hero-shapes {
//           position: absolute;
//           width: clamp(280px, 55vw, 640px);
//           height: clamp(220px, 56vw, 420px);
//           right: clamp(-20px, -5vw, -10px);
//           bottom: clamp(-20px, -8vh, -15px);
//           z-index: 1;
//         }

//         /* Base Blob: Deep Emerald */
//         .shape-bg { 
//           background: radial-gradient(circle at 30% 30%, #134e4a, #020617 65%); 
//           height: 100%; width: 100%; 
//           border-radius: 50%;
//           filter: blur(55px); position: absolute; opacity: 0.9; 
//         }

//         /* Float 1: Electric Teal (The Main Pop) */
//         .shape-float1 { 
//           background: radial-gradient(circle at center, #2dd4bf 0%, #0d9488 50%, transparent 100%); 
//           width: clamp(150px, 34vw, 280px); height: clamp(150px, 34vw, 280px); 
//           border-radius: 50%; position: absolute; bottom: 10%; right: 10%; 
//           filter: blur(40px); animation: float1 6s ease-in-out infinite alternate; opacity: 0.6; 
//         }

//         /* Float 2: SKY BLUE (To tie in your Blue Logo) */
//         .shape-float2 { 
//           background: radial-gradient(circle at center, #7dd3fc 0%, #0284c7 50%, transparent 100%); 
//           width: clamp(140px, 30vw, 260px); height: clamp(140px, 30vw, 260px); 
//           border-radius: 50%; position: absolute; top: 5%; right: 25%; 
//           filter: blur(45px); animation: float2 7s ease-in-out infinite alternate-reverse; opacity: 0.5; 
//         }

//         /* Float 3: White/Silver (Reflection) */
//         .shape-float3 { 
//           background: linear-gradient(135deg, rgba(204,251,241,0.2) 0%, rgba(45,212,191,0.1) 100%); 
//           width: clamp(100px, 20vw, 200px); height: clamp(100px, 20vw, 200px); 
//           border-radius: 40% 60% 70% 30%; position: absolute; bottom: 35%; left: 5%; 
//           filter: blur(30px); animation: pulseFloat 5s ease-in-out infinite; opacity: 0.3; 
//         }

//         @keyframes float1 { 0% { transform: translate(0, 0); } 100% { transform: translate(-20px, -20px) scale(1.05); } }
//         @keyframes float2 { 0% { transform: translate(0, 0); } 100% { transform: translate(20px, 15px) scale(1.1); } }
//         @keyframes pulseFloat { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.1); opacity: 0.5; } }
        
//         /* --- 3. RESPONSIVE --- */
//         @media (max-width: 1023px) { 
//           .hero-shapes { width: clamp(260px, 88vw, 360px); height: clamp(210px, 68vw, 300px); right: -10px; bottom: -90px; }
//           .container { flex-direction: column !important; align-items: stretch !important; gap: 3rem !important; padding: 3rem 1rem !important; }
//           .image-section { order: 1 !important; width: 100% !important; margin-bottom: 0 !important; }
//           .text-section { order: 2 !important; width: 100% !important; text-align: center !important; }
//           .text-section h1 { font-size: clamp(28px, 8vw, 36px) !important; line-height: 1.2 !important; margin-bottom: 1.5rem !important; }
//           .text-section p { font-size: clamp(16px, 4.5vw, 18px) !important; max-width: 100% !important; margin: 0 auto 2rem auto !important; }
//           .text-section button { display: block !important; margin: 0 auto !important; }
//           .image-container { width: 95% !important; max-width: 400px !important; margin: 0 auto !important; }
//         }
//       `}</style>

//       {/* Glossy Overlay */}
//       <div className="gloss-overlay" />

//       <div className="mx-auto container flex min-h-screen max-w-[1440px] flex-col lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-8 lg:py-16 relative items-center gap-8 px-4 py-8">
        
//         {/* IMAGE SECTION */}
//         {image && (
//           <div className="image-section relative flex w-full items-center justify-center lg:order-2 lg:w-[95%]">
//             {showAnimation && (
//               <div className="hero-shapes">
//                 <div className="shape-bg" />
//                 <div className="shape-float1" />
//                 <div className="shape-float2" />
//                 <div className="shape-float3" />
//               </div>
//             )}
//             {/* Emerald/Blue Shadow to match theme */}
//             <div className="image-container relative z-30 mx-auto flex w-full max-w-4xl overflow-hidden rounded-[32px] border border-white/10 shadow-[0_20px_50px_-12px_rgba(20,184,166,0.25)] bg-white/5 backdrop-blur-sm lg:rounded-[56px]">
//               <img
//                 src={image}
//                 alt={title}
//                 loading="lazy"
//                 className="h-auto w-full max-w-full max-h-[500px] object-contain lg:max-h-[600px] xl:max-h-[700px]"
//               />
//             </div>
//           </div>
//         )}

//         {/* TEXT SECTION */}
//         <div className="text-section order-2 w-full px-6 text-left text-white lg:order-1 lg:px-12 lg:pl-10 z-20">
//           <h1 className="mb-4 text-[28px] font-semibold leading-snug lg:text-5xl lg:leading-tight xl:text-6xl text-slate-50">
//             {title}
//             <br />
//             {highlight && (
//               // Gradient: Teal -> Cyan -> Blue (Ties it all together)
//               <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-sm">
//                 {highlight}
//               </span>
//             )}
//           </h1>
//           <p className="mb-5 max-w-md text-base leading-relaxed text-slate-300 lg:max-w-xl lg:text-lg">
//             {description}
//           </p>
//           {buttonLabel && buttonHref && (
//             <a href={buttonHref}>
//               <button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-teal-950 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:bg-teal-50 hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] hover:scale-105">
//                 {buttonLabel}
//               </button>
//             </a>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;