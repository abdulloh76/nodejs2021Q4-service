let boards = [];

const getAll = async () => boards;

const getById = async (id) => boards.find((el) => el.id === id);

const create = async (board) => {
  boards.push(board);
  return board;
};

const update = async (id, data) => {
  const boardIndex = boards.findIndex((el) => el.id === id);
  return Object.assign(boards[boardIndex], data);
};

const remove = async (id) => {
  boards = boards.filter((el) => el.id !== id);
};

module.exports = { getAll, getById, create, update, remove };
