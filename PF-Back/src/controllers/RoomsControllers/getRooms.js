/*
===============================================================================================================================
JavaScripFile: getRooms.js
Objetivo:  Archivo que contiene el controlador para poder obtener todas las habitaciones
Autor: Julian Penagos, Sofia Vila, Juan Valencia, Juan Delgado
Creation: 23 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 getRooms
===============================================================================================================================
*/
const Rooms = require('../../models/Room');

const getRooms = async (req, res) => {
    try {
        const roomExists = await Rooms.find();
        if (roomExists.length === 0) {
            return res.status(404).json({ error: 'Room data not found' });
        }
        res.status(200).json(roomExists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getRooms