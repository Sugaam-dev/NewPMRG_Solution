import React from "react";
import cultureOffice from "../../../assets/lifeatPmrg.webp";  
import cultureActivities from "../../../assets/culture.jpg"; 
import HeroSection from "../HeroSection";
import teamculturedata from "../../../data/teamculturedata";

const WHATSAPP_NUMBER = "919876543210"; // replace with your real number

const openWhatsApp = () => {
  const message = encodeURIComponent(
    "Hi, I’m interested in career opportunities at PMRG Solution."
  );
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank");
};

export default function TeamCulturePage() {
  return (
    <>
      <HeroSection {...teamculturedata} />
      <main className="w-full bg-white">
        {/* CULTURE INTRO – office image */}
        <section className="px-6 md:px-16 lg:px-20 py-5 lg:py-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <img
                src={cultureOffice}
                alt="Team collaborating at PMRG Solution office"
                className="rounded-[32px] w-full h-auto object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[1.15] mb-6">
                Life at PMRG Solution
              </h2>
              <p className="text-[18px] leading-[1.7] text-gray-700 max-w-xl">
                The culture focuses on collaboration, ownership, and continuous
                learning. Day‑to‑day work includes pairing on features, code
                reviews, and open discussions that help everyone grow together.
              </p>
            </div>
          </div>
        </section>

        {/* TEAM MOMENTS */}
        <section className="px-6 md:px-16 lg:px-20 py-5 text-center">
          <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[1.15] mb-6">
            Team Moments
          </h2>
          <p className="text-[20px] leading-[1.7] max-w-3xl mx-auto text-gray-700">
            Team catch‑ups, demos, knowledge‑sharing sessions, and informal
            stand‑ups create space to connect beyond tasks and tickets, keeping
            everyone aligned and motivated.
          </p>
        </section>

        {/* YOUR THREE HIGHLIGHT CARDS SECTION HERE (unchanged) */}

        {/* TEAM GROWTH SECTION HERE (unchanged) */}

        {/* JOIN OUR CULTURE – activities image + blue gradient button */}
        <section className="px-6 md:px-16 lg:px-20 py-5 lg:py-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[48px] font-bold tracking-[-0.03em] leading-[1.1] mb-8">
                Join Our Culture
              </h2>
              <p className="text-[20px] leading-[1.8] text-gray-700 max-w-[620px] mb-10">
                If you enjoy solving real problems, collaborating closely with a
                team, and learning continuously, PMRG Solution could be the right
                place. Reach out to explore current opportunities.
              </p>

              <button
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full text-[18px] font-semibold shadow-md hover:from-sky-600 hover:to-blue-700 transition"
              >
                Check out our career opportunities!
              </button>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={cultureActivities}
                alt="PMRG Solution team during activities"
                className="rounded-[40px] w-full max-w-[680px] object-cover shadow-xl"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
