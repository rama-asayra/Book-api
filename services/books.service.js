const books = [];

export function getBooksService() {
  return books;
}

export function getBookByIdService(id) {
  return books.find((book) => book.id === id);
}

export function createBookService(title, author) {
  const newBook = {
    id: Date.now(),
    title,
    author,
  };
  books.push(newBook);
  return newBook;
}

export function updateBookService(id, title, author) {
  const book = books.find((book) => book.id === id);

  if (!book) {
    return null;
  }

  book.title = title;
  book.author = author;

  return book;
}

export function deleteBookService(id) {
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return null;
  }

  const [deletedBook] = books.splice(index, 1);

  return deletedBook;
}
