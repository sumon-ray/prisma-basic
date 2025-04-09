import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updatePost = async () => {
  //   const update = await prisma.post.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       title: "bangladesh",
  //     },
  //   });

  //   console.log(update);

  // update many
  const update = await prisma.post.updateMany({
    where: {
      title: "this is first content",
    },
    data: {
      title: "india",
      published: true,
    },
  });
  console.log(update);
};

updatePost();
