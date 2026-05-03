import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { Suspense } from "react";
import { FacebookPixel } from "@/components/analytics/FacebookPixel";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autismo, e Agora? | O Guia Prático Pós-Diagnóstico para Pais",
  description: "Transforme o medo e a confusão do diagnóstico de autismo em clareza, segurança e ação. O guia acolhedor para os primeiros passos, direitos e organização das terapias.",
  keywords: ["autismo", "diagnóstico de autismo", "guia para pais", "terapias autismo", "direitos autista", "TEA", "acolhimento"],
  authors: [{ name: "Autismo, e Agora?" }],
  openGraph: {
    title: "Autismo, e Agora? | O Guia Prático Pós-Diagnóstico",
    description: "Transforme o medo do diagnóstico em clareza e segurança com o guia prático para pais.",
    url: "https://autismoeagora.com.br", // Replace with real URL later
    siteName: "Autismo, e Agora?",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Autismo, e Agora? - Guia Prático",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autismo, e Agora? | Guia Pós-Diagnóstico",
    description: "O guia acolhedor para pais de autistas recém-diagnosticados.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${nunito.variable} font-inter antialiased bg-background-primary text-text-primary`}>
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
