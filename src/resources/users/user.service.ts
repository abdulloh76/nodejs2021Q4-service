import * as tasksRepo from '../task/task.memory.repository';
import * as usersRepo from './user.memory.repository';
import User from './user.model';

export const getAll = () => Promise.resolve(usersRepo.getAll());

export const getById = (id: string) => Promise.resolve(usersRepo.getById(id));

export const create = (userData: User) => {
  const user = new User({ ...userData });
  return Promise.resolve(usersRepo.create(user));
};

export const update = (id: string, data: User) =>
  Promise.resolve(usersRepo.update(id, data));

export const remove = (id: string) => {
  tasksRepo.unassignUser(id);
  return Promise.resolve(usersRepo.remove(id));
};
