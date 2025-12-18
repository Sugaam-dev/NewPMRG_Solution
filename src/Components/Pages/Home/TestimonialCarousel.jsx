// src/components/TestimonialCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { testimonial } from "../../../data/testimonial.js";

const TestimonialCarousel = () => {

  const whatsapp=()=>{
    window.open("https://wa.me/7722017100", "_blank");
  }
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mx-auto mb-10 max-w-[600px]">
          <p className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
            Our Testimonial
          </p>
          <h2 className="font-pst font-bold text-[30px] md:text-[36px] mt-2">
            Our clients are saying
          </h2>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        //   navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonial.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="h-full border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col">
                {/* Top row: logo + info + stars */}
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="ml-4 flex-1">
                    <h4 className="text-[#0ea5e9] font-semibold text-[17px]">
                      {item.name}
                    </h4>
                    <p className="text-slate-500 text-[13px] mb-1">
                      {item.role}
                    </p>

                    <div className="flex text-[#fbbf24]">
                      {Array.from({ length: item.rating }).map((_, idx) => (
                        <span key={idx} className="mr-1 text-[14px]">★</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="border-t border-slate-200 mt-4 pt-3">
                  <p className="text-[14px] leading-relaxed text-slate-700">
                    “{item.text}”
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div  className=" flex justify-center text-center mt-10" >
<button onClick={whatsapp} className="group inline-flex items-center bg-gradient-to-br from-[#0e1540] via-[#06256e] to-[#1d3fae] text-white pt-2 pb-2 pl-20 pr-20 rounded-4xl font-medium transform transition-all duration-300 hover:from-[#1d3fae] hover:via-[#2563eb] hover:to-[#4f46e5] hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/50">know more</button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
