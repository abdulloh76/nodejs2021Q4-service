import express from 'express';
import User from './user.model';
import * as usersService from './user.service';

const router = express.Router();

router.route('/users').get((req, res) => {
  usersService
    .getAll()
    .then((users) => res.json(users.map(User.toResponse)))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/users/:id').get((req, res) => {
  usersService
    .getById(req.params.id)
    .then((user) => {
      if (user) res.json(User.toResponse(user));
      else res.status(404).json({ message: 'user not found' });
    })
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/users').post((req, res) => {
  usersService
    .create(req.body)
    .then((user) => res.status(201).json(User.toResponse(user)))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/users/:id').put((req, res) => {
  usersService
    .update(req.params.id, req.body)
    .then((user) => res.json(User.toResponse(user)))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/users/:id').delete((req, res) => {
  usersService
    .remove(req.params.id)
    .then(() => res.status(204).json({ message: 'user successfully deleted' }))
    .catch((e) => res.status(400).json({ message: e.message }));
});

export default router;
