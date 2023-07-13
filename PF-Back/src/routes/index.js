const express = require('express');
const router = express.Router();
const roomRoutes = require('./roomRoutes');
const hostRoutes = require('./hostRoutes');
const hotelRoutes = require('./hotelRoutes');
const usersRoutes = require('./usersRoutes');
const paymentsRoutes = require('./paymentsRoutes');

router.use('/hosts', hostRoutes);
router.use('/rooms', roomRoutes);
router.use('/hotel', hotelRoutes);
router.use('/users', usersRoutes);
router.use('/payments', paymentsRoutes);

module.exports = router;
