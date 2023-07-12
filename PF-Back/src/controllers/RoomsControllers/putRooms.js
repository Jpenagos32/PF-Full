/*
===============================================================================================================================
JavaScripFile: putRooms.js
Objetivo:  Archivo que contiene el controlador para poder actualizar el estado de la disponibilidad de las habitaciones
Autor: Julian Penagos, Sofia Vila, Juan Valencia, Juan Delgado
Creation: 23 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 putRooms
===============================================================================================================================
*/
const Room = require('../../models/Room');

const putRooms = async (req, res) => {
	try {
		const { room_number } = req.body;
		if (!room_number) throw new Error('Must provide a valid room_number ');

		const {
			name,
			price,
			bed,
			bed2,
			bed3,
			bathroom,
			bathroom2,
			extra,
			room_description,
			facilities,
			available,
			review_description,
			review_estrellas,
			active,
		} = req.body;

		const query = {};

		const roomExists = await Room.findOne({ room_number });
		if (!roomExists) {
			return res.status(404).json({ error: 'Room not found' });
		}

		if (facilities) {
			let facilitiesArray = ['Wifi', 'Room Service'];

			facilities.forEach((facility) => {
				facilitiesArray.push(facility);
			});
			query.facilities = facilitiesArray;
		}

		if (review_estrellas) {
			let review_estrellasArray = [...roomExists.review_estrellas];

			review_estrellas.forEach((estrella) => {
				review_estrellasArray.push(estrella);
			});
			query.review_estrellas = review_estrellasArray;
		}

		if (review_description) {
			let review_descriptionArray = [...roomExists.review_description];

			review_description.forEach((review) => {
				review_descriptionArray.push(review);
			});
			query.review_description = review_descriptionArray;
		}

		if (name) query.name = name;
		if (price) query.price = price;
		if (bed) query['image.bed'] = bed;
		if (bed2) query['image.bed2'] = bed2;
		if (bed3) query['image.bed3'] = bed3;
		if (bathroom) query['image.bathroom'] = bathroom;
		if (bathroom2) query['image.bathroom2'] = bathroom2;
		if (extra) query['image.extra'] = extra;
		if (room_description) query.room_description = room_description;
		if (available || available === false) query.available = available;
		if (active) query.active = active;

		const updatedRoom = await Room.findOneAndUpdate(
			{ room_number },
			query,
			{ new: true }
		);

		return res
			.status(200)
			.json({ message: 'Room updated', room: updatedRoom });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = putRooms;
