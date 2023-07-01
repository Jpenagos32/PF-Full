const express = require('express');
const paymentsRoutes = express.Router();

const postPayments = require('../controllers/PaymentsControllers/postPayments');
const failureRoutes = require('./failureRoutes');
const successRoutes = require('./successRoutes');

paymentsRoutes.post('/', postPayments);
paymentsRoutes.use('/success',successRoutes)
paymentsRoutes.use('/failure', failureRoutes)

module.exports = paymentsRoutes;