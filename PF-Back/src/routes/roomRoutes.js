const express = require('express');
const roomRoutes = express.Router();

const putRooms = require('../controllers/RoomsControllers/putRooms');
const getRoomsDetail = require('../controllers/RoomsControllers/getRoomsDetail');
const getRooms = require('../controllers/RoomsControllers/getRooms');
const postRooms = require('../controllers/RoomsControllers/postRooms');
const deleteRooms = require('../controllers/RoomsControllers/deleteRooms');

roomRoutes.get('/', getRooms);
roomRoutes.get('/:room_type', getRoomsDetail);
roomRoutes.post('/', postRooms);
roomRoutes.put('/', putRooms);
roomRoutes.delete('/', deleteRooms);

module.exports = roomRoutes;
