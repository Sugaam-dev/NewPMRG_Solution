// src/components/FloatingWhatsAppButton.jsx
import React from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "7722017100"; // your number, no +, spaces or dashes

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
        fixed bottom-6 right-6 z-50
        h-14 w-14 rounded-full
        flex items-center justify-center
        bg-slate-950
        shadow-[0_10px_30px_rgba(15,23,42,0.55)]
        hover:scale-105 active:scale-95
        transition-transform duration-200
      "
    >
      {/* Pulse wave */}
      <span
        className="
          absolute inset-0 rounded-full
          bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500
          opacity-70
          -z-10
        "
        style={{ animation: "whatsapp-pulse 1.8s infinite ease-out" }}
      />

      {/* Soft glow */}
      <span
        className="
          absolute inset-0 rounded-full
          bg-gradient-to-r from-sky-400/40 to-indigo-500/40
          blur-lg
          -z-10
        "
      />

      {/* Lucide icon in blue */}
      <MessageCircle
        className="h-7 w-7"
        color="#38bdf8" // Tailwind sky-400
        strokeWidth={2.4}
      />
    </button>
  );
};

export default FloatingWhatsAppButton;
