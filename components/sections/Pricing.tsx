"use client";

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export const Pricing = () => {
  return (
    <Section
      id="oferta"
      className="bg-brand-sky text-white text-center py-20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto z-10 relative">
        <h2 className="font-nunito font-black text-3xl md:text-5xl mb-6">
          Sua paz mental e o futuro do seu filho valem muito mais que isso.
        </h2>
        <p className="text-white/80 text-lg mb-12">
          Uma consulta com especialista custa de R$ 300 a R$ 800. <br />
          Horas perdidas na internet custam sua paz.
        </p>

        <div className="bg-white text-text-primary p-10 rounded-3xl shadow-2xl inline-block w-full max-w-md">
          <p className="text-text-secondary line-through text-xl mb-2">
            De R$ 67,90
          </p>
          <div className="flex flex-col items-center mb-8">
            <span className="text-sm font-bold text-brand-sky uppercase tracking-widest mb-1">
              Oferta Especial
            </span>
            <p className="text-6xl font-black text-brand-orange">R$ 27,90</p>
            <p className="text-sm text-text-secondary mt-2">
              Pagamento único • Acesso imediato
            </p>
          </div>

          <Button
            className="w-full text-xl py-6 animate-glow-pulse"
            href={process.env.NEXT_PUBLIC_HOTMART_URL || "https://pay.hotmart.com/PLACEHOLDER"}
            fbEvent="InitiateCheckout"
          >
            ACESSO IMEDIATO AO GUIA
          </Button>

          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-text-secondary uppercase font-bold tracking-tighter">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Compra Segura
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Garantia 7 Dias
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};
