import { Task } from '../../entities/Task.entity';
import * as tasksRepo from './task.postgres.repository';

/**
 * @param boardId - board id tasks
 * @returns Returns Resolved Promise of  all tasks by board id
 */
export const getAllByBoardId = (boardId: string) =>
  tasksRepo.getAllByBoardId(boardId);

/**
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns Resolved Promise of the task by id from board by id
 */
export const getByTaskId = (boardId: string, taskId: string) =>
  tasksRepo.getByTaskId(taskId);

/**
 * Creates new task and passes it to task creating function
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns Resolved Promise of the newly created task
 */
export const create = (boardId: string, taskData: Task) =>
  tasksRepo.create(taskData);

/**
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns Resolved Promise of the updated task
 */

export const update = (boardId: string, taskId: string, data: Task) =>
  tasksRepo.update(taskId, data);

/**
 * @param boardId - uuid of board
 * @param taskId - uuid of task
 * @returns Returns Resolved Promise that returns void
 */
export const remove = (boardId: string, taskId: string) =>
  tasksRepo.remove(taskId);
