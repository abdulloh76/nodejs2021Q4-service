let users = [];

const getAll = async () => users;

const getById = async (id) => users.find((el) => el.id === id);

const create = async (user) => {
  users.push(user);
  return user;
};

const update = async (id, data) => {
  const userIndex = users.findIndex((el) => el.id === id);
  return Object.assign(users[userIndex], data);
};

const remove = async (id) => {
  users = users.filter((el) => el.id !== id);
};

module.exports = { getAll, getById, create, update, remove };
