# 📚 Books API

A simple RESTful API built with **Node.js** and **Express.js** that performs CRUD operations on an in-memory collection of books.

This project was created as part of **Backend Task 2 (Week 6)** to practice Express routing, controllers, services, REST APIs, and HTTP methods.

---

## 🚀 Features

- Get all books
- Get a single book by ID
- Create a new book
- Update an existing book
- Delete a book
- Request logging middleware
- JSON request body parsing
- RESTful API design
- Layered architecture (Routes → Controllers → Services)

---

## 📁 Project Structure

```text
task-2-books-api/
│
├── app.js
├── package.json
│
├── routes/
│   └── books.routes.js
│
├── controllers/
│   └── books.controller.js
│
├── services/
│   └── books.service.js
│
└── README.md
```

---

## 🛠 Technologies

- Node.js
- Express.js
- ES Modules
- Nodemon

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd task-2-books-api
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The server will start at:

```text
http://localhost:3000
```

---

## 📌 API Endpoints

### Get all books

```http
GET /api/books
```

Response

```json
[
  {
    "id": 1,
    "title": "Clean Code",
    "author": "Robert C. Martin"
  }
]
```

---

### Get a book by ID

```http
GET /api/books/:id
```

Example

```http
GET /api/books/1
```

---

### Create a new book

```http
POST /api/books
```

Request Body

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin"
}
```

Response

```http
201 Created
```

---

### Update a book

```http
PUT /api/books/:id
```

Request Body

```json
{
  "title": "Clean Code (2nd Edition)",
  "author": "Robert C. Martin"
}
```

---

### Delete a book

```http
DELETE /api/books/:id
```

---

## 🧪 Testing

The API can be tested using:

- Thunder Client
- Postman

---

## 📖 Concepts Practiced

- Express.js
- REST API
- CRUD Operations
- HTTP Methods
- HTTP Status Codes
- Middleware
- Route Parameters
- Request Body
- Controllers
- Services
- ES Modules
- Separation of Concerns

---

## ⚠️ Notes

This project stores data in an **in-memory array**.

Data will be reset whenever the server restarts because no database is used.

---

## 👩‍💻 Author

**Rama Asayra**
