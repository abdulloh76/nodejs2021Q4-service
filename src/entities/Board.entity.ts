import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnEntity,
} from 'typeorm';
import { v4 } from 'uuid';

interface Column {
  id: string;
  title: string;
  order: number;
}

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ColumnEntity()
  title: string;

  @ColumnEntity('jsonb', { array: true, nullable: true })
  columns: Column[];

  constructor({
    id = v4(),
    title = 'TITLE',
    columns = [],
  }: Partial<Board> = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
