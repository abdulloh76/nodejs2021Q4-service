import { v4 } from 'uuid';

interface Column {
  id: string;
  title: string;
  order: number;
}
export default class Board {
  id: string;

  title: string;

  columns: Column[];

  constructor({ id = v4(), title = 'TITLE', columns }: Board) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
