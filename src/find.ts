// console.log("console log: test")

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const find = async () => {
  // find all
  try {
    const findFirst = await prisma.user.findFirst({
      where: {
        id: 1,
      },
    });

    console.log({ findFirst });
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
