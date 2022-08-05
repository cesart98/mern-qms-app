import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest'
import app from '../express.js';

import Batch from '../models/batch.model.js';
import User from '../models/user.model.js';

const opts = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}

const testBatches = [
  {
    id: "10489GN-1" ,
    material_id: "T10382AN",
    material_name: "ep Dualfilter Pipette Tips 1000uL",
    location: "FL-31",
    client: "C413",
    quantity_total: "10 EA",
    date_recieve: "01AUG2021",
    date_expire: "01AUG2023",
    status: "Pending Inspection"
  },
  {
    id: "10361FT-1" ,
    material_id: "T30183AN",
    material_name: "DMEM, GlutaMAX Supplement 500mL",
    location: "FL-01",
    client: "C210",
    quantity_total: "5000 mL",
    date_recieve: "31JUL2020",
    date_expire: "31JUL2024",
    status: "Pending Sampling"
  },
  {
    id: "10127BG-1" ,
    material_id: "T50291AN",
    material_name: "Citric Acid Monohydrate, ACS, 20g",
    location: " FL-15",
    client: "C340",
    quantity_total: "100 g",
    date_recieve: "20JAN2021",
    date_expire: "20JAN2022",
    status: "Pending Testing"
  }
]

const testUser = {
  username: "testUsername",
  password: "testPassword",
}

beforeAll(async () => {
  await MongoMemoryServer.create()
    .then((server) => mongoose.connect(server.getUri(), opts))
    .then(() => Batch.create(testBatches))
    .then(() => User.create(testUser));
})
afterAll(async () => {
  await mongoose.disconnect();
})

describe("Batch API", () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .set('Content-Type', 'application/json')
      .send({ 
        username: testUser.username, 
        password: testUser.password
      })
    
    token = await res.body.token;
  })

  describe("GET Endpoints", () => {
    it("Should fetch all batches", async () => {
      const res = await request(app)
        .get('/api/batches')
        .set('Authorization', `bearer ${token}`)
        .set('Content-Type', 'application/json');

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('batches');
      expect(res.body.batches).toBeDefined();
      expect(res.body.batches).not.toBeNull();
      expect(res.headers["content-type"]).toMatch(/json/);
    });
    it("Should fetch specific batch", async () => {
      const batch = await Batch.findOne({id: "10489GN-1"});
      const res = await request(app)
        .get(`/api/batches/${batch._id}`)
        .set('Authorization', `bearer ${token}`)
        .set('Content-Type', 'application/json');

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('batch');
      expect(res.body.batch).toBeDefined();
      expect(res.body.batch).not.toBeNull();
      expect(res.body.batch).toEqual(
        expect.objectContaining(testBatches[0])
      );
      expect(res.headers["content-type"]).toMatch(/json/);
    });
  })
  describe("POST Endpoints", () => {
    const newBatch = {
      id: '77777GG-1' ,
      material_id: 'T77777AN',
      material_name: "Test Batch Seven",
      location: 'FL-07',
      client: 'CL-7',
      quantity_total: '700g',
      date_recieve: '07JAN10',
      date_expire: '07JAN11',
      status: 'Pending Inspection',
    }

    it("Should create new batch", async () => {
      let res = await request(app)
        .post('/api/batches')
        .set('Authorization', `bearer ${token}`)
        .send(newBatch)

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('batch');
      expect(res.body.batch).toBeDefined();
      expect(res.body.batch).not.toBeNull();
      expect(res.body.batch).toEqual(
        expect.objectContaining(newBatch)
      )
      expect(res.headers["content-type"]).toMatch(/json/);
  
    });
  })
  describe("PUT Endpoints", () => {
    const updatedProperty = {
      status: 'Released',
    }
    it("Should update specific batch", async () => {
      const batch = await Batch.findOne({id: "10489GN-1"});
      const res = await request(app)
        .put(`/api/batches/${batch._id}`)
        .set('Authorization', `bearer ${token}`)
        .send({updatedProperty});

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('batch');
      expect(res.body.batch).toBeDefined();
      expect(res.body.batch).not.toBeNull();
      expect(res.headers["content-type"]).toMatch(/json/);
    });
  })
  describe("DELETE Endpoints", () => {
    it("Should delete specific batch", async () => {
      const batch = await Batch.findOne({id: "10489GN-1"});
      const res = await request(app)
        .del(`/api/batches/${batch._id}`)
        .set('Authorization', `bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('batch');
      expect(res.body.batch).toBeDefined();
      expect(res.body.batch).not.toBeNull();
      expect(res.headers["content-type"]).toMatch(/json/);
    });
  })
})