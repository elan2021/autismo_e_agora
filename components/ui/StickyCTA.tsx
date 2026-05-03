"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as fp from "@/lib/fpixel";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    fp.event("InitiateCheckout");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <a
            href={process.env.NEXT_PUBLIC_HOTMART_URL || "https://pay.hotmart.com/PLACEHOLDER"}
            onClick={handleCTAClick}
            className="flex items-center justify-center w-full py-4 px-6 bg-brand-orange text-white font-nunito font-bold rounded-xl shadow-lg shadow-brand-orange/30 active:scale-95 transition-transform"
          >
            QUERO O GUIA AGORA — R$ 27,90
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
