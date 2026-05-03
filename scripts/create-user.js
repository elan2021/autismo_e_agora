const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const prisma = new PrismaClient({
  datasource: {
    url: process.env.DATABASE_URL
  }
});

async function main() {
  const email = "admin@teste.com";
  const password = "admin123";

  console.log(`Creating test user: ${email}...`);

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
