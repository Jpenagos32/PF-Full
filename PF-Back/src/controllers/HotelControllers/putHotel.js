/*
===============================================================================================================================
JavaScripFile: putHotel.js
Objetivo:  Archivo que contiene la actualización de datos básicos del hotel.
Autor:  Juan Esteban Valencia 
Creation: 26 de junio 2023
==================================================================
Manifiesto de funciones:
cambiar la forma en que se reciben los datos debemos obtener las keys del objeto enviado por body
=============================
    1-putHotel= Metodo encargado de actualizar los datos básicos del Hotel.
===============================================================================================================================
*/

const Hotel = require('../../models/Hotel');

const putHotel = async (req, res) => {
	try {
		const {niu,images} = req.body;
		
		if (!images) {
			return res.status(400).json('Must provide valid query parameters');
		}
		
		 const hotel = await Hotel.updateOne({ niu }, req.body);

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
