const express = require('express');
const successRoutes = express.Router();

const successPayment = require('../controllers/PaymentsControllers/success');
const {
	validatePayments,
} = require('../libraries/validators/paymentsValidator');
const validationMessages = require('../libraries/validators/validationMessages');

successRoutes.get('/', validatePayments, validationMessages, successPayment);

module.exports = successRoutes;
