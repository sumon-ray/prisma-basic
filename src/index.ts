// console.log("console log: test")

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "this is title 2",
  //       content: "this is content...2",
  //       author: "Shakib Hasan",
  //     },
  //   });

  const getAllPost = await prisma.post.findMany();
  console.log(getAllPost);
};

main();
