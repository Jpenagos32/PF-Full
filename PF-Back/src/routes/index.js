const express = require('express');
const router = express.Router();
const roomRoutes = require('./roomRoutes');
const hostRoutes = require('./hostRoutes');
const hotelRoutes = require('./hotelRoutes');

router.use('/hosts', hostRoutes);
router.use('/rooms', roomRoutes);
router.use('/hotel', hotelRoutes);

module.exports = router;
