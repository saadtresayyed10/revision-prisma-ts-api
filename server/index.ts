import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authorRoutes from "../routes/author.routes";
import bookRoutes from "../routes/book.routes";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "This is index router" }).status(200);
});

app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
