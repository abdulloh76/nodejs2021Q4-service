import express, { Request } from 'express';
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

app.use(cors());
app.use(morgan(loggerFormat, { stream: createWriteStream('access.log') }));
app.use(express.json());
app.use(userRouter);
app.use(boardRouter);
app.use(taskRouter);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res, next) => {
  console.log(req.params.query);
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }

  next();
});

process.on('uncaughtException', (error) => {
  console.error(`captured error: ${error.message}`);
  // fs.writeFileSync...
  // process.exit(1);
});

process.on('unhandledRejection', (error: Error) => {
  console.error(`captured error: ${error.message}`);
  // fs.writeFileSync...
  // process.exit(1);
});

export default app;
