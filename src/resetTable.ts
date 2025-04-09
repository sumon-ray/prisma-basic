import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resetTable = async () => {
  await prisma.$executeRaw`TRUNCATE TABLE "posts" RESTART IDENTITY CASCADE`;
};

resetTable();
