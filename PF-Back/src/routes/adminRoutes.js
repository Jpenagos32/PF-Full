const express = require('express');
const adminRoutes = express.Router();

const adminRooms = require('../controllers/RoomsControllers/adminRooms');

adminRoutes.get('/', adminRooms);

module.exports = adminRoutes;