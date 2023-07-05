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
const { findOneAndUpdate } = require('../../models/NewPayments');
const Room = require('../../models/Room');
const notification = require("./notification")

const postHost = async (req, res) => {
	try {
		
		const { identification, room_number, contact } = req.body;
		const existHost = await Hosts.findOne({ identification });

		if (!room_number) throw new Error('Must provide a room_number');

		if(existHost.active===false){
			await  Hosts.findOneAndUpdate({identification},{active: true})
			return res.status(200).send("Enabled user");
		}

		if (!existHost) {
			const createHost = new Hosts(req.body);

			const room = await Room.findOne({ room_number, available: true });

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
			
			const hostNotification = {
			 to: contact.email,
			 subject: 'Reservation created',
             text: 'the reservation has been created',
			 
			}

			notification(hostNotification);

			return res.status(200).json({ createHost });
		} else {
			return res.status(400).json({ status: 'host exist' });
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = postHost;
