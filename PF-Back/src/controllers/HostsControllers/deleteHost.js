/*
===============================================================================================================================
JavaScripFile: deleteHost.js
Objetivo:  Archivo que contiene la eliminación de huespedes y la actualizacion de disponibilidad de la habitacion.
Autor: Sofia Vila + Juan Pablo Delgado + Juan Esteban Valencia + Julian Penagos
ultima actualizacion: juan esteban valencia
Creation: 22 de junio 2023
==================================================================
Manifiesto de funciones: se agruega funcionalidad de actualizacion de la room a disponible con la eliminacion del huesped
=============================
    1-deleteHost= Metodo encargado de eliminar huespedes y actualizar room.
===============================================================================================================================
*/
const Hosts = require('../../models/Hosts');
const Room = require('../../models/Room');

const deleteHost = async (req, res) => {
	try {
		const { id } = req.params;
		const status = await Hosts.findOne({ identification: id });
		console.log(status.active)
		if (!status.active) {
			return res
				.status(200)
				.json({ message: 'Huésped eliminado anteriormente' });
		}
		const host = await Hosts.findOneAndUpdate(
			{ identification: id },
			{ active: false }
		);
		
		if (!host) {
			return res.status(404).json({ error: 'Huésped no encontrado' });
		}
		
		const room = await Room.findOneAndUpdate(
			{ room_number: host.reservations[0].room_number},
			{ available: true }
		);
		res.status(200).json({
			message: `Huésped con identificacion ${host.identification} eliminado, Room ${room.room_number} disponible`,
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = deleteHost;
