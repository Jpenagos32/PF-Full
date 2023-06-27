const express = require('express');
const hostRoutes = express.Router();

const deleteHost = require('../controllers/HostsControllers/deleteHost');
const getHostById = require('../controllers/HostsControllers/getHostById');
const putHost = require('../controllers/HostsControllers/putHost');
const postHost = require('../controllers/HostsControllers/postHost');

hostRoutes.get('/:id', getHostById);
hostRoutes.post('/', postHost);
hostRoutes.delete('/:id', deleteHost);
hostRoutes.put('/', putHost);

module.exports = hostRoutes;
