import { v4 } from 'uuid';

export default class User {
  id: string;

  name: string;

  login: string;

  password: string;

  constructor({ id = v4(), name, login, password }: User) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
