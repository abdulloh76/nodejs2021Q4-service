const tasks = {};

const getAllByBoardId = (boardId) => tasks[boardId];

const getByTaskId = (boardId, taskId) => {
  if (tasks[boardId]) return tasks[boardId].find((task) => task.id === taskId);
  return false;
};

const create = (boardId, task) => {
  if (!tasks[boardId]) tasks[boardId] = [];
  tasks[boardId].push({ ...task, boardId });
  return task;
};

const update = (boardId, taskId, data) => {
  const taskIndex = tasks[boardId].findIndex((task) => task.id === taskId);
  return Object.assign(tasks[boardId][taskIndex], data);
};

const remove = (boardId, taskId) => {
  tasks[boardId] = tasks[boardId].filter((task) => task.id !== taskId);
};

const removeBoard = (boardId) => {
  tasks[boardId] = undefined;
};

const unassignUser = (userId) => {
  Object.keys(tasks).forEach((boardId) => {
    tasks[boardId].forEach((task) => {
      // eslint-disable-next-line no-param-reassign
      if (task.userId === userId) task.userId = null;
    });
  });
};

module.exports = {
  getAllByBoardId,
  getByTaskId,
  create,
  update,
  remove,
  removeBoard,
  unassignUser,
};
