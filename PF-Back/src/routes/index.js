const express = require('express')
const router = express.Router()
const roomRoutes = require('./roomRoutes')
const hostRoutes = require('./hostRoutes')

router.use('/hosts', hostRoutes)
router.use('/rooms', roomRoutes)

module.exports = router