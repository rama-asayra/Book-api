import express from "express";
import { getBooks } from "../controllers/books.controller.js";
import { getBookById } from "../controllers/books.controller.js";
import { createBook } from "../controllers/books.controller.js";
import { updateBook } from "../controllers/books.controller.js";
import { deleteBook } from "../controllers/books.controller.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
