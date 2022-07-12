var request = require('supertest');
var express = require('express');
var app = express();
require('dotenv').config();

var indexRouter = require('../routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", indexRouter);

const testServer = require('../utils/testServer.js');

describe("Batches API", () => {

  beforeAll(async () => {
    testServer.connect();
  })
  afterAll(async () => {
    testServer.disconnect();
  })

  describe("GET Requests", () => {
    it("Should fetch all batches", async () => {
      const response = await request(app)
        .get('/api/batches')
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });
    it("Should fetch specific batch", async () => {
      const response = await request(app)
        .get('/api/batches/62b248c3e18f98e690d0ee7c')
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });
  })

  describe("POST Requests", () => {
    const testBatch = {
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
      let response = await request(app)
        .post('/api/batches')
        .send(testBatch)
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);

      response = await request(app)
        .get(`/api/batches/${response.body._id}`)
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.body.id).toEqual(testBatch.id);
  
    });

  })

  describe("PUT Requests", () => {
    it.todo("Should update specific batch");
  })

  describe("DELETE Requests", () => {
    it.todo("Should delete specific batch");
  })
})