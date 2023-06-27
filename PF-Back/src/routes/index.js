const express = require('express');
const router = express.Router();
const roomRoutes = require('./roomRoutes');
const hostRoutes = require('./hostRoutes');
const hotelRoutes = require('./hotelRoutes');
const filterRoutes = require('./filterRoutes');
const availableRoutes = require('./availableRoutes');

router.use('/hosts', hostRoutes);
router.use('/rooms', roomRoutes);
router.use('/hotel', hotelRoutes);
router.use('/filter', filterRoutes);
router.use('/available', availableRoutes);

module.exports = router;
