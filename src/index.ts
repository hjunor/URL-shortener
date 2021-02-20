import express, { urlencoded }  from 'express';
import 'reflect-metadata';
import './database';
import { router } from './routes/links.routes';

const port = 3002;

const app = express();

app.use(express.json());

app.use(urlencoded({extended:false}));

app.use(router)

app.listen(port, ()=>{
  console.log('server start 🔥 ', port)
})