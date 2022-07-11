var request = require('supertest');
var mongoose = require('mongoose');
var express = require('express');
var { Batch } = require('../models');
var app = express();
require('dotenv').config();

var indexRouter = require('../routes');
var { MongoMemoryServer } = require('mongodb-memory-server');
const { each } = require('async');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", indexRouter);

describe("Batches API", () => {

  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true });
    require('../populate-db.js');
  })
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  })

  describe("GET Requests", () => {
    it("Should fetch all batches", async () => {
      const response = await request(app).get('/api/batches');
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });
    it("Should fetch specific batch", async () => {
      const response = await request(app).get('/api/batches/62b248c3e18f98e690d0ee7c');
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });
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