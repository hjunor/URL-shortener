import express, { Request,Response, urlencoded}  from 'express';
import 'reflect-metadata';

const port = 3002;


const app = express();

app.use(express.json());

app.use(urlencoded({extended:false}));

app.get('/', (req: Request, res: Response)=>{
  res.json({ok: 'ok'})
})

app.listen(port, ()=>{
  console.log('server start 🔥 ', port)
})