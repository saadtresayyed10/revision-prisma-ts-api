import { Router } from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getSingleBook,
  updateBook,
} from "../controller/book.controller";

const bookRoutes = Router();

bookRoutes.get("/", getAllBooks);
bookRoutes.get("/:id", getSingleBook);
bookRoutes.post("/", addBook);
bookRoutes.put("/:id", updateBook);
bookRoutes.delete("/:id", deleteBook);

export default bookRoutes;
