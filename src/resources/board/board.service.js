const boardsRepo = require('./board.memory.repository');
const User = require('./board.model');

const getAll = () => Promise.resolve(boardsRepo.getAll());

const getById = (id) => Promise.resolve(boardsRepo.getById(id));

const create = (boardData) => {
  const board = new User({ ...boardData });
  return Promise.resolve(boardsRepo.create(board));
};

const update = (id, data) => Promise.resolve(boardsRepo.update(id, data));

const remove = (id) => Promise.resolve(boardsRepo.remove(id));

module.exports = { getAll, getById, create, update, remove };
