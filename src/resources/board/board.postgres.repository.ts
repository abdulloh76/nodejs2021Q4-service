import { getRepository } from 'typeorm';
import { Board } from '../../entities/Board.entity';
import * as tasksRepo from '../task/task.memory.repository';

// let boards: Board[] = [];

/**
 * @returns Returns all board objects
 */
export const getAll = () => getRepository(Board).find();

/**
 * @param id - uuid of board
 * @returns Returns the board with given id
 */
export const getById = (id: string) => getRepository(Board).findOne({ id });

/**
 * Creates new board and pushes it to array
 * @param board - obj for creating new board
 * @returns Returns the newly created board
 */
export const create = async (board: Board) => {
  const boards = getRepository(Board);
  const newBoard = await boards.create(board);
  return boards.save(newBoard);
};

/**
 * Updates the existing board obj with new values
 * @param id - uuid of board
 * @param board - obj for updating the board
 * @returns Returns the updated board
 */
export const update = async (id: string, data: Board) => {
  const boards = getRepository(Board);
  const board = await boards.findOne({ id });
  if (!board) return;
  await boards.merge(board, data);
  // eslint-disable-next-line consistent-return
  return boards.save(board);
};

/**
 * Deletes the board by id
 * @param id - uuid of board
 * @returns void
 */
export const remove = async (id: string) => {
  const result = await getRepository(Board).delete({ id });
  if (result) {
    tasksRepo.removeBoard(id);
    return true;
  }
  return false;
};
