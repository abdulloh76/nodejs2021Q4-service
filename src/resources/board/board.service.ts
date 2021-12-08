import * as boardsRepo from './board.memory.repository';
import Board from './board.model';

export const getAll = () => Promise.resolve(boardsRepo.getAll());

export const getById = (id: string) => Promise.resolve(boardsRepo.getById(id));

export const create = (boardData: Board) => {
  const board = new Board({ ...boardData });
  return Promise.resolve(boardsRepo.create(board));
};

export const update = (id: string, data: Board) =>
  Promise.resolve(boardsRepo.update(id, data));

export const remove = (id: string) => Promise.resolve(boardsRepo.remove(id));
