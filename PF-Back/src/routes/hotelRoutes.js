const express = require('express');
const hotelRoutes = express.Router();

const postHotel = require('../controllers/HotelControllers/postHotel');
const getHotel = require('../controllers/HotelControllers/getHotel');
const putHotel = require('../controllers/HotelControllers/putHotel');
const {
	validatePostHotel,
	validatePutHotel,
} = require('../libraries/validators/hotelValidator');
const validationMessages = require('../libraries/validators/validationMessages');

hotelRoutes.post('/', validatePostHotel, validationMessages, postHotel);
hotelRoutes.get('/', getHotel);
hotelRoutes.put('/', validatePutHotel, validationMessages, putHotel);

module.exports = hotelRoutes;
