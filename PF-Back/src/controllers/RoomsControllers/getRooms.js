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
 getRooms
===============================================================================================================================
*/
const Rooms = require('../../models/Room');

const getRooms = async (req, res) => {
	try {
		const allRooms = await Rooms.find();

		const roomType = new Set();
		const filteredRooms = [];

		for (const room of allRooms) {
			if (!roomType.has(room.room_type)) {
				roomType.add(room.room_type);
				filteredRooms.push(room);
			}
		}

		res.status(200).json({ filteredRooms });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = getRooms;
