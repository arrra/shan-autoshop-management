'use strict';

const Router = require('express').Router;
const Customer = require('../models/Customer');

const router = Router();

router.post('/', (req, res) => {
  const customerAttr = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    city: req.body.city,
    state: req.body.state,
    address: req.body.address,
  };

  Customer.createCustomer(customerAttr, (err, customer)=>{
    if(err){
      res.status(400).json(err);
      return err;
    }

    res.status(201).json(customer);
  });
});
module.exports = router;
