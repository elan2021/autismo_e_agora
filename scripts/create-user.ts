import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@teste.com";
  const password = "admin123";

  console.log(`Creating test user: ${email}...`);

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      hashedPassword: password, // In production, hash this!
    },
    create: {
      email,
      hashedPassword: password,
      name: "Admin Teste",
      role: "ADMIN",
    },
  });

  console.log("User created successfully!");
  console.log("Email:", email);
  console.log("Senha:", password);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
