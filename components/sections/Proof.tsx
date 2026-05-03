"use client";

import React from "react";
import { Star } from "lucide-react";
import { Section } from "@/components/layout/Section";

export const Proof = () => {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="font-nunito font-black text-3xl md:text-5xl text-text-primary mb-4">
          O que as mães estão dizendo
        </h2>
        <div className="flex justify-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-6 h-6 fill-brand-orange text-brand-orange" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Mariana Silva",
            text: "Eu estava perdida, chorando todos os dias. Esse guia me deu o chão que eu precisava. O passo a passo da primeira semana salvou minha sanidade.",
            role: "Mãe do Theo (4 anos)",
          },
          {
            name: "Renata Costa",
            text: "Finalmente entendi o que o médico queria dizer com 'nível 1'. A parte dos direitos na escola é ouro puro. Todo pai recém-diagnosticado deveria ler.",
            role: "Mãe da Alice (6 anos)",
          },
          {
            name: "Carla Mendes",
            text: "Comprei pelo preço, mas o valor é imenso. É uma conversa de amiga que entende a nossa dor. Recomendo muito!",
            role: "Mãe do João (3 anos)",
          },
        ].map((testimony, i) => (
          <div
            key={i}
            className="bg-background-secondary p-8 rounded-2xl relative"
          >
            <p className="text-text-primary italic mb-6">"{testimony.text}"</p>
            <div>
              <p className="font-nunito font-bold text-text-primary">
                {testimony.name}
              </p>
              <p className="text-sm text-text-secondary">{testimony.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
