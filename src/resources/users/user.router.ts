import express from 'express';
import * as usersService from './user.service';
import { User } from '../../entities/User.entity';

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
    .then((user) => {
      if (user) res.status(201).json(User.toResponse(user));
      res.status(404).json({ message: 'user not found' });
    })
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/users/:id').put((req, res) => {
  usersService
    .update(req.params.id, req.body)
    .then((user) => {
      if (user) res.json(user);
      res.status(404).json({ message: 'user not found' });
    })
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/users/:id').delete((req, res) => {
  usersService
    .remove(req.params.id)
    .then(() => res.status(204).json({ message: 'user successfully deleted' }))
    .catch((e) => res.status(400).json({ message: e.message }));
});

export default router;
