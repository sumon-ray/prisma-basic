import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const andFilterings = async () => {
  const andFilters = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "CSS",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  console.log("and filterings", andFilters);
};

andFilterings();
