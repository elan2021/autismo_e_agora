import React from "react";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background-primary border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="text-brand-orange fill-brand-orange w-6 h-6" />
          <span className="font-nunito font-black text-xl text-text-primary italic">
            Autismo, e Agora?
          </span>
        </div>
        <p className="text-text-secondary text-sm mb-8 max-w-2xl mx-auto">
          Este produto é um material educativo e de apoio emocional. Não
          substitui o acompanhamento de médicos, terapeutas e profissionais de
          saúde especializados.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary font-medium">
          <a href="#" className="hover:text-brand-sky transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-brand-sky transition-colors">
            Políticas de Privacidade
          </a>
          <a href="#" className="hover:text-brand-sky transition-colors">
            Contato
          </a>
        </div>
        <p className="mt-8 text-xs text-text-secondary opacity-50">
          © 2026 Autismo, e Agora? - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
