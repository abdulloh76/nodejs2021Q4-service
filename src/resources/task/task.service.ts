import * as tasksRepo from './task.memory.repository';
import Task from './task.model';

/**
 * @param boardId - board id tasks
 * @returns Returns Resolved Promise of  all tasks by board id
 */
export const getAllByBoardId = (boardId: string) =>
  Promise.resolve(tasksRepo.getAllByBoardId(boardId));

/**
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns Resolved Promise of the task by id from board by id
 */
export const getByTaskId = (boardId: string, taskId: string) =>
  Promise.resolve(tasksRepo.getByTaskId(boardId, taskId));

/**
 * Creates new task and passes it to task creating function
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns Resolved Promise of the newly created task
 */
export const create = (boardId: string, taskData: Task) => {
  const task = new Task({ ...taskData, boardId });
  return Promise.resolve(tasksRepo.create(boardId, task));
};

/**
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns Resolved Promise of the updated task
 */

export const update = (boardId: string, taskId: string, data: Task) =>
  Promise.resolve(tasksRepo.update(boardId, taskId, data));

/**
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns Resolved Promise that returns void
 */
export const remove = (boardId: string, taskId: string) =>
  Promise.resolve(tasksRepo.remove(boardId, taskId));
