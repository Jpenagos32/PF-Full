const express = require('express');
const failureRoutes = express.Router();

const failurePayment = require('../controllers/PaymentsControllers/failure');

failureRoutes.get('/',failurePayment);

module.exports = failureRoutes;