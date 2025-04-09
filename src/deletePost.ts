import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletePost = async () => {
  const deletedpost = await prisma.post.deleteMany({
    where: {
      id: {
        in: [25, 26],
      },
    },
  });
  console.log("Posts to delete:", deletedpost);
};

deletePost();
