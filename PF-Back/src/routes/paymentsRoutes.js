const express = require('express');
const paymentsRoutes = express.Router();

const postPayments = require('../controllers/PaymentsControllers/postPayments');

paymentsRoutes.post('/', postPayments);

module.exports = paymentsRoutes;