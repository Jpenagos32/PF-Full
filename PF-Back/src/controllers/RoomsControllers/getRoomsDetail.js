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
 getRoomsDetail
===============================================================================================================================
*/
const Rooms = require('../../models/Room');

const getRoomsDetail = async (req, res) => {
	try {
        const {room_number} = req.params
		const rooms = await Rooms.findOne({room_number});
        if(!rooms){
            return res.status(404).json({error:'Room not found'})
        }
		res.status(200).json(rooms);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = getRoomsDetail;
