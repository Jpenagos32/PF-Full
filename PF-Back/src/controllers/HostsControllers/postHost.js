/*
===============================================================================================================================
JavaScripFile: postHost.js
Objetivo:  Archivo que contiene el posteo de nuevos huespedes.
Autor: Sofia Vila + Juan Pablo Delgado + Juan Esteban Valencia
Creation: 22 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
    1-postHost= Metodo encargado de realizar la carga de nuevos huespedes.
===============================================================================================================================
*/
const Hosts = require('../../models/Hosts');
const Room = require('../../models/Room');

const postHost = async (req, res) => {
	try {
		const { identification, room_type } = req.body;
		const existHost = await Hosts.find({ identification });
		if (existHost.length === 0) {
			const createHost = new Hosts(req.body);

			const room = await Room.findOne({ room_type, available: true });
			console.log(room);

			if (!room) {
				return res
					.status(404)
					.json({ status: 'Room not Found, or room not available' });
			}

			createHost.room_details = {
				_id: room._id,
				room_number: room.room_number,
				room_type: room.room_type,
				room_price: room.price,
				room_name: room.name,
			};

			await Room.findOneAndUpdate(
				{ room_number: room.room_number },
				{ $set: { available: false } }
			);
			await createHost.save();

			return res.status(200).json({ status: 'host created' });
		} else {
			return res.status(400).json({ status: 'host exist' });
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = postHost;
