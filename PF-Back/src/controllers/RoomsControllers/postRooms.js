/*
===============================================================================================================================
JavaScripFile: postRooms.js
Objetivo:  Archivo que contiene el controlador para poder crear la ruta postRooms.js
Autor: Julian Penagos, Sofia Vila, Juan Valencia, Juan Delgado
Creation: 23 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 
===============================================================================================================================
*/
const Room = require('../../models/Room');

const postRooms = async (req, res) => {
	try {
		const { room_number } = req.body;

		const roomExists = await Room.find({ room_number });

		if (roomExists.length === 0) {
			const createRoom = new Room(req.body);
			await createRoom.save();
			return res.status(201).json({ status: 'Room created' });
		} else {
			return res.status(304).json({ status: 'Room exist' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = postRooms;
