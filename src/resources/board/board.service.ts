import * as boardsRepo from './board.postgres.repository';
import { Board } from '../../entities/Board.entity';

/**
 * @returns Returns Resolved Promise of all board objects
 */
export const getAll = () => boardsRepo.getAll();

/**
 * @param id - uuid of board
 * @returns Returns Resolved Promise of the board with given id
 */
export const getById = (id: string) => boardsRepo.getById(id);

/**
 * Passes new board obj to create function
 * @param board - obj for creating new board
 * @returns Returns Resolved Promise of the newly created board
 */
export const create = (boardData: Board) => boardsRepo.create(boardData);

/**
 * Passes updating board obj to update function
 * @param id - uuid of board
 * @param board - obj for updating the board
 * @returns Returns Resolved Promise of the updated board
 */
export const update = (id: string, data: Board) => boardsRepo.update(id, data);

/**
 * Passes removing board id to removing function
 * @param id - uuid of board
 * @returns Returns Resolved Promise that returns void
 */
export const remove = (id: string) => boardsRepo.remove(id);
