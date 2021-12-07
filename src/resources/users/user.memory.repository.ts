let users = [];

const getAll = () => users;

const getById = (id) => users.find((el) => el.id === id);

const create = (user) => {
  users.push(user);
  return user;
};

const update = (id, data) => {
  const userIndex = users.findIndex((el) => el.id === id);
  return Object.assign(users[userIndex], data);
};

const remove = (id) => {
  users = users.filter((el) => el.id !== id);
};

module.exports = { getAll, getById, create, update, remove };
