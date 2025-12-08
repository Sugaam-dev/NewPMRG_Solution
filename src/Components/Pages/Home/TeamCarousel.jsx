// src/components/TeamCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import pratima from "../../../assets/TeamsPhoto/pratima-mishra.webp";
import rekha from "../../../assets/TeamsPhoto/rekha-ghosh.webp";
import bhadrayu from "../../../assets/TeamsPhoto/bhadrayu-panda.webp";
import pamir from "../../../assets/TeamsPhoto/pamir.webp";
import shilpa from "../../../assets/TeamsPhoto/Shilpa_A.webp";
import advait from "../../../assets/TeamsPhoto/advait-tiwari.webp";
import rohit from "../../../assets/TeamsPhoto/photo_rohit_new.webp";
import sonal from "../../../assets/TeamsPhoto/sonal-kamble.webp";
import udesh from "../../../assets/TeamsPhoto/udesh.jpeg";

const members = [
  { name: "Pratima Mishra", img: pratima },
  { name: "Rekha Ghosh", img: rekha },
  { name: "Bhadrayu Panda", img: bhadrayu },
  { name: "Pamir Nayak", img: pamir },
  { name: "Shilpa Amminabhavi", img: shilpa },
  { name: "Advait Tiwari", img: advait },
  { name: "Rohit Ghosh", img: rohit },
  { name: "Sonal Kamble", img: sonal },
   { name: "Udesh", img: udesh },
];

const TeamCarousel = () => {
  return (
    <section className="w-full bg-white pb-15">
      <div className="max-w-[1120px] mx-auto px-6">
       

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 40,
            depth: 160,
            modifier: 1.1,
            slideShadows: false,
            
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        //   pagination={{ clickable: true }}
          className="team-swiper"
        >
          {members.map((m) => (
            <SwiperSlide
              key={m.name}
              className="!w-[220px] sm:!w-[240px] md:!w-[260px]"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/40 shadow-[0_18px_45px_rgba(15,23,42,0.25)] rounded-3xl px-4 pt-4 pb-6 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-28 h-28 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="font-pst font-semibold text-[16px] text-slate-900 text-center">
                  {m.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamCarousel;
