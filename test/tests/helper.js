'use strict';

const mongoose = require('mongoose');
const db = require('../../db');
const clearDB = require('mocha-mongoose')(db.uri);
const chai = require('chai');
const highlight = require('chai-highlight');

chai.use(highlight);
global.expect = chai.expect;
global.assert = chai.assert;

beforeEach((done) => {
  if(mongoose.connection.db) return done(); 
  mongoose.connect(db.uri,  (err)=> {
    if(err) return done(err);
    clearDB(done);
  });
});

afterEach((done) => {
  mongoose.disconnect(done);
});
