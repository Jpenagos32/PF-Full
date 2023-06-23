const express = require('express')
const router = express.Router()
const roomRoutes = require('./roomRoutes')
const hostRoutes = require('./hostRoutes')
const StaticRoomsRoutes = require('./staticRoomsRoutes')

router.use('/hosts', hostRoutes)
router.use('/rooms', roomRoutes)
router.use('/staticRooms', StaticRoomsRoutes)

module.exports = router