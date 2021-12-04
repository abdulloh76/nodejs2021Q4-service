let columns = [];

const getAll = async () => columns;

const getById = async (id) => columns.find((el) => el.id === id);

const create = async (user) => {
  columns.push(user);
  return user;
};

const update = async (id, data) => {
  const columnIndex = columns.findIndex((el) => el.id === id);
  return Object.assign(columns[columnIndex], data);
};

const remove = async (id) => {
  columns = columns.filter((el) => el.id !== id);
};

module.exports = { getAll, getById, create, update, remove };
