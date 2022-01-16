import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnEntity,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ColumnEntity()
  title: string;

  @ColumnEntity()
  order: number;

  @ColumnEntity()
  description: string;

  @ColumnEntity('varchar', { nullable: true })
  userId: string | null;

  @ColumnEntity('varchar', { nullable: true })
  boardId: string | null;

  @ColumnEntity('varchar', { nullable: true })
  columnId: string | null;

  constructor({
    id = v4(),
    title = 'TITLE',
    order = 0,
    description = 'description',
    userId = null,
    boardId = null,
    columnId = null,
  }: Partial<Task> = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
