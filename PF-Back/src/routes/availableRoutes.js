const express = require('express');
const availableRoutes = express.Router();

const getRoomsAvailable = require('../controllers/RoomsControllers/getRoomsAvailable');

availableRoutes.get('/', getRoomsAvailable);

module.exports = availableRoutes;
