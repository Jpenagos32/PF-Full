const express = require('express');
const roomRoutes = express.Router();

const putRooms = require('../controllers/RoomsControllers/putRooms');
const getRoomsDetail = require('../controllers/RoomsControllers/getRoomsDetail');
const getRooms = require('../controllers/RoomsControllers/getRooms');
const postRooms = require('../controllers/RoomsControllers/postRooms');

roomRoutes.get('/', getRooms);
roomRoutes.get('/:room_type', getRoomsDetail);
roomRoutes.put('/:room_number', putRooms);
roomRoutes.post('/', postRooms);

module.exports = roomRoutes;
