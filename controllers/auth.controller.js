import {
  registerUserService,
  loginUserService,
} from "../services/auth.service.js";

export async function registerUser(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await registerUserService(email, password);

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

export async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;

    const result = await loginUserService(email, password);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
