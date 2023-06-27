/*
===============================================================================================================================
JavaScripFile: getHotel.js
Objetivo:  Archivo que contiene la busqueda de datos del hotel.
Autor: Sofia Vila + Juan Pablo Delgado + Juan Esteban Valencia + Julian Penagos
Creation: 23 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
    1-getHotel= Metodo encargado de realizar la busqueda de datos e imagenes relevantes del hotel
===============================================================================================================================
*/

const Hotel = require('../../models/Hotel');

const getHotel = async (req, res) => {
	try {
		const hotelExists = await Hotel.find();
		if (hotelExists.length === 0) {
			return res.status(404).json({ error: 'Hotel data not found' });
		}
		res.status(200).json(hotelExists);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = getHotel;
