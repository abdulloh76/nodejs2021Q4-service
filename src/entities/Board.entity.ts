import {
  Entity,
  PrimaryGeneratedColumn,
  Column as ColumnEntity,
} from 'typeorm';
import { v4 } from 'uuid';
import { Column } from './Column.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ColumnEntity()
  title: string;

  @ColumnEntity('jsonb', { nullable: true })
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

  static createColumns(columns: Column[] | null) {
    if (Array.isArray(columns)) {
      return columns.map((col: Column) => new Column({ ...col }));
    }
    return [new Column()];
  }
}
