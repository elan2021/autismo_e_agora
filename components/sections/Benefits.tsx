"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, BookOpen, Heart } from "lucide-react";
import { Section } from "@/components/layout/Section";

export const Benefits = () => {
  return (
    <Section bg="secondary" withBorder={true}>
      <div className="text-center mb-16">
        <h2 className="font-nunito font-black text-3xl md:text-5xl text-text-primary mb-4">
          O que você vai descobrir
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Quatro pilares fundamentais para transformar sua jornada de pais em uma
          caminhada de propósito.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "A Primeira Semana",
            desc: "O que fazer nos primeiros 7 dias para evitar a sobrecarga e organizar a mente.",
            icon: <Clock className="w-8 h-8" />,
          },
          {
            title: "Direitos e Burocracia",
            desc: "O guia prático dos direitos do autista (escola, saúde e benefícios) explicado de forma simples.",
            icon: <ShieldCheck className="w-8 h-8" />,
          },
          {
            title: "Traduzindo o Laudo",
            desc: "Como entender os termos médicos e o nível de suporte do seu filho sem pânico.",
            icon: <BookOpen className="w-8 h-8" />,
          },
          {
            title: "Blindagem Familiar",
            desc: "Como lidar com olhares e perguntas desconfortáveis de parentes e amigos com elegância.",
            icon: <Heart className="w-8 h-8" />,
          },
        ].map((benefit, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-6"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-brand-sky/10 rounded-xl flex items-center justify-center text-brand-sky">
              {benefit.icon}
            </div>
            <div>
              <h3 className="font-nunito font-bold text-xl text-text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
