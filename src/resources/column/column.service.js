const columnsRepo = require('./column.memory.repository');
const Column = require('./column.model');

const getAll = () => Promise.resolve(columnsRepo.getAll());

const getById = async (id) => Promise.resolve(columnsRepo.getById(id));

const create = async (userData) => {
  const user = new Column({ ...userData });
  return Promise.resolve(columnsRepo.create(user));
};

const update = async (id, data) =>
  Promise.resolve(columnsRepo.update(id, data));

const remove = async (id) => Promise.resolve(columnsRepo.remove(id));

module.exports = { getAll, getById, create, update, remove };
