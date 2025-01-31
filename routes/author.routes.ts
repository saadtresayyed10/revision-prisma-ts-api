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
authorRoutes.post("/", addAuthor);
authorRoutes.put("/:id", updateAuthor);
authorRoutes.delete("/:id", deleteAuthor);

export default authorRoutes;
