"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export const Solution = () => {
  return (
    <Section id="solucao">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/connection.png"
            alt="Conexão entre mãe e filho"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
        >
          <h2 className="font-nunito font-black text-3xl md:text-5xl text-text-primary mb-6">
            Conheça o <span className="text-brand-sky">"Autismo, e Agora?"</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Este não é apenas um livro técnico. É um guia digital de leitura
            rápida e prática, escrito para ser aquele abraço apertado e a bússola
            que você precisava no momento em que saiu do consultório.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Linguagem simples, sem jargões médicos",
              "Focado em ações práticas e imediatas",
              "Acolhimento emocional para toda a família",
              "Acesso vitalício no seu celular ou tablet",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-text-primary font-bold"
              >
                <CheckCircle2 className="text-green-500 w-6 h-6" /> {item}
              </li>
            ))}
          </ul>
          <Button
            href={process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://pay.kiwify.com.br/1RqjCAD"}
            fbEvent="InitiateCheckout"
          >
            Começar Minha Jornada Agora
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};
