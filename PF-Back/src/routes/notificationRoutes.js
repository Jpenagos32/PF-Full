const express = require('express');
const notificationRoutes = express.Router();

const notification = require('../controllers/HostsControllers/notification');

notificationRoutes.get('/', notification);

module.exports = notificationRoutes;