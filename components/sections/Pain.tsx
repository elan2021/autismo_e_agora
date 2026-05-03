"use client";

import React from "react";
import { motion } from "framer-motion";
import { CloudRain, AlertCircle, Users } from "lucide-react";
import { Section } from "@/components/layout/Section";

export const Pain = () => {
  return (
    <Section id="dores" bg="secondary" withBorder={true}>
      <div className="text-center mb-16">
        <h2 className="font-nunito font-black text-3xl md:text-5xl text-text-primary mb-4">
          Você está sentindo isso agora?
        </h2>
        <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <CloudRain className="w-10 h-10 text-brand-sky" />,
            text: "Noites em claro pesquisando sintomas e terapias na internet, sentindo cada vez mais angústia.",
          },
          {
            icon: <AlertCircle className="w-10 h-10 text-brand-sky" />,
            text: "Medo do preconceito, da escola e de como a própria família vai reagir ao novo diagnóstico.",
          },
          {
            icon: <Users className="w-10 h-10 text-brand-sky" />,
            text: "A sensação paralisante de 'não sei por onde começar' após sair do consultório médico.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-brand-sky/5 hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{item.icon}</div>
            <p className="text-text-secondary leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="font-nunito font-bold text-xl md:text-2xl text-text-primary italic">
          "É normal sentir luto, medo e confusão. Mas o laudo não é o fim de uma
          história, é o manual de instruções que você não tinha."
        </p>
      </div>
    </Section>
  );
};
