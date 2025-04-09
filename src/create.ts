import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async () => {
  //   const users = await prisma.user.createMany({
  //     data: [
  //       {
  //         username: "Sumon Ray",
  //         email: "sumonray220020@gmail.com",
  //       },
  //       {
  //         username: "Jpydeb Ray",
  //         email: "joydeb220020@gmail.com",
  //         role: "admin",
  //       },
  //     ],
  //   });

  // const profile = await prisma.profile.create({
  //   data: {
  //     bio: "i am a full stack web developer",
  //     userId: 1,
  //   },
  // });

  // const category = await prisma.category.create({
  //   data: {
  //     name: "data science",
  //   },
  // });

  const postData = await prisma.post.create({
    data: {
      title: "CSS",
      content: "learn CSS second",
      authorId: 2,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(postData);
};
createPost();
