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
		if (!Object.keys(req.body).length) {
			const allRooms = await Rooms.find();

			const roomType = new Set();
			const filteredRooms = [];

			for (const room of allRooms) {
				if (!roomType.has(room.room_type)) {
					roomType.add(room.room_type);
					filteredRooms.push(room);
				}
			}

			return res.status(200).json({ filteredRooms });
		}

		const { price, capacity, facilities } = req.body;
		const query = {};

		if (price) query.price = { $lte: price };
		if (capacity) query.capacity = capacity;
		if (facilities) {
			let facilitiesArray = [];
			facilities.forEach((element) => {
				facilitiesArray.push(element);
			});
			query.facilities = { $all: facilitiesArray };
		}

		const filtered = await Rooms.find(query);

		res.status(200).json({ filtered });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = getRooms;
