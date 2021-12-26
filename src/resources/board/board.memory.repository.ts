import * as tasksRepo from '../task/task.memory.repository';
import Board from './board.model';

let boards: Board[] = [];

/**
 * @returns Returns all board objects
 */
export const getAll = () => boards;

/**
 * @param id - uuid of board
 * @returns Returns the board with given id
 */
export const getById = (id: string) => boards.find((el) => el.id === id);

/**
 * Creates new board and pushes it to array
 * @param board - obj for creating new board
 * @returns Returns the newly created board
 */
export const create = (board: Board) => {
  boards.push(board);
  return board;
};

/**
 * Updates the existing board obj with new values
 * @param id - uuid of board
 * @param board - obj for updating the board
 * @returns Returns the updated board
 */
export const update = (id: string, data: Board) => {
  const boardIndex = boards.findIndex((el) => el.id === id);
  return Object.assign(boards[boardIndex], data);
};

/**
 * Deletes the board by id
 * @param id - uuid of board
 * @returns void
 */
export const remove = (id: string) => {
  boards = boards.filter((el) => el.id !== id);
  tasksRepo.removeBoard(id);
};
