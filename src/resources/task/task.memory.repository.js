const tasks = {};

const getAllByBoardId = async (boardId) => tasks[boardId];

const getByTaskId = async (boardId, taskId) => {
  if (tasks[boardId]) return tasks[boardId].find((task) => task.id === taskId);
  return false;
};

const create = async (boardId, task) => {
  if (!tasks[boardId]) tasks[boardId] = [];
  tasks[boardId].push({ ...task, boardId });
  return task;
};

const update = async (boardId, taskId, data) => {
  const taskIndex = tasks[boardId].findIndex((task) => task.id === taskId);
  return Object.assign(tasks[boardId][taskIndex], data);
};

const remove = async (boardId, taskId) => {
  tasks[boardId] = tasks[boardId].filter((task) => task.id !== taskId);
};

const removeBoard = async (boardId) => {
  tasks[boardId] = undefined;
};

module.exports = {
  getAllByBoardId,
  getByTaskId,
  create,
  update,
  remove,
  removeBoard,
};
