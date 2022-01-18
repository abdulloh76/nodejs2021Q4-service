import { getRepository } from 'typeorm';
import { Task } from '../../entities/Task.entity';

/**
 * @param boardId - board id tasks
 * @returns Returns all tasks by board id
 */
export const getAllByBoardId = (boardId: string) =>
  getRepository(Task).findOne({ boardId });

/**
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns the task by id from board by id
 */
export const getByTaskId = (taskId: string) =>
  getRepository(Task).findOne({ id: taskId });

/**
 * Creates new task and pushes it to board by id
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns the newly created task
 */
export const create = async (task: Task) => {
  const tasks = getRepository(Task);
  const newTask = await tasks.create(task);
  return tasks.save(newTask);
};

/**
 * Updates the existing task obj from boardId  with new values
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns the updated task
 */
export const update = async (taskId: string, data: Task) => {
  const tasks = getRepository(Task);
  const task = await tasks.findOne({ id: taskId });
  if (!task) return;
  await tasks.merge(task, data);
  // eslint-disable-next-line consistent-return
  return tasks.save(task);
};

/**
 * Deletes the task by id from board by id
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns void
 */
export const remove = async (taskId: string) => {
  const result = await getRepository(Task).delete({ id: taskId });
  if (result) return true;
  return false;
};

/**
 * Deletes entire board by id
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns void
 */
export const removeBoard = async (boardId: string) => {
  const result = await getRepository(Task).delete({ boardId });
  if (result) return true;
  return false;
};

/**
 * Assigns null to userId for task when user is deleted
 * @param userId - uuid of user
 * @returns void
 */
export const unassignUser = (userId: string) =>
  getRepository(Task).update({ userId }, { userId: null });
