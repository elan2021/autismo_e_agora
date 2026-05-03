"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <header
        className={cn(
          "fixed top-0 w-full z-50 px-4 md:px-12 py-4 flex justify-between items-center transition-all duration-300",
          isScrolled
            ? "bg-[#141414] shadow-md shadow-black/50"
            : "bg-gradient-to-b from-black/80 to-transparent"
        )}
      >
        <div className="flex items-center gap-8 md:gap-12">
          <Link href="/members">
            <h1 className="text-brand-orange font-nunito font-black text-2xl tracking-tighter cursor-pointer">
              AUTISMO, E AGORA?
            </h1>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            <Link href="/members" className="hover:text-white transition-colors font-bold text-white">
              Início
            </Link>
            <Link href="/members/modules" className="hover:text-white transition-colors">
              Módulos
            </Link>
            <Link href="/members/progress" className="hover:text-white transition-colors">
              Meu Progresso
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* Avatar Profile */}
          <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-sky rounded-md cursor-pointer border border-transparent hover:border-white transition-all overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" alt="Avatar" />
          </div>
        </div>
      </header>
      
      {/* Content spans full height, banner starts at top 0 */}
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
