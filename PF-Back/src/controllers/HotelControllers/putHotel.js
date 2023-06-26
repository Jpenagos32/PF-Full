/*
===============================================================================================================================
JavaScripFile: putHotel.js
Objetivo:  Archivo que contiene la actualización de datos básicos del hotel.
Autor: Sofia Vila + Juan Pablo Delgado + Juan Esteban Valencia + Julian Penagos
Creation: 23 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
    1-putHotel= Metodo encargado de actualizar los datos básicos del Hotel.
===============================================================================================================================
*/

const Hotel = require('../../models/Hotel');

const putHotel = async (req, res) => {
	try {
		const { niu, father, son, grandSon, value } = req.query;

		if (!father) {
			return res.status(400).json('Must provide valid query parameters');
		}

		let query;

		if (grandSon) {
			query = { $set: { [`${father}.${son}.${grandSon}`]: value } };
		} else if (son) {
			query = { $set: { [`${father}.${son}`]: value } };
		} else {
			query = { $set: { [father]: value } };
		}

		const hotel = await Hotel.updateOne({ niu }, query);

		if (!hotel) {
			return res.status(404).json({ error: 'Hotel not found' });
		}
		if (!hotel.acknowledged)
			return res
				.status(405)
				.json('Query parameter not found in database');

		res.status(200).json({ message: 'Hotel updated', hotel });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = putHotel;
