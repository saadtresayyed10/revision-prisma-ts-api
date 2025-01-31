import { Router } from "express";
import { getAllAuthor } from "../controller/author.controller.ts";

const authorRoutes = Router();

authorRoutes.get("/", getAllAuthor);

export { authorRoutes };
