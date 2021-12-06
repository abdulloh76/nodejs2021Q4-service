const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/users').get((req, res) => {
  usersService
    .getAll()
    .then((users) => res.json(users.map(User.toResponse)))
    .catch((e) => res.status(400).json({ message: e.message }));
});

router.route('/users/:id').get((req, res) => {
  usersService
    .getById(req.params.id)
    .then((user) => res.json(User.toResponse(user)))
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
    .remove(req.params.id, req.body)
    .then(() => res.status(204).json({ message: 'user successfully deleted' }))
    .catch((e) => res.status(400).json({ message: e.message }));
});

module.exports = router;
