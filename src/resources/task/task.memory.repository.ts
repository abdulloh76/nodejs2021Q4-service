import Task from './task.model';

const tasks: { [boardId: string]: Task[] } = {};

export const getAllByBoardId = (boardId: string) => tasks[boardId];

export const getByTaskId = (boardId: string, taskId: string) => {
  if (tasks[boardId]) return tasks[boardId].find((task) => task.id === taskId);
  return false;
};

export const create = (boardId: string, task: Task) => {
  if (!tasks[boardId]) tasks[boardId] = [];
  tasks[boardId].push({ ...task, boardId });
  return task;
};

export const update = (boardId: string, taskId: string, data: Task) => {
  const taskIndex = tasks[boardId].findIndex((task) => task.id === taskId);
  return Object.assign(tasks[boardId][taskIndex], data);
};

export const remove = (boardId: string, taskId: string) => {
  tasks[boardId] = tasks[boardId].filter((task) => task.id !== taskId);
};

export const removeBoard = (boardId: string) => {
  delete tasks[boardId];
};

export const unassignUser = (userId: string) => {
  Object.keys(tasks).forEach((boardId) => {
    tasks[boardId].forEach((task) => {
      // eslint-disable-next-line no-param-reassign
      if (task.userId === userId) task.userId = null;
    });
  });
};
