"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email ou senha inválidos.");
      } else {
        router.push("/members");
      }
    } catch (err) {
      setError("Ocorreu um erro ao tentar fazer login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-primary flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-border-subtle">
        <div className="text-center mb-8">
          <h1 className="font-nunito font-black text-3xl text-text-primary mb-2">
            Acesso de Membros
          </h1>
          <p className="text-text-secondary">
            Entre com suas credenciais para acessar os guias.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-text-primary mb-2">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 outline-none transition-all"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-text-primary mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border-subtle focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 outline-none transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium text-center">
              {error}
            </p>
          )}

          <Button
            className="w-full"
            as="button"
            variant="primary"
          >
            {isLoading ? "Entrando..." : "Acessar Plataforma"}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-text-secondary">
          Ainda não tem acesso? <br />
          <a href="/#oferta" className="text-brand-sky font-bold hover:underline">
            Adquira o guia agora
          </a>
        </p>
      </div>
    </div>
  );
}
