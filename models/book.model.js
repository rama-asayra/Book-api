import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    author: {
      type: String,
      required: [true, "author is required "],
      trim: true,
      minlength: [2, "author must be at least 2 characters"],
      maxlength: [50, "author cannot exceed 50 characters"],
    },
  },
  {
    timestamps: true,
  },
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
