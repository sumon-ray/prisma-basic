import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "abc",
      email: "abc@gmail.com",
    },
  });
  console.log("create", createUser);

  const updateUser = prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      age: 200,
    },
  });
  console.log("update", updateUser);

  const [created, updated] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(created, updated);
};

batchTransaction();
