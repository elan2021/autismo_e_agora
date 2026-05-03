import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "primary" | "secondary";
  withBorder?: boolean;
}

export const Section = ({
  children,
  className,
  id,
  bg = "primary",
  withBorder = false,
}: SectionProps) => (
  <section
    id={id}
    className={cn(
      "py-16 md:py-24 px-6 overflow-hidden",
      bg === "primary" ? "bg-background-primary" : "bg-background-secondary",
      withBorder && "border-b border-border-subtle",
      className
    )}
  >
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);
