import {
  getBooksService,
  getBookByIdService,
  createBookService,
  updateBookService,
  deleteBookService,
} from "../services/books.service.js";

export function getBooks(req, res) {
  const books = getBooksService();
  if (books.length == 0) {
    return res.status(404).json({
      message: "no books found",
    });
  }
  res.json(books);
}

export function getBookById(req, res) {
  const id = Number(req.params.id);
  const book = getBookByIdService(id);
  if (!book) {
    return res.status(404).json({
      message: "book not found",
    });
  }
  res.json(book);
}

export function createBook(req, res) {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      message: "Title and author are required",
    });
  }

  const newBook = createBookService(title, author);
  return res.status(201).json(newBook);
}

export function updateBook(req, res) {
  const id = Number(req.params.id);
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      message: "Title and author are required",
    });
  }

  const updatedBook = updateBookService(id, title, author);

  if (!updatedBook) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  return res.status(200).json(updatedBook);
}

export function deleteBook(req, res) {
  const id = Number(req.params.id);

  const deletedBook = deleteBookService(id);

  if (!deletedBook) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  return res.status(200).json({
    message: "Book deleted successfully",
    book: deletedBook,
  });
}
