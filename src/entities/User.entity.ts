import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnEntity,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ColumnEntity()
  name: string;

  @ColumnEntity()
  login: string;

  @ColumnEntity()
  password: string;

  constructor({
    id = v4(),
    name = '',
    login = '',
    password = '',
  }: Partial<User> = {}) {
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
