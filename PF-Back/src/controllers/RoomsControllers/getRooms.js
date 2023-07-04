/*
===============================================================================================================================
JavaScripFile: getRooms.js
Objetivo:  Archivo que contiene el controlador para poder obtener todas las habitaciones
Autor: Julian Penagos, Sofia Vila, Juan Valencia, Juan Delgado
Creation: 23 de junio 2023
ultima actualizacion: juan esteban valencia
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
		if (!Object.keys(req.query).length) {
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

		const { price, capacity, facilities, room_name, available} = req.query;
		const query = {};

		if(available) query.available = available;
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

		const filtered = await Rooms.find(query);

		res.status(200).json({ filtered });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = getRooms;
