/*
===============================================================================================================================
JavaScripFile: getRooms.js
Objetivo:  Archivo que contiene el controlador para poder obtener todas las habitaciones
Autor: Julian Penagos, Sofia Vila, Juan Valencia, Juan Delgado
Creation: 23 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 getRooms: Funcion que permite obtener las habitaciones si no se provee nada por req.body envia una habitación por cada tipo
===============================================================================================================================
*/
const Rooms = require('../../models/Room');

const getRooms = async (req, res) => {
	try {
		const { price, capacity, facilities, room_name, room_number } = req.query;
		const query = { available: true };

		if (price) query.price = { $lte: price };
		if (capacity) query.capacity = capacity;

		if (Array.isArray(facilities)) {
			let facilitiesArray = [];
			facilities.forEach((element) => {
				facilitiesArray.push(element);
			});
			query.facilities = { $all: facilitiesArray };
		}

		if (facilities && !Array.isArray(facilities))
			query.facilities = facilities;

		if (room_name)
			query.name = {
				$regex: new RegExp(room_name, 'i'),
			};
		if (room_number) query.room_number = room_number

		const filtered = await Rooms.find(query);

		res.status(200).json({ filtered });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = getRooms;
