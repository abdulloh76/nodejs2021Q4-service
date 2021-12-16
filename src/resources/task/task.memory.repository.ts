import Task from './task.model';

const tasks: { [boardId: string]: Task[] } = {};

/**
 * @param boardId - board id tasks
 * @returns Returns all tasks by board id
 */
export const getAllByBoardId = (boardId: string) => tasks[boardId];

/**
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns the task by id from board by id
 */
export const getByTaskId = (boardId: string, taskId: string) => {
  if (tasks[boardId]) return tasks[boardId].find((task) => task.id === taskId);
  return false;
};

/**
 * Creates new task and pushes it to board by id
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns the newly created task
 */
export const create = (boardId: string, task: Task) => {
  if (!tasks[boardId]) tasks[boardId] = [];
  tasks[boardId].push({ ...task, boardId });
  return task;
};

/**
 * Updates the existing task obj from boardId  with new values
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns the updated task
 */
export const update = (boardId: string, taskId: string, data: Task) => {
  const taskIndex = tasks[boardId].findIndex((task) => task.id === taskId);
  return Object.assign(tasks[boardId][taskIndex], data);
};

/**
 * Deletes the task by id from board by id
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns void
 */
export const remove = (boardId: string, taskId: string) => {
  tasks[boardId] = tasks[boardId].filter((task) => task.id !== taskId);
};

/**
 * Deletes entire board by id
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns void
 */
export const removeBoard = (boardId: string) => {
  delete tasks[boardId];
};

/**
 * Assigns null to userId for task when user is deleted
 * @param userId - uuid of user
 * @returns void
 */
export const unassignUser = (userId: string) => {
  Object.keys(tasks).forEach((boardId) => {
    tasks[boardId].forEach((task) => {
      // eslint-disable-next-line no-param-reassign
      if (task.userId === userId) task.userId = null;
    });
  });
};
