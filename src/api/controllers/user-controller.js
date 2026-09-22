import bcrypt from "bcrypt";

import {
  listAllUsers,
  findUserById,
  addUser,
  modifyUser,
  removeUser,
} from "../models/user-model.js";

const getUsers = async (req, res, next) => {
  const users = await listAllUsers();
  res.json(users);
};

const getUserById = async (req, res, next) => {
  const user = await findUserById(req.params.id);

  if (!user) {
    const error = new Error("User not found.");
    error.status = 404;
    return next(error);
  }

  res.json(user);
};

const postUser = async (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);

  const newUser = await addUser(req.body);

  if (!newUser) {
    const error = new Error("User not added.");
    error.status = 400;
    return next(error);
  }

  res.status(201).json(newUser);
};

const putUser = async (req, res, next) => {
  if (
    res.locals.user.user_id !== Number(req.params.id) &&
    res.locals.user.role !== "admin"
  ) {
    const error = new Error("Not authorized.");
    error.status = 403;
    return next(error);
  }

  const result = await modifyUser(req.body, req.params.id);

  if (!result) {
    const error = new Error("User not found.");
    error.status = 404;
    return next(error);
  }

  res.json(result);
};

const deleteUser = async (req, res, next) => {
  if (
    res.locals.user.user_id !== Number(req.params.id) &&
    res.locals.user.role !== "admin"
  ) {
    const error = new Error("Not authorized.");
    error.status = 403;
    return next(error);
  }

  const result = await removeUser(req.params.id);

  if (!result) {
    const error = new Error("User not found.");
    error.status = 404;
    return next(error);
  }

  res.json(result);
};

export { getUsers, getUserById, postUser, putUser, deleteUser };
