const express = require('express');
const hostRoutes = express.Router();

const deleteHost = require('../controllers/HostsControllers/deleteHost');
const deleteReservation = require('../controllers/ReservesController/deleteReservation');
const getHostById = require('../controllers/HostsControllers/getHostById');
const postReservation = require('../controllers/ReservesController/postReservation');
const putHost = require('../controllers/HostsControllers/putHost');
const putReservation = require('../controllers/ReservesController/putReservation');
const postHost = require('../controllers/HostsControllers/postHost');

hostRoutes.delete('/reservation/:id', deleteReservation);
hostRoutes.put('/reservation', putReservation);
hostRoutes.post('/reservation', postReservation);
hostRoutes.get('/:id', getHostById);
hostRoutes.post('/', postHost);
hostRoutes.delete('/:id', deleteHost);
hostRoutes.put('/', putHost);

module.exports = hostRoutes;
