/*
===============================================================================================================================
JavaScripFile: postRooms.js
Objetivo:  Archivo que contiene el controlador para poder crear las habitaciones
Autor: Julian Penagos, Sofia Vila, Juan Valencia, Juan Delgado
Creation: 23 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 postRooms
===============================================================================================================================
*/
const Room = require('../../models/Room');

const postRooms = async (req, res) => {
	try {
		const createRoom = new Room(req.body);
		await createRoom.save();
		return res.status(201).json({ status: 'Room created' });

	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = postRooms;
