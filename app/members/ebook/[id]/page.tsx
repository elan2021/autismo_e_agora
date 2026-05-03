import React from "react";
import Link from "next/link";
import { ChevronLeft, Download, ExternalLink } from "lucide-react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

interface EbookPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EbookViewPage({ params }: EbookPageProps) {
  const { id } = await params;

  const lesson = await prisma.lesson.findUnique({
    where: { id },
    include: {
      module: true,
    },
  });

  if (!lesson || !lesson.pdfUrl) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      {/* Header */}
      <div className="p-4 md:p-8 flex items-center justify-between border-b border-white/10">
        <Link
          href="/members"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
          <span>Voltar para o Dashboard</span>
        </Link>
        <div className="flex gap-4">
          <a
            href={lesson.pdfUrl}
            download
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md transition-colors"
          >
            <Download className="w-5 h-5" />
            <span className="hidden md:inline">Baixar PDF</span>
          </a>
          <a
            href={lesson.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/80 px-4 py-2 rounded-md transition-colors font-bold"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="hidden md:inline">Abrir em Nova Aba</span>
          </a>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto p-4 md:p-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Info Sidebar */}
        <div className="lg:col-span-1">
          <h1 className="text-3xl font-nunito font-black mb-4">
            {lesson.title}
          </h1>
          <p className="text-sm text-brand-sky font-bold uppercase tracking-widest mb-6">
            Módulo: {lesson.module.title}
          </p>
          <p className="text-gray-400 leading-relaxed">
            {lesson.description || "Nenhuma descrição disponível para este material."}
          </p>
        </div>

        {/* PDF Viewer Area */}
        <div className="lg:col-span-3 h-[70vh] md:h-[80vh] bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            src={`${lesson.pdfUrl}#toolbar=0`}
            className="w-full h-full"
            title={lesson.title}
          />
        </div>
      </div>
    </div>
  );
}
