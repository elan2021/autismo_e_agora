"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Heart, GraduationCap, Microscope, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <Section id="sobre-mim" bg="secondary">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Visual Column */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          className="lg:col-span-5 sticky top-24"
        >
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/mara-oliveira.png"
                alt="Mara Oliveira - Psicopedagoga"
                width={800}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-sky/20 rounded-full blur-xl" />
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-sky/5">
              <div className="w-12 h-12 bg-brand-sky/10 rounded-xl flex items-center justify-center text-brand-sky">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="font-nunito font-bold text-text-primary">Psicopedagoga</p>
                <p className="text-xs text-text-secondary">Especialista em TEA</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-sky/5">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                <Microscope className="w-6 h-6" />
              </div>
              <div>
                <p className="font-nunito font-bold text-text-primary">Análise ABA</p>
                <p className="text-xs text-text-secondary">Em especialização</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-sky/10 text-brand-sky font-nunito font-bold text-sm mb-6 uppercase tracking-wider">
            Quem está por trás do guia
          </span>
          <h2 className="font-nunito font-black text-4xl md:text-5xl text-text-primary mb-8 leading-[1.1]">
            Olá, eu sou a <span className="text-brand-sky">Mara Oliveira</span>
          </h2>

          <div className="prose prose-lg max-w-none text-text-secondary space-y-6 font-inter leading-relaxed">
            <p className="font-bold text-text-primary text-xl">
              Sou psicopedagoga e dedico a minha vida a crianças com Transtorno do Espectro Autista (TEA), 
              atendendo diferentes níveis de suporte (níveis 1, 2 e 3) no contraturno escolar.
            </p>

            <p>
              Mas a minha história na educação não começou assim. Eu estive em sala de aula por pouco tempo… 
              e foi ali que algo dentro de mim começou a inquietar profundamente. Eu via algumas crianças 
              aprendendo com facilidade, enquanto outras lutavam, se esforçavam, se perdiam… e ninguém 
              parecia enxergar de verdade o que estava acontecendo.
            </p>

            <div className="bg-brand-sky/5 p-6 rounded-2xl border-l-4 border-brand-sky my-8">
              <p className="italic text-text-primary font-medium">
                "Por que algumas crianças aprendem e outras não? Será que o erro era meu? 
                Será que eu não estava fazendo o suficiente?"
              </p>
            </div>

            <p>
              Essas perguntas não me deixaram em paz. Foi essa inquietação que mudou completamente o rumo da minha vida.
              Mesmo já tendo uma pós-graduação em psicopedagogia, eu ainda não atuava na área. Mas, a partir daquele 
              momento, eu decidi que precisava entender. Eu precisava ir mais fundo.
            </p>

            <p>
              Eu mergulhei nos estudos, fiz cursos, busquei conhecimento… mas, mais do que isso, eu encontrei um propósito. 
              Eu me apaixonei pela educação especial. E desde 2023… eu nunca mais parei.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="flex gap-4">
                <Heart className="w-6 h-6 text-brand-orange shrink-0" />
                <p className="text-sm">Atendimento individualizado e respeitoso.</p>
              </div>
              <div className="flex gap-4">
                <Sparkles className="w-6 h-6 text-brand-sky shrink-0" />
                <p className="text-sm">Missão diária de acolher famílias e histórias.</p>
              </div>
            </div>

            <p>
              Atualmente, estou cursando minha segunda graduação em Terapia Ocupacional e me especializando 
              na aplicação da abordagem ABA (Análise do Comportamento Aplicada), porque eu acredito que 
              cada criança merece um olhar baseado em conhecimento verdadeiro.
            </p>

            <p>
              Ao longo da minha caminhada, eu percebi algo que me preocupa profundamente: existe muita 
              desinformação sobre o TEA. Informações rasas que aumentam a angústia das famílias. 
              <strong> Foi por isso que eu decidi criar este e-book.</strong>
            </p>

            <p className="font-nunito font-bold text-2xl text-brand-sky mt-12">
              Vamos juntos fazer a diferença? 💙🧩
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
