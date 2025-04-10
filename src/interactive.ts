import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactive = async () => {
  const transactions = await prisma.$transaction(async (tx) => {
    const findData = await tx.post.findMany();

    const countData = await tx.post.count();

    const updateData = await tx.user.update({
      where: {
        id: 111,
      },
      data: {
        age: 20000,
      },
    });
    return {
      findData,
      countData,
      updateData,
    };
  });

  console.log(transactions);
};

interactive();
