const express = require('express');
const successRoutes = express.Router();

const successPayment = require('../controllers/PaymentsControllers/success');

successRoutes.get('/',successPayment);

module.exports = successRoutes;