const express = require('express');
const failureRoutes = express.Router();

const failurePayment = require('../controllers/PaymentsControllers/failure');
const {
	validatePayments,
} = require('../libraries/validators/paymentsValidator');
const validationMessages = require('../libraries/validators/validationMessages');

failureRoutes.get('/', validatePayments, validationMessages, failurePayment);

module.exports = failureRoutes;
