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
const notification = require('./notification');

const postHost = async (req, res) => {
	try {
		const {
			identification,
			room_number,
			contact,
			check_in_date,
			check_out_date,
		} = req.body;
		const existHost = await Hosts.findOne({ identification });

		if (!room_number) throw new Error('Must provide a room_number');

		if (!existHost) {
			const createHost = new Hosts(req.body);

			const room = await Room.findOne({ room_number, available: true });

			if (!room) {
				return res
					.status(404)
					.json({ status: 'Room not Found, or room not available' });
			}

			createHost.reservations = [
				{
					_id: room._id,
					room_number: room.room_number,
					room_type: room.room_type,
					room_price: room.price,
					room_name: room.name,
					room_check_in: check_in_date,
					room_check_out: check_out_date,
				},
			];

			const checkoutDate = new Date(check_out_date);
			const checkInDate = new Date(check_in_date);
            const currentDate = new Date();
            const twoDaysBeforeCheckIn = new Date(checkInDate);
            twoDaysBeforeCheckIn.setDate(checkInDate.getDate() - 2);
			

           //con esta logica solo se setea no disponible la habitacion dos dias antes del check_in
           if (currentDate >= twoDaysBeforeCheckIn && currentDate <= checkoutDate) {
           await Room.findOneAndUpdate(
           { room_number: room.room_number },
           { $set: { available: false } }
           );
           }

		//    await Room.findOneAndUpdate(
		// 	{ room_number: room.room_number },
		// 	{ $set: { available: false } }
		//     );
			
			await createHost.save();

			const hostNotification = {
				to: contact.email,
				subject: 'Reservation created',
				text: 'the reservation has been created',
				template: 'createdHost.ejs',
			};

			notification(hostNotification);

			return res.status(200).json({ createHost });
		} else if (existHost.active === false) {
			await Hosts.findOneAndUpdate({ identification }, { active: true });
			// await Room.findOneAndUpdate({ room_number }, { available: false });
			return res.status(200).send('Enabled user');
		} else {
			// Agregar la nueva reserva al host existente
			const room = await Room.findOne({ room_number, available: true });

			if (!room) {
				return res
					.status(404)
					.json({ status: 'Room not Found, or room not available' });
			}

			const query = {};

			if (check_in_date) query.check_in_date = check_in_date;
			if (check_out_date) query.check_out_date = check_out_date;

			if (!existHost.reservations) {
				query.reservations = [
					{
						_id: room._id,
						room_number: room.room_number,
						room_type: room.room_type,
						room_price: room.price,
						room_name: room.name,
						room_check_in: check_in_date,
						room_check_out: check_out_date,
					},
				];
			}

			if (existHost.reservations) {
				let reservationsArray = [
					...existHost.reservations,
					{
						_id: room._id,
						room_number: room.room_number,
						room_type: room.room_type,
						room_price: room.price,
						room_name: room.name,
						room_check_in: check_in_date,
						room_check_out: check_out_date,
					},
				];
				query.reservations = reservationsArray;
			}

			await Room.findOneAndUpdate(
				{
					room_number: room.room_number,
				},
				{ $set: { available: false } }
			);

			const hostUpdated = await Hosts.findOneAndUpdate(
				{ identification },
				query,
				{ new: true }
			);

			const hostNotification = {
				to: contact.email,
				subject: 'Reservation created',
				text: 'the reservation has been created',
				template: 'createdHost.ejs',
			};

			notification(hostNotification);

			return res.status(200).json({ hostUpdated });
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = postHost;
