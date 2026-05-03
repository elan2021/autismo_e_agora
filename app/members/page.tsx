import React from "react";
import prisma from "@/lib/prisma";
import { ContentRow } from "@/components/members/ContentRow";
import { Play, Info, Star } from "lucide-react";

export default async function MembersDashboard() {
  // Fetch modules with lessons from the database
  const modules = await prisma.module.findMany({
    include: {
      lessons: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });

  return (
    <div className="pb-20 overflow-x-hidden bg-[#0A0A0A] min-h-screen">
      {/* Featured Banner (Hero) */}
      <div className="relative h-[85vh] w-full mb-8">
        {/* Gradients to blend banner with background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />
        
        {/* Placeholder High-Quality Image - Cinematic */}
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
          alt="Featured"
          className="w-full h-full object-cover opacity-60"
        />

        {/* Hero Content */}
        <div className="absolute bottom-[20%] left-4 md:left-12 z-20 max-w-3xl w-full pr-4">
          
          {/* Header & Rating */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1 text-brand-sky">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-white font-bold ml-2">5.0</span>
            </div>
            <span className="text-gray-400 text-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              Avaliar este curso
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              Comunidade
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-nunito font-black mb-6 text-white drop-shadow-lg leading-tight">
            Autismo, e Agora? <br className="hidden md:block"/> O Guia Prático
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 mb-8 line-clamp-2 md:line-clamp-none font-medium drop-shadow-md max-w-2xl">
            Aprenda na prática como organizar a rotina, aplicar estratégias de acolhimento e estruturar os próximos passos após o diagnóstico.
          </p>
          
          {/* Action Box (Resume Course) */}
          <div className="border border-white/20 bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-8 max-w-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/10 transition-colors cursor-pointer group">
            <div>
              <span className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2 block">Iniciar curso</span>
              <h3 className="text-white font-bold text-xl mb-1 group-hover:text-brand-sky transition-colors">
                Módulo 1 : Introdução
              </h3>
              <p className="text-gray-400 text-sm">Aula 1 - Bem-vindo ao Guia</p>
            </div>
            <div className="w-14 h-14 rounded-full border-2 border-brand-sky flex items-center justify-center text-brand-sky group-hover:bg-brand-sky group-hover:text-white transition-all">
              <Play className="w-6 h-6 ml-1 fill-current" />
            </div>
          </div>
        </div>
      </div>

      {/* Modules Row - Pulling up to overlap slightly */}
      <div className="-mt-32 relative z-30 space-y-12">
        <div className="px-4 md:px-12 mb-6 flex items-center gap-4">
           <button className="flex items-center gap-2 text-white font-bold hover:text-brand-sky transition-colors">
             <span className="text-brand-sky text-xl">⚡</span> Ver todas as seções
           </button>
        </div>

        {modules.length > 0 ? (
          modules.map((module) => (
            <ContentRow
              key={module.id}
              title={module.title}
              lessons={module.lessons}
            />
          ))
        ) : (
          <div className="px-12 py-20 text-center text-gray-400 border border-white/10 mx-12 rounded-lg bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-2">Nenhum conteúdo encontrado</h3>
            <p>Os módulos e ebooks ainda não foram adicionados ao banco de dados.</p>
          </div>
        )}
      </div>
    </div>
  );
}
