// Temporary workaround for DNS SRV resolution issue with MongoDB Atlas
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import bookRoutes from "./routes/books.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use("/api/books", bookRoutes);

await connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
