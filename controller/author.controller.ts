import { PrismaClient } from "@prisma/client";

const authorClient = new PrismaClient().author;

//Get all Author if they have published books.
export const getAllAuthor = async (req, res) => {
  try {
    const authors = await authorClient.findMany({
      include: {
        books: true,
      },
    });

    res.json({ data: authors }).status(201);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
