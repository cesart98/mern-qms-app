var request = require('supertest');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

var indexRouter = require('../routes');
var { MongoMemoryServer } = require('mongodb-memory-server');

app.use(express.urlencoded({ extended: false }));
app.use("/api", indexRouter);

describe("Batches API", () => {

  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  })
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  })
  
  describe("GET Requests", () => {
    it("Should fetch all batches", async () => {
      const response = await request(app).get('/api/batches');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
    });
    it.todo("Should fetch specific batch");
  })

  describe("POST Requests", () => {
    it.todo("Should create new batch");
  })

  describe("PUT Requests", () => {
    it.todo("Should update specific batch");
  })

  describe("DELETE Requests", () => {
    it.todo("Should delete specific batch");
  })
})