import * as tasksRepo from './task.memory.repository';
import Task from './task.model';

export const getAllByBoardId = (boardId: string) =>
  Promise.resolve(tasksRepo.getAllByBoardId(boardId));

export const getByTaskId = (boardId: string, taskId: string) =>
  Promise.resolve(tasksRepo.getByTaskId(boardId, taskId));

export const create = (boardId: string, taskData: Task) => {
  const task = new Task({ ...taskData, boardId });
  return Promise.resolve(tasksRepo.create(boardId, task));
};

export const update = (boardId: string, taskId: string, data: Task) =>
  Promise.resolve(tasksRepo.update(boardId, taskId, data));

export const remove = (boardId: string, taskId: string) =>
  Promise.resolve(tasksRepo.remove(boardId, taskId));
