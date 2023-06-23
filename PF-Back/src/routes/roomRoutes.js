const express = require('express')
const roomRoutes = express.Router()

const putRooms = require('../controllers/putRooms')
const getRoomsAvailable = require('../controllers/getRoomsAvailable')
const getRoomsDetail = require('../controllers/getRoomsDetail')
const getRooms = require('../controllers/getRooms')

roomRoutes.get('/', getRooms)
roomRoutes.get('/roomsDetail', getRoomsDetail)
roomRoutes.get('/roomsAvailable', getRoomsAvailable)
roomRoutes.put('/', putRooms)

module.exports = roomRoutes