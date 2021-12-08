import * as tasksRepo from '../task/task.memory.repository';
import Board from './board.model';

let boards: Board[] = [];

export const getAll = () => boards;

export const getById = (id: string) => boards.find((el) => el.id === id);

export const create = (board: Board) => {
  boards.push(board);
  return board;
};

export const update = (id: string, data: Board) => {
  const boardIndex = boards.findIndex((el) => el.id === id);
  return Object.assign(boards[boardIndex], data);
};

export const remove = (id: string) => {
  boards = boards.filter((el) => el.id !== id);
  tasksRepo.removeBoard(id);
};
