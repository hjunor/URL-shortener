import request from 'supertest';
import { app } from '../app';
import createConnection from '../database';

describe('Links', ()=>{
  beforeAll(async () => {
    const conection = await createConnection();
    await conection.runMigrations();
  })
   
  it('Should be able to create a new link ', async ()=>{
    const response = await request(app).post("/")
    .send({
      url:"https://web.telegram.org/#/im?p=@vagastibr"
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("newUrl")

  })

  it('Should be realdy exist link', async ()=>{
    const response = await request(app).post("/")
    .send({
      url:"https://web.telegram.org/#/im?p=@vagastibr"
    })
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error")

  })

  it('Should be not exist status link', async ()=>{
    const response = await request(app).get("/76ytg/status");

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error")

  })
})