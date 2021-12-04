let columns = [];

const getAll = () => columns;

const getById = (id) => columns.find((el) => el.id === id);

const create = (user) => {
  columns.push(user);
  return user;
};

const update = (id, data) => {
  const columnIndex = columns.findIndex((el) => el.id === id);
  return Object.assign(columns[columnIndex], data);
};

const remove = (id) => {
  columns = columns.filter((el) => el.id !== id);
};

module.exports = { getAll, getById, create, update, remove };
