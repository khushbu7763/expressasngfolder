const users = [
  {
    user_id: 1,
    username: "khush",
    email: "khush@example.com",
  },
];

const listAllUsers = () => {
  return users;
};

const findUserById = (id) => {
  return users.find((user) => user.user_id === Number(id));
};

const addUser = (user) => {
  user.user_id = users.length + 1;
  users.push(user);
  return user;
};

export { listAllUsers, findUserById, addUser };
