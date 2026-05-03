"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, FileText, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Lesson {
  id: string;
  title: string;
  thumbnail: string | null;
  pdfUrl?: string | null;
  videoUrl?: string | null;
}

interface ContentRowProps {
  title: string;
  lessons: Lesson[];
}

export const ContentRow = ({ title, lessons }: ContentRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.8
          : scrollLeft + clientWidth * 0.8;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Helper to get random fallback images if no thumbnail
  const getFallbackImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
    ];
    return images[index % images.length];
  };

  return (
    <div 
      className="mb-8 md:mb-14 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-lg md:text-2xl font-nunito font-bold text-[#e5e5e5] mb-2 md:mb-4 px-4 md:px-12 flex items-center gap-2 transition-colors hover:text-white cursor-pointer">
        {title}
        <ChevronRight className="w-5 h-5 text-brand-sky opacity-0 group-hover:opacity-100 transition-opacity -ml-2" />
      </h2>

      <div className="relative">
        <AnimatePresence>
          {isHovered && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll("left")}
              className="absolute left-0 top-0 bottom-0 z-40 w-12 bg-black/60 hover:bg-black/80 flex items-center justify-center text-white rounded-r-md transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>
          )}
        </AnimatePresence>

        <div
          ref={scrollRef}
          className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-8 pt-4 -mt-4 snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {lessons.map((lesson, index) => (
            <Link key={lesson.id} href={`/members/ebook/${lesson.id}`} className="snap-start outline-none">
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  zIndex: 50,
                  transition: { duration: 0.2, delay: 0.1 }
                }}
                className={cn(
                  "flex-none w-[200px] md:w-[280px] aspect-video bg-[#181818] rounded-md overflow-hidden relative cursor-pointer shadow-lg",
                  "border border-transparent hover:border-white/20 transition-colors"
                )}
              >
                <img
                  src={lesson.thumbnail || getFallbackImage(index)}
                  alt={lesson.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Always visible gradient at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3 md:p-4">
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md">
                    {lesson.title}
                  </h3>
                </div>

                {/* Hover overlay UI */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-black/50 text-white transform scale-90 hover:scale-105 hover:bg-white hover:text-black transition-all">
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </div>
                  
                  {/* Fake progress indicator for visual flair */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
                    <div className="h-full bg-brand-orange w-0 hover:w-1/3 transition-all duration-1000 ease-out" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-0 bottom-0 z-40 w-12 bg-black/60 hover:bg-black/80 flex items-center justify-center text-white rounded-l-md transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
