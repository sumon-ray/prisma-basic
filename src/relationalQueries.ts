import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent Api // populate kora
  const result = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
    })
    .post();
  console.log(result);

  const filters = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: false,
        },
      },
    },
  });
  console.dir(filters, { depth: Infinity });
};

relationalQueries();

// nasted filters er khetre includes use korbo // one ba zero lavel e filters korar jonno where use korbo. multi levels filters er jonno includes then where use korbo
