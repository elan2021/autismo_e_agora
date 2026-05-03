import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const email = "admin@teste.com";
    const password = "admin123";

    const user = await prisma.user.upsert({
      where: { email },
      update: {
        hashedPassword: password,
      },
      create: {
        email,
        hashedPassword: password,
        name: "Admin Teste",
        role: "ADMIN",
      },
    });

    // Also seed modules if empty
    const modulesCount = await prisma.module.count();
    if (modulesCount === 0) {
      await prisma.module.create({
        data: {
          title: "Boas-Vindas e Primeiros Passos",
          description: "O que fazer logo após o diagnóstico.",
          order: 1,
          lessons: {
            create: [
              {
                title: "Assista Isso Primeiro",
                description: "Uma mensagem de boas-vindas e acolhimento.",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                order: 1,
              },
              {
                title: "Organizando a Documentação",
                description: "Como organizar os laudos e pedidos médicos.",
                pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                order: 2,
              },
            ],
          },
        },
      });
    }

    return NextResponse.json({ 
      message: "Admin e Módulos criados com sucesso!",
      user: { email: user.email, password }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
