# 📚 Books API

A RESTful Books API built with **Node.js**, **Express.js**, and **MongoDB** following the MVC architecture.

The project supports CRUD operations, request validation, global error handling, JWT authentication, and protected routes.

---

## 🚀 Features

- CRUD operations for books
- MongoDB with Mongoose
- MVC Architecture
- Service Layer
- Request Validation
- Global Error Handling
- CORS Configuration
- User Registration
- User Login
- Password Hashing with bcrypt
- JWT Authentication
- Protected Routes

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcrypt
- JSON Web Token (JWT)
- dotenv
- CORS
- Nodemon

---

## 📂 Project Structure

```text
project/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── auth.controller.js
│   └── books.controller.js
│
├── middlewares/
│   ├── auth.middleware.js
│   └── error.middleware.js
│
├── models/
│   ├── book.model.js
│   └── user.model.js
│
├── routes/
│   ├── auth.routes.js
│   └── books.routes.js
│
├── services/
│   ├── auth.service.js
│   └── books.service.js
│
├── .env
├── app.js
├── package.json
└── README.md
```

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=1h

BCRYPT_SALT_ROUNDS=10
```

Run the server:

```bash
npm run dev
```

---

## 🔑 Authentication

### Register

```http
POST /api/auth/register
```

Request Body

```json
{
  "email": "user@example.com",
  "password": "12345678"
}
```

---

### Login

```http
POST /api/auth/login
```

Request Body

```json
{
  "email": "user@example.com",
  "password": "12345678"
}
```

Response

```json
{
  "token": "JWT_TOKEN"
}
```

---

## 📚 Books Endpoints

### Public

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get a book by ID |

---

### Protected

Require:

```http
Authorization: Bearer <JWT_TOKEN>
```

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/books` | Create a book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

---

## ⚠️ Error Handling

The API returns meaningful HTTP status codes.

| Status Code | Description |
|-------------|-------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 409 | Conflict |
| 500 | Internal Server Error |

---

## 🔒 Security

- Passwords are hashed using **bcrypt**.
- Authentication is implemented using **JWT**.
- Protected routes require a valid Bearer Token.
- Sensitive information is stored in environment variables.

---

## 📖 Learning Objectives

This project demonstrates:

- REST API Design
- MVC Architecture
- Service Layer Pattern
- MongoDB Integration
- Authentication & Authorization
- Password Hashing
- JWT Authentication
- Error Handling
- Request Validation
- Protected Routes

---

## 👨‍💻 Author

**Rama Asayra**

Computer Engineering Student | Aspiring Full-Stack Developer
