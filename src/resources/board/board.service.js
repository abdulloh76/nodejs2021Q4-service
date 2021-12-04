const boardsRepo = require('./board.memory.repository');
const User = require('./board.model');

const getAll = () => Promise.resolve(boardsRepo.getAll());

const getById = async (id) => Promise.resolve(boardsRepo.getById(id));

const create = async (boardData) => {
  const board = new User({ ...boardData });
  return Promise.resolve(boardsRepo.create(board));
};

const update = async (id, data) => Promise.resolve(boardsRepo.update(id, data));

const remove = async (id) => Promise.resolve(boardsRepo.remove(id));

module.exports = { getAll, getById, create, update, remove };
