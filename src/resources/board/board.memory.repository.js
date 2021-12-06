const tasksRepo = require('../task/task.memory.repository');

let boards = [];

const getAll = () => boards;

const getById = (id) => boards.find((el) => el.id === id);

const create = (board) => {
  boards.push(board);
  return board;
};

const update = (id, data) => {
  const boardIndex = boards.findIndex((el) => el.id === id);
  return Object.assign(boards[boardIndex], data);
};

const remove = (id) => {
  boards = boards.filter((el) => el.id !== id);
  tasksRepo.removeBoard(id);
};

module.exports = { getAll, getById, create, update, remove };
