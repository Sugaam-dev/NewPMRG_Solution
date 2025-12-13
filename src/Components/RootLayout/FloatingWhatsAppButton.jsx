// src/components/FloatingWhatsAppButton.jsx
import React from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "7722017100"; 

const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi, I’d like to know more about your services and opportunities."
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="
        fixed z-50 rounded-full flex items-center justify-center
        bg-transparent
        hover:scale-105 active:scale-95 transition-transform duration-200
        
        /* RESPONSIVE SIZING & POSITIONING */
        /* Mobile (default): Smaller size, closer to edge */
        bottom-4 right-4 
        h-10 w-10

        /* Desktop (md and up): Larger size, further from edge */
        md:bottom-6 md:right-6
        md:h-14 md:w-14
      "
    >
      {/* Pulse wave */}
      <span
        className="
          absolute inset-0 rounded-full
          bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500
          opacity-70 -z-10
        "
        style={{ animation: "whatsapp-pulse 1.8s infinite ease-out" }}
      />

      {/* Soft glow */}
      <span
        className="
          absolute inset-0 rounded-full
          bg-gradient-to-r from-sky-400/40 to-indigo-500/40
          blur-lg -z-10
        "
      />

      {/* Lucide icon */}
      <MessageCircle
        // Responsive icon size: 6 on mobile, 7 on desktop
        className="h-6 w-6 md:h-7 md:w-7"
        color="#38bdf8" 
        strokeWidth={2.4}
      />
    </button>
  );
};

export default FloatingWhatsAppButton;