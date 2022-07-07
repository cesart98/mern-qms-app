const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const indexRouter = require('../routes/indexRouter.js');

app.use(express.urlencoded({ extended: false }));
app.use('/api', indexRouter);

describe("Batches API", () => {

  describe("GET Requests", () => {
    it.todo("Should return all batches");
    it.todo("Should return specific batch");
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