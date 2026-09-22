import bcrypt from "bcrypt";

import {
  listAllUsers,
  findUserById,
  addUser,
  modifyUser,
  removeUser,
} from "../models/user-model.js";

const getUsers = async (req, res) => {
  const users = await listAllUsers();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await findUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  res.json(user);
};

const postUser = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);

  const newUser = await addUser(req.body);

  if (!newUser) {
    return res.status(400).json({ message: "User not added." });
  }

  res.status(201).json(newUser);
};

const putUser = async (req, res) => {
  if (
    res.locals.user.user_id !== Number(req.params.id) &&
    res.locals.user.role !== "admin"
  ) {
    return res.status(403).json({ message: "Not authorized." });
  }

  const result = await modifyUser(req.body, req.params.id);

  if (!result) {
    return res.status(404).json({ message: "User not found." });
  }

  res.json(result);
};

const deleteUser = async (req, res) => {
  if (
    res.locals.user.user_id !== Number(req.params.id) &&
    res.locals.user.role !== "admin"
  ) {
    return res.status(403).json({ message: "Not authorized." });
  }

  const result = await removeUser(req.params.id);

  if (!result) {
    return res.status(404).json({ message: "User not found." });
  }

  res.json(result);
};

export { getUsers, getUserById, postUser, putUser, deleteUser };
