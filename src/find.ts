// console.log("console log: test")

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log(e.query);
});

const find = async () => {
  // find all
  try {
    const findFirst = await prisma.user.findMany({
      where: {
        id: 1,
      },
      include: {
        post: {
          include: {
            postCategory: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });

    // console.dir(findFirst, { depth: Infinity });
  } catch (error) {
    console.log("no post found");
  }

  // UNIQ FIELD DIYE QUERY KORTE HBE
  // const findUnique = await prisma.post.findUnique({
  //   where: {
  //     id: 2,
  //   },
  // });

  //   console.log({ findUnique });

  // if (!findUnique) {
  //   console.log("no unique post found");
  // }
};

find();
