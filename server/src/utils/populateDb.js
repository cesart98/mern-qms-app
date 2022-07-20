#! /usr/bin/env node

var async = require('async');
var { Batch } = require('../models');
require('dotenv').config();

var batches = []

function batchCreate(id, material_id, material_name, location, client, quantity_total, date_recieve, date_expire, status, cb ) {
  batchdetail = {
    id: id ,
    material_id: material_id,
    material_name: material_name,
    location: location,
    client: client,
    quantity_total: quantity_total,
    date_recieve: date_recieve,
    date_expire: date_expire,
    status: status
  }
  var batch = new Batch(batchdetail);

  batch.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Batch: ' + batch);
    batches.push(batch)
    cb(null, batch)
  });
}

function createBatches(cb) {
  async.parallel([
    function(callback) {
      batchCreate('11111AA-1', 'T11111AN', 'Test Batch One', 'FL-01',
      'CL-1', '100g', '01JAN10', '01JAN11', 'Pending Inspection', callback)
    },
    function(callback) {
      batchCreate('22222BB-1', 'T22222AN', 'Test Batch Two', 'FL-02',
      'CL-2', '200g', '02JAN10', '02JAN11', 'Pending Sampling', callback)
    },
    function(callback) {
      batchCreate('33333CC-1', 'T33333AN', 'Test Batch Three', 'FL-03',
      'CL-3', '300g', '03JAN10', '03JAN11', 'Pending Testing', callback)
    },
    function(callback) {
      batchCreate('44444DD-1', 'T44444AN', 'Test Batch Four', 'FL-04',
      'CL-4', '400g', '04JAN10', '04JAN11', 'Pending Review', callback)
    },
    function(callback) {
      batchCreate('55555EE-1', 'T55555AN', 'Test Batch Five', 'FL-05',
      'CL-5', '500g', '05JAN10', '05JAN11', 'Pending Release', callback)
    },
    function(callback) {
      batchCreate('66666FF-1', 'T66666AN', 'Test Batch Six', 'FL-06',
      'CL-6', '600g', '06JAN10', '06JAN11', 'Released', callback)
    }  
  ], cb);
}

async.series([
  createBatches
], function(err, results) {
  if (err) {
    console.log('FINAL ERR: '+err);
  }
  else {
      console.log('batches: '+ batches);   
  }
  }
);