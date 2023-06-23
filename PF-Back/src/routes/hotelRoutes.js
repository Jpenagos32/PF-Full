const express = require('express');
const hotelRoutes = express.Router();

const postHotel = require('../controllers/HotelControllers/postHotel');
const getHotel = require('../controllers/HotelControllers/getHotel');
const putHotel = require('../controllers/HotelControllers/putHotel');

hotelRoutes.post('/', postHotel);
hotelRoutes.get('/', getHotel);
hotelRoutes.put('/', putHotel);

module.exports = hotelRoutes;
