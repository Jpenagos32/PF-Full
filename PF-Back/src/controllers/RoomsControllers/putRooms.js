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
        const roomExists = await Room.findOne({ room_number });
        if (!roomExists) {
            return res.status(404).json({ error: 'Room not found' });
        }

        const updatedRoom = await Room.findOneAndUpdate(
            { room_number },
            { available: !roomExists.available },
            { new: true }
        );

        return res.status(200).json({ message: 'Room updated', room: updatedRoom });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = putRooms;
