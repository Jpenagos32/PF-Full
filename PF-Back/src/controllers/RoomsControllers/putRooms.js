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
        const { room_number } = req.params
        const roomExists = await Room.findOne({ room_number })
        if (!roomExists) {
            return res.status(404).json({ error: 'Room not found' })
        }
        if (roomExists.available === true) {
            await Room.updateOne({ room_number }, { available: false })
        } else {
            await Room.updateOne({ room_number }, { available: true })
        }
        res.status(200).json({ message: 'room update', roomExists })

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = putRooms;
