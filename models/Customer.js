'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phoneNumber: {type: String},
  email: {type: String, required: true, unique: true},
  city: {type: String},
  state: {type: String},
  address: {type: String},
});

CustomerSchema.statics.createCustomer = function(customerAttr, cb) {
  if(typeof customerAttr !== 'object') {
    customerAttr = {};
  }

  if(typeof cb !== 'function'){
    cb = function(){};
  }

  const customer = new this(customerAttr);

  customer.save((err) => {
    if(err) return cb(err);

    cb(null,customer);
  });
};

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
