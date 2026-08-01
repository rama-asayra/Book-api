import express from "express";
import bookRoutes from "./routes/books.routes.js";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use("/api/books", bookRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
