const express = require('express')
const StaticRoomsRoutes = express.Router()

const getStaticRooms = require('../controllers/getStaticRooms')
const postStaticRooms = require('../controllers/postStaticRooms')

StaticRoomsRoutes.get('/:room_number', getStaticRooms)
StaticRoomsRoutes.post('/', postStaticRooms)

module.exports = StaticRoomsRoutes;