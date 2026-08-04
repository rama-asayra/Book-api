import {
  getBooksService,
  getBookByIdService,
  createBookService,
  updateBookService,
  deleteBookService,
} from "../services/books.service.js";

export async function getBooks(req, res, next) {
  try {
    const books = await getBooksService();
    /* if (books.length == 0) {
      return res.status(404).json({
        message: "no books found",
      });
    } */
    res.json(books);
  } catch (error) {
    next(error);
  }
}

export async function getBookById(req, res, next) {
  try {
    const book = await getBookByIdService(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
}

export async function createBook(req, res, next) {
  try {
    const { title, author } = req.body;
    const newBook = await createBookService(title, author);
    return res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
}

export async function updateBook(req, res, next) {
  try {
    const id = req.params.id;
    const { title, author } = req.body;

    const updatedBook = await updateBookService(id, title, author);

    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
}

export async function deleteBook(req, res, next) {
  try {
    const deletedBook = await deleteBookService(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    next(error);
  }
}
