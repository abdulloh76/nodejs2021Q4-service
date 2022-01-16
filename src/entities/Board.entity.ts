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
  @PrimaryGeneratedColumn()
  id: string;

  @ColumnEntity()
  title: string;

  @ColumnEntity()
  columns: Column[];

  constructor({ id = v4(), title = 'TITLE', columns }: Board) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
