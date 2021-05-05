import express, { urlencoded } from 'express';
import 'reflect-metadata';
import conection from './database';
import { router } from './routes/links.routes';

conection().then((error) => {
  console.log('conection database');
});

const app = express();

app.use(express.json());

app.use(urlencoded({ extended: false }));

app.use(router);

export { app };
