/*
===============================================================================================================================
JavaScripFile: deleteRooms.js
Objetivo:  Archivo que contiene el controlador para poder actualizar el estado de la disponibilidad de las habitaciones
Autor: Julian Penagos
Creation: 30 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 deleteRooms
===============================================================================================================================
*/
const Room = require('../../models/Room');

const deleteRooms = async (req, res) => {
	try {
		const { room_number } = req.query;
		if (!room_number) throw new Error('Must provide a room_number');

		const roomExist = await Room.findOne({ room_number });

		if (!roomExist)
			return res
				.status(404)
				.json({ message: 'Room not found or it was already deleted' });

		const deletedRoom = await Room.findOneAndDelete({ room_number });

		res.status(200).json({
			message: 'Room Deleted successfully',
			deletedRoomNumber: deletedRoom.room_number,
		});
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
};

module.exports = deleteRooms;
