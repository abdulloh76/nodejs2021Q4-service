import User from './user.model';

let users: User[] = [];

/**
 * @returns Returns all users as array
 */
export const getAll = () => users;

/**
 * @param id - uuid of user
 * @returns Returns the user by id
 */
export const getById = (id: string) => users.find((el) => el.id === id);

/**
 * Creates new user and pushes it to array
 * @param user - new user obj
 * @returns Returns the newly created user
 */
export const create = (user: User) => {
  users.push(user);
  return user;
};

/**
 * Updates the existing user obj from with new values
 * @param id - uuid of user
 * @param data - new values for user obj
 * @returns Returns the updated user obj
 */
export const update = (id: string, data: User) => {
  const userIndex = users.findIndex((el) => el.id === id);
  return Object.assign(users[userIndex], data);
};

/**
 * Deletes the user by id
 * @param id - uuid of user
 * @returns void
 */
export const remove = (id: string) => {
  users = users.filter((el) => el.id !== id);
};
