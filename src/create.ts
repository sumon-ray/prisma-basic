import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async () => {
  const users = await prisma.user.createMany({
    data: [
      {
        username: "Shakib Sikdar",
        email: "shakib@gmail.com",
        age: 15,
      },
      {
        username: "Md Rana",
        email: "joydeb220020@gmail.com",
        age: 25,
        role: "admin",
      },
    ],
  });

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

  // const postData = await prisma.post.create({
  //   data: {
  //     title: "CSS",
  //     content: "learn CSS second",
  //     authorId: 2,
  //     postCategory: {
  //       create: [
  //         {
  //           categoryId: 1,
  //         },
  //         {
  //           categoryId: 2,
  //         },
  //       ],
  //     },
  //   },
  //   include: {
  //     postCategory: true,
  //   },
  // });

  console.log(users);
};
createPost();
