const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/boards').get(async (req, res) => {
  boardsService
    .getAll()
    .then((boards) => res.json(boards))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards/:id').get(async (req, res) => {
  boardsService
    .getById(req.params.id)
    .then((board) => {
      if (board) res.json(board);
      else res.status(404).json({ message: 'board not found' });
    })
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards').post(async (req, res) => {
  boardsService
    .create(req.body)
    .then((board) => res.status(201).json(board))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards/:id').put(async (req, res) => {
  boardsService
    .update(req.params.id, req.body)
    .then((board) => res.json(board))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards/:id').delete(async (req, res) => {
  boardsService
    .remove(req.params.id, req.body)
    .then(() => res.status(204).json({ message: 'board successfully deleted' }))
    .catch((e) => res.status(400).json({ message: e.message }));
});

module.exports = router;
