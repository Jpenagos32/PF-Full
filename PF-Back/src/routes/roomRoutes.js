const express = require('express');
const roomRoutes = express.Router();

const putRooms = require('../controllers/RoomsControllers/putRooms');
const getRoomsAvailable = require('../controllers/RoomsControllers/getRoomsAvailable');
const getRoomsDetail = require('../controllers/RoomsControllers/getRoomsDetail');
const getRooms = require('../controllers/RoomsControllers/getRooms');
const postRooms = require('../controllers/RoomsControllers/postRooms');

roomRoutes.get('/', getRooms);
roomRoutes.get('/roomsDetail', getRoomsDetail);
roomRoutes.get('/roomsAvailable', getRoomsAvailable);
roomRoutes.put('/', putRooms);
roomRoutes.post('/', postRooms);

module.exports = roomRoutes;
