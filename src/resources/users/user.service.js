const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => Promise.resolve(usersRepo.getAll());

const getById = async (id) => Promise.resolve(usersRepo.getById(id));

const create = async (userData) => {
  const user = new User({ ...userData });
  return Promise.resolve(usersRepo.create(user));
};

const update = async (id, data) => Promise.resolve(usersRepo.update(id, data));

const remove = async (id) => Promise.resolve(usersRepo.remove(id));

module.exports = { getAll, getById, create, update, remove };
