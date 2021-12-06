const tasksRepo = require('../task/task.memory.repository');
const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => Promise.resolve(usersRepo.getAll());

const getById = (id) => Promise.resolve(usersRepo.getById(id));

const create = (userData) => {
  const user = new User({ ...userData });
  return Promise.resolve(usersRepo.create(user));
};

const update = (id, data) => Promise.resolve(usersRepo.update(id, data));

const remove = (id) => {
  tasksRepo.unassignUser(id);
  return Promise.resolve(usersRepo.remove(id));
};

module.exports = { getAll, getById, create, update, remove };
