const express = require('express');
const hostRoutes = express.Router();
const { validationResult } = require('express-validator');

const { validatePostHost } = require('../libraries/validators/hostValidator');
const deleteHost = require('../controllers/HostsControllers/deleteHost');
const getHostById = require('../controllers/HostsControllers/getHostById');
const putHost = require('../controllers/HostsControllers/putHost');
const postHost = require('../controllers/HostsControllers/postHost');

hostRoutes.get('/', getHostById);
hostRoutes.post('/', validatePostHost, (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const errorArray = errors.array();
		const errorMessages = errorArray.map((error) => error.msg);
		return res.status(400).json(errorMessages);
	}
	postHost(req, res);
});
hostRoutes.delete('/:id', deleteHost);
hostRoutes.put('/', putHost);

module.exports = hostRoutes;
