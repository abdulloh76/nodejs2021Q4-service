import * as tasksRepo from '../task/task.memory.repository';
import * as usersRepo from './user.postgres.repository';
import { User } from '../../entities/User.entity';

/**
 * @returns Returns Resolved Promise of  all users
 */
export const getAll = () => Promise.resolve(usersRepo.getAll());

/**
 * @param id - uuid of user
 * @returns Returns Resolved Promise of the user by id
 */
export const getById = (id: string) => Promise.resolve(usersRepo.getById(id));

/**
 * Creates new user and passes it to user creating function
 * @param userData - user obj
 * @returns Returns Resolved Promise of the newly created user
 */
export const create = (userData: User) =>
  Promise.resolve(usersRepo.create(userData));

/**
 * @param id - uuid of user
 * @param data - new values for user object
 * @returns Returns Resolved Promise of the updated task
 */
export const update = (id: string, data: User) =>
  Promise.resolve(usersRepo.update(id, data));

/**
 * Deletes user by id
 * @param id - uuid of user
 * @returns Returns Resolved Promise that returns void
 */
export const remove = (id: string) => {
  tasksRepo.unassignUser(id);
  return Promise.resolve(usersRepo.remove(id));
};
