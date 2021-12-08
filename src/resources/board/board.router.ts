import express from 'express';
import * as boardsService from './board.service';

const router = express.Router();

router.route('/boards').get((req, res) => {
  boardsService
    .getAll()
    .then((boards) => res.json(boards))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards/:id').get((req, res) => {
  boardsService
    .getById(req.params.id)
    .then((board) => {
      if (board) res.json(board);
      else res.status(404).json({ message: 'board not found' });
    })
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards').post((req, res) => {
  boardsService
    .create(req.body)
    .then((board) => res.status(201).json(board))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards/:id').put((req, res) => {
  boardsService
    .update(req.params.id, req.body)
    .then((board) => res.json(board))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards/:id').delete((req, res) => {
  boardsService
    .remove(req.params.id)
    .then(() => res.status(204).json({ message: 'board successfully deleted' }))
    .catch((e) => res.status(400).json({ message: e.message }));
});

export default router;
