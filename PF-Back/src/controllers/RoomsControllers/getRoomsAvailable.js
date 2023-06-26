/*
===============================================================================================================================
JavaScripFile: getRoomsAvailable.js
Objetivo:  Archivo que contiene el controlador para poder obtener todas las habitaciones que se encuentren disponibles
Autor: Julian Penagos, Sofia Vila, Juan Valencia, Juan Delgado
Creation: 23 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 getRoomsAvailable
===============================================================================================================================
*/
const Rooms = require('../../models/Room');

const getRoomsAvailable = async (req, res) => {
    try {
        const availableRooms = await Rooms.find({ available: true });
        if (availableRooms.length === 0) {
            return res.status(404).json({ error: 'Room data not found' });
        }
        res.status(200).json(availableRooms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getRoomsAvailable;
