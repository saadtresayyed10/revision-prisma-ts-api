import { PrismaClient } from "@prisma/client";

const bookClient = new PrismaClient().books;

//Get all Books if they have published books.
export const getAllBooks = async (req, res) => {
  try {
    const books = await bookClient.findMany();

    res.json({ data: books }).status(200);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//Get single Book if they have published books.
export const getSingleBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await bookClient.findUnique({
      where: {
        id: bookId,
      },
    });

    res.json({ data: book }).status(200);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//Add book
export const addBook = async (req, res) => {
  try {
    const bookData = req.body;
    const book = await bookClient.create({
      data: {
        title: bookData.title,
        Author: {
          connect: {
            id: bookData.authorId,
          },
        },
      },
    });

    res.json({ data: book }).status(201);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//Update book
export const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookData = req.body;
    const book = await bookClient.update({
      where: {
        id: bookId,
      },
      data: bookData,
    });

    res.json({ data: book }).status(200);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//Delete book
export const deleteAuthor = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await bookClient.delete({
      where: {
        id: bookId,
      },
    });

    res.json({ message: "Author deleted successfully" }).status(200);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
