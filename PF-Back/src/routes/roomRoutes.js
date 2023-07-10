const express = require('express');
const roomRoutes = express.Router();

const putRooms = require('../controllers/RoomsControllers/putRooms');
const getRoomsDetail = require('../controllers/RoomsControllers/getRoomsDetail');
const getRooms = require('../controllers/RoomsControllers/getRooms');
const postRooms = require('../controllers/RoomsControllers/postRooms');
const deleteRooms = require('../controllers/RoomsControllers/deleteRooms');
const {
	validateGetRoom,
	validatePostRooms,
	validatePutRooms,
	validateDeleteRooms,
} = require('../libraries/validators/roomValidator');
const validationMessages = require('../libraries/validators/validationMessages');
const adminRoutes = require('./adminRoutes');

roomRoutes.get('/', validateGetRoom, validationMessages, getRooms);
roomRoutes.use('/admin', adminRoutes)
roomRoutes.get('/:room_type', getRoomsDetail);
roomRoutes.post('/', validatePostRooms, validationMessages, postRooms);
roomRoutes.put('/', validatePutRooms, validationMessages, putRooms);
roomRoutes.delete('/', validateDeleteRooms, validationMessages, deleteRooms);


module.exports = roomRoutes;
