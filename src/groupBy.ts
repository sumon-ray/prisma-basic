import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const groupData = await prisma.user.groupBy({
    by: ["username"],
    _sum: {
      age: true,
    },
    having: {
      age: {
        _sum: {
          lt: 30,
        },
      },
    },
    _count: {
      age: true,
    },
  });
  console.log(groupData);
};

groupBy();
