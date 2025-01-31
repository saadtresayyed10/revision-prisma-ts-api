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

    res.json({ data: authors }).status(200);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//Get single Author if they have published books.
export const getSingleAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const author = await authorClient.findUnique({
      where: {
        id: authorId,
      },
      include: {
        books: true,
      },
    });

    res.json({ data: author }).status(200);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//Add author
export const addAuthor = async (req, res) => {
  try {
    const authorData = req.body;
    const author = await authorClient.create({
      data: authorData,
    });

    res.json({ data: author }).status(201);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//Update author
export const updateAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const authorData = req.body;
    const author = await authorClient.update({
      where: {
        id: authorId,
      },
      data: authorData,
    });

    res.json({ data: author }).status(200);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//Delete author
export const deleteAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const author = await authorClient.delete({
      where: {
        id: authorId,
      },
    });

    res.json({ message: "Author deleted successfully" }).status(200);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
