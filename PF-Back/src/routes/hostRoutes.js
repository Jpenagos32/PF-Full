const express = require('express');
const hostRoutes = express.Router();

const {
	validatePostHost,
	validatePutHost,
} = require('../libraries/validators/hostValidator');

const deleteHost = require('../controllers/HostsControllers/deleteHost');
const getHostById = require('../controllers/HostsControllers/getHostById');
const putHost = require('../controllers/HostsControllers/putHost');
const postHost = require('../controllers/HostsControllers/postHost');
const validationMessages = require('../libraries/validators/validationMessages');

hostRoutes.get('/', getHostById);
hostRoutes.post('/', validatePostHost, validationMessages, postHost);

// Recordar validar este delete
hostRoutes.delete('/:id', deleteHost);
hostRoutes.put('/', validatePutHost, validationMessages, putHost);

module.exports = hostRoutes;
