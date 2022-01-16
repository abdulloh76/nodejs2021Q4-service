import { createConnection } from 'typeorm';
import { PORT } from './common/config';
import app from './app';

createConnection({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: false,
})
  .then(() => {
    app.listen(PORT, () =>
      // eslint-disable-next-line no-console
      console.log(`App is running on http://localhost:${PORT}`)
    );
  })
  .catch((error: Error) => {
    process.stderr.write(`${error.name}`);
    process.exit(1);
  });
