import { Router } from "express";
import {
  getAllAuthor,
  addAuthor,
  deleteAuthor,
  getSingleAuthor,
  updateAuthor,
} from "../controller/author.controller";

const authorRoutes = Router();

authorRoutes.get("/", getAllAuthor);
authorRoutes.get("/:id", getSingleAuthor);
authorRoutes.get("/", addAuthor);
authorRoutes.get("/:id", updateAuthor);
authorRoutes.get("/:id", deleteAuthor);

export default authorRoutes;
