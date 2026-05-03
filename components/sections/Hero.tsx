"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-24 pb-20 md:pt-32 md:pb-32 px-6 bg-gradient-to-b from-white to-background-secondary/30 overflow-hidden">
      {/* Abstract Background Elements with more opacity */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-brand-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 z-10"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-sky/10 text-brand-sky font-nunito font-bold text-sm mb-6 uppercase tracking-wider">
            O laudo chegou. Você não está sozinha(o).
          </span>
          <h1 className="font-nunito font-black text-4xl md:text-6xl text-text-primary leading-[1.1] mb-6 text-balance">
            Transforme o medo do diagnóstico em{" "}
            <span className="text-brand-sky">clareza e segurança.</span>
          </h1>
          <p className="font-inter text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl">
            Descubra o passo a passo acolhedor para entender o universo do seu
            filho, organizar as terapias e garantir os direitos dele – sem se
            perder na confusão do Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="group"
              href={process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://pay.kiwify.com.br/1RqjCAD"}
              fbEvent="InitiateCheckout"
            >
              Quero o Guia Acolhedor Agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="mt-4 text-sm text-text-secondary flex items-center gap-2">
            <Clock className="w-4 h-4" /> Acesso imediato no seu e-mail por
            apenas R$ 27,90
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-brand-sky/20 border-8 border-white">
            <Image
              src="/images/hero.png"
              alt="Ebook Mockup"
              width={600}
              height={400}
              priority
              className="w-full h-auto animate-float"
            />
          </div>
          {/* Decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};
