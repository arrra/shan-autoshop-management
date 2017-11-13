'use strict';

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.attachRoutes(app);

module.exports = app;
