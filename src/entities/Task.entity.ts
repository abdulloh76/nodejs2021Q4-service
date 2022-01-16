import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnEntity,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string;

  @ColumnEntity()
  title: string;

  @ColumnEntity()
  order: number;

  @ColumnEntity()
  description: string;

  @ColumnEntity()
  userId: string | null;

  @ColumnEntity()
  boardId: string;

  @ColumnEntity()
  columnId: string;

  constructor({
    id = v4(),
    title = 'TITLE',
    order,
    description,
    userId,
    boardId,
    columnId,
  }: Task) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
