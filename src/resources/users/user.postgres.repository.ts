import { getRepository } from 'typeorm';
import { User } from '../../entities/User.entity';

/**
 * @returns Returns all users as array
 */
export const getAll = () => getRepository(User).find();

/**
 * @param id - uuid of user
 * @returns Returns the user by id
 */
export const getById = (id: string) => getRepository(User).findOne({ id });

/**
 * Creates new user and pushes it to array
 * @param user - new user obj
 * @returns Returns the newly created user
 */
export const create = async (user: User) => {
  const users = getRepository(User);
  const newUser = await users.create(user);
  return users.save(newUser);
};

/**
 * Updates the existing user obj from with new values
 * @param id - uuid of user
 * @param data - new values for user obj
 * @returns Returns the updated user obj
 */
export const update = async (id: string, data: User) => {
  const users = getRepository(User);
  const user = await users.findOne({ id });
  if (!user) return;
  await users.merge(user, data);
  // eslint-disable-next-line consistent-return
  return users.save(user);
};

/**
 * Deletes the user by id
 * @param id - uuid of user
 * @returns void
 */
export const remove = (id: string) => getRepository(User).delete({ id });
