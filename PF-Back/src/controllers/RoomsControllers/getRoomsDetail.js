/*
===============================================================================================================================
JavaScripFile: getRoomsDetail.js
Objetivo:  Archivo que contiene el controlador para poder obtener el detale de las habitaciones
Autor: Julian Penagos, Sofia Vila, Juan Valencia, Juan Delgado
Creation: 23 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 getRoomsDetail obtiene una habitacion por tipo
===============================================================================================================================
*/
const Rooms = require('../../models/Room');

const getRoomsDetail = async (req, res) => {
	try {
		const { room_type } = req.params;

		if (!room_type) throw new Error('Must provide a room type');

		const rooms = await Rooms.findOne({ room_type });
		if (!rooms) {
			return res.status(404).json({ error: 'Room not found' });
		}

		res.status(200).json(rooms);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = getRoomsDetail;
