import React from "react";
import { cn } from "@/lib/utils";
import * as fp from "@/lib/fpixel";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  fbEvent?: string;
  as?: "a" | "button";
}

export const Button = ({
  children,
  className,
  href = "#oferta",
  variant = "primary",
  onClick,
  fbEvent,
  as = "a",
}: ButtonProps) => {
  const handleClick = () => {
    if (fbEvent) fp.event(fbEvent);
    if (onClick) onClick();
  };

  const styles = cn(
    "inline-flex items-center justify-center px-8 py-4 rounded-full font-nunito font-extrabold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95",
    variant === "primary"
      ? "bg-brand-orange text-white shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40"
      : "bg-white text-brand-sky border-2 border-brand-sky hover:bg-brand-sky/5",
    className
  );

  if (as === "button") {
    return (
      <button type="submit" onClick={handleClick} className={styles}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} onClick={handleClick} className={styles}>
      {children}
    </a>
  );
};
