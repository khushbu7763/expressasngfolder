import { listAllUsers, findUserById, addUser } from "../models/user-model.js";

const getUsers = (req, res) => {
  res.json(listAllUsers());
};

const getUserById = (req, res) => {
  const user = findUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  res.json(user);
};

const postUser = (req, res) => {
  const newUser = addUser(req.body);
  res.status(201).json(newUser);
};

const putUser = (req, res) => {
  res.json({ message: "User item updated." });
};

const deleteUser = (req, res) => {
  res.json({ message: "User item deleted." });
};

export { getUsers, getUserById, postUser, putUser, deleteUser };
