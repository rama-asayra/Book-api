import express from "express";
import { getBooks } from "../controllers/books.controller.js";
import { getBookById } from "../controllers/books.controller.js";
import { createBook } from "../controllers/books.controller.js";
import { updateBook } from "../controllers/books.controller.js";
import { deleteBook } from "../controllers/books.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", authMiddleware, createBook);
router.put("/:id", authMiddleware, updateBook);
router.delete("/:id", authMiddleware, deleteBook);

export default router;
