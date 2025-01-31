import express from "express";
import authorRoutes from "../routes/author.routes";
import bookRoutes from "../routes/book.routes";

const app = express();

app.use(express.json());
``;

app.get("/", (req, res) => {
  res.json({ message: "This is index router" }).status(200);
});

app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);

app.listen(3000, () => {
  console.log("Server running on port: ", 3000);
});
