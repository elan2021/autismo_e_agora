"use client";

import React from "react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { Hero } from "@/components/sections/Hero";
import { Pain } from "@/components/sections/Pain";
import { Solution } from "@/components/sections/Solution";
import { Benefits } from "@/components/sections/Benefits";
import { About } from "@/components/sections/About";
import { Proof } from "@/components/sections/Proof";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";

/**
 * Landing Page - "Autismo, e Agora?"
 * 
 * Orchestrates the modular components into a cohesive high-conversion page.
 */
export default function LandingPage() {
  return (
    <main className="relative">
      <ProgressBar />
      <StickyCTA />
      <Hero />
      <Pain />
      <Solution />
      <Benefits />
      <About />
      <Proof />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
