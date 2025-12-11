// src/components/ProjectsCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { projects } from "../../../data/projects.js";

// Helper to build WhatsApp link
const buildWhatsAppLink = (number, message) => {
  if (!number) return "#";
  const encoded = encodeURIComponent(
    message || "Hi, I’m interested in your services."
  );
  return `https://wa.me/${number}?text=${encoded}`;
};

const ProjectsCarousel = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mx-auto mb-10 max-w-[600px]">
          <p className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
            Our Project
          </p>
          <h2 className="font-pst font-bold text-[30px] md:text-[36px] mt-2">
            Our Recent Projects
          </h2>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="projects-swiper"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-md">
                {/* Background image */}
                <div className="relative w-full pt-[70%]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/50 to-black/30" />

                {/* Content */}
                <div className="absolute inset-0 flex items-end justify-center p-4">
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-sky-400 mb-1">
                      {p.tag}
                    </h4>
                    <div className="flex justify-center mb-2">
                      <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <img
                          src={p.logo}
                          alt={`${p.client} logo`}
                          loading="lazy"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-white text-lg font-bold">
                      {p.client}
                    </h3>

                    {/* Read more -> WhatsApp */}
                    {p.whatsappNumber && (
                      <a
                        href={buildWhatsAppLink(
                          p.whatsappNumber,
                          p.whatsappMessage
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center mt-3 px-4 py-1.5 rounded-full text-xs font-medium bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-colors"
                      >
                        Read more
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
