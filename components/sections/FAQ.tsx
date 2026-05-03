"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { FAQItem } from "@/components/ui/FAQItem";

export const FAQ = () => {
  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-nunito font-black text-3xl md:text-4xl text-text-primary mb-12 text-center">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-2">
          <FAQItem
            question="Funciona para qualquer idade?"
            answer="O foco principal são os primeiros passos após o laudo, o que costuma acontecer na infância. No entanto, as informações sobre direitos, acolhimento familiar e entendimento do espectro são valiosas para pais de autistas de qualquer idade."
          />
          <FAQItem
            question="Como vou receber o guia?"
            answer="Assim que o seu pagamento for confirmado (no cartão ou pix é instantâneo), você receberá um link de acesso no seu e-mail para baixar o guia em formato PDF de alta qualidade."
          />
          <FAQItem
            question="A linguagem é difícil ou técnica?"
            answer="De forma alguma. O guia foi escrito de mãe para pais, sem jargões médicos confusos. É como se você estivesse conversando com uma amiga experiente que já passou por tudo isso."
          />
          <FAQItem
            question="É seguro comprar?"
            answer="Sim! Utilizamos as maiores plataformas de pagamentos do Brasil. Seus dados estão criptografados e seguros."
          />
        </div>
      </div>
    </Section>
  );
};
