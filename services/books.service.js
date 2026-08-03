import Book from "../models/book.model.js";

export async function getBooksService() {
  const books = await Book.find();
  return books;
}

export async function getBookByIdService(id) {
  const book = await Book.findById(id);

  return book;
}

export async function createBookService(title, author) {
  const newBook = await Book.create({
    title,
    author,
  });

  return newBook;
}

export async function updateBookService(id, title, author) {
  const updatedBook = await Book.findByIdAndUpdate(
    id,
    { title, author },
    {
      returnDocument: "after",
    },
  );

  return updatedBook;
}

export async function deleteBookService(id) {
  const deletedBook = await Book.findByIdAndDelete(id);

  return deletedBook;
}
