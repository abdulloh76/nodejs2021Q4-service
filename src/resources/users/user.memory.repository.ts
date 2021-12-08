import User from './user.model';

let users: User[] = [];

export const getAll = () => users;

export const getById = (id: string) => users.find((el) => el.id === id);

export const create = (user: User) => {
  users.push(user);
  return user;
};

export const update = (id: string, data: User) => {
  const userIndex = users.findIndex((el) => el.id === id);
  return Object.assign(users[userIndex], data);
};

export const remove = (id: string) => {
  users = users.filter((el) => el.id !== id);
};
