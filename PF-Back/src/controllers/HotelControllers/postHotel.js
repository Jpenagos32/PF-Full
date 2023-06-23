/*
===============================================================================================================================
JavaScripFile: postHotel.js
Objetivo:  Archivo que contiene la clase y metodos que permiten validaciones y control de los elementos en la interface grafica del modulo de HotelControllers.
Autor: Julian Penagos, Sofia Vila, Juan Valencia, Juan Delgado
Creation: 23 de junio 2023
==================================================================
Manifiesto de funciones:
Clase: Ais
=============================
==Metodos:
=============================
 
===============================================================================================================================
*/
const Hotel = require('../../models/Hotel');

const postHotel = async (req, res) => {
	try {
		const { name } = req.body;
		const hotelExists = await Hotel.find({ name });
		if (hotelExists.length === 0) {
			const createHotel = new Hotel(req.body);
			await createHotel.save();
			return res.status(201).json({ status: 'Hotel created' });
		} else {
			return res.status(304).json({ status: 'Hotel exist' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = postHotel;
