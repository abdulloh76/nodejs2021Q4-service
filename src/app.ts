/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import { createWriteStream } from 'fs';
import cors from 'cors';

import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/board/board.router';
import taskRouter from './resources/task/task.router';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

morgan.token('body', (req: Request) => JSON.stringify(req.body));
morgan.token('query', (req: Request) => JSON.stringify(req.query));
morgan.token('params', (req: Request) => JSON.stringify(req.params));

const loggerFormat =
  '[:date[web]] ":method :url status::status" params::params query::query  body::body - :response-time ms';

const accessLogStream = createWriteStream('./logs/access.log');
const errorsLogStream = createWriteStream('./logs/errors.log');

app.use(cors());
app.use(
  morgan(loggerFormat, {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode >= 400,
  })
);
app.use(
  morgan(loggerFormat, {
    stream: errorsLogStream,
    skip: (req, res) => res.statusCode < 400,
  })
);
app.use(express.json());
app.use(userRouter);
app.use(boardRouter);
app.use(taskRouter);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }

  next();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
  next();
});

process.on('uncaughtException', (error) => {
  console.error(`captured error: ${error.message}`);
  errorsLogStream.write(`captured error: ${error.message}\n`);
});
// throw new Error('throwing uncaught exception');

process.on('unhandledRejection', (error: Error) => {
  console.error(`captured error: ${error.message}`);
  errorsLogStream.write(`captured error: ${error.message}\n`);
});
// Promise.reject(Error('throwing promise rejection'));

export default app;
