import { Router } from "express";
import { getAllAuthor } from "../controller/author.controller";

const authorRoutes = Router();

authorRoutes.get("/", getAllAuthor);

export default authorRoutes;
