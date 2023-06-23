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
		const dataUpdated = req.body;
		const { niu } = req.query;

		// const hotel = await Hotel.findOneAndUpdate({ niu }, dataUpdated);
		const hotel = await Hotel.findOneAndUpdate({ niu }, dataUpdated);
		// console.log(hotel);
		if (hotel.length === 0) {
			return res.status(404).json({ error: 'Hotel not found' });
		}
		res.status(200).json({ message: 'Hotel updated', hotel });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = putHotel;
