function errorHandler(err, req, res, next) {
  console.error(err);

  if (err.name === "ValidationError") {
    const errors = {};

    for (const field in err.errors) {
      errors[field] = err.errors[field].message;
    }

    return res.status(400).json({
      message: "Validation failed",
      errors,
    });
  }

  if (err.name === "CastError" && err.kind === "ObjectId") {
    return res.status(400).json({
      message: "Invalid book ID",
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      message: "Email already exists",
    });
  }

  if (err.statusCode) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
}

export default errorHandler;
