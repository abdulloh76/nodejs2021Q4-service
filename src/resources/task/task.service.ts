const tasksRepo = require('./task.memory.repository');
const User = require('./task.model');

const getAllByBoardId = (boardId) =>
  Promise.resolve(tasksRepo.getAllByBoardId(boardId));

const getByTaskId = (boardId, taskId) =>
  Promise.resolve(tasksRepo.getByTaskId(boardId, taskId));

const create = (boardId, taskData) => {
  const task = new User({ ...taskData, boardId });
  return Promise.resolve(tasksRepo.create(boardId, task));
};

const update = (boardId, taskId, data) =>
  Promise.resolve(tasksRepo.update(boardId, taskId, data));

const remove = (boardId, taskId) =>
  Promise.resolve(tasksRepo.remove(boardId, taskId));

module.exports = { getAllByBoardId, getByTaskId, create, update, remove };
