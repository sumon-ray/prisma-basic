import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregate = async () => {
  const avgAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },

    _count: {
      email: true,
    },
  });

  console.log(avgAge);
};
aggregate();
