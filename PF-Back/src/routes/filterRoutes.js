const express = require('express');
const filterRoutes = express.Router();

const filterRooms = require('../controllers/RoomsControllers/filterRooms');

filterRoutes.get('/', filterRooms);

module.exports = filterRoutes;
