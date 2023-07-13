const express = require('express');
const paymentsRoutes = express.Router();

const postPayments = require('../controllers/PaymentsControllers/postPayments');
const failureRoutes = require('./failureRoutes');
const successRoutes = require('./successRoutes');
const {
	validatePostPayments,
} = require('../libraries/validators/paymentsValidator');
const validationMessages = require('../libraries/validators/validationMessages');
const getPayments = require('../controllers/PaymentsControllers/getPayments');

paymentsRoutes.post(
	'/',
	validatePostPayments,
	validationMessages,
	postPayments
);
paymentsRoutes.use('/success', successRoutes);
paymentsRoutes.use('/failure', failureRoutes);
paymentsRoutes.get("/", getPayments)

module.exports = paymentsRoutes;
