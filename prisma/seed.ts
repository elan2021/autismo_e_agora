import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Modules
  const modules = [
    {
      title: "Boas-Vindas e Primeiros Passos",
      description: "O que fazer logo após o diagnóstico.",
      order: 1,
      lessons: {
        create: [
          {
            title: "Assista Isso Primeiro",
            description: "Uma mensagem de boas-vindas e acolhimento.",
            videoUrl: "https://example.com/video1",
            thumbnail: "/images/thumb1.png",
            order: 1,
          },
          {
            title: "Organizando a Documentação",
            description: "Como organizar os laudos e pedidos médicos.",
            videoUrl: "https://example.com/video2",
            thumbnail: "/images/thumb2.png",
            order: 2,
          },
        ],
      },
    },
    {
      title: "Direitos e Burocracia",
      description: "Entenda os direitos do seu filho.",
      order: 2,
      lessons: {
        create: [
          {
            title: "Introdução aos Direitos",
            description: "O que a lei garante para o autista.",
            videoUrl: "https://example.com/video3",
            thumbnail: "/images/thumb3.png",
            order: 1,
          },
        ],
      },
    },
  ];

  for (const m of modules) {
    await prisma.module.create({
      data: m,
    });
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
