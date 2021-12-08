import express from 'express';
import * as tasksService from './task.service';

const router = express.Router();

router.route('/boards/:boardId/tasks').get((req, res) => {
  tasksService
    .getAllByBoardId(req.params.boardId)
    .then((tasks) => res.json(tasks))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards/:boardId/tasks/:taskId').get((req, res) => {
  tasksService
    .getByTaskId(req.params.boardId, req.params.taskId)
    .then((task) => {
      if (task) res.json(task);
      else res.status(404).json({ message: 'task not found' });
    })
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards/:boardId/tasks').post((req, res) => {
  tasksService
    .create(req.params.boardId, req.body)
    .then((task) => res.status(201).json(task))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards/:boardId/tasks/:taskId').put((req, res) => {
  tasksService
    .update(req.params.boardId, req.params.taskId, req.body)
    .then((task) => res.json(task))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/boards/:boardId/tasks/:taskId').delete((req, res) => {
  tasksService
    .remove(req.params.boardId, req.params.taskId)
    .then(() => res.status(204).json({ message: 'task successfully deleted' }))
    .catch((e) => res.status(400).json({ message: e.message }));
});

export default router;
