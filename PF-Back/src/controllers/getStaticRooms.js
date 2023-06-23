/*
===============================================================================================================================
JavaScripFile: getHostById.js
Objetivo:  Archivo que contiene la busqueda de huespedes.
Autor: Sofia Vila + Juan Pablo Delgado + Juan Esteban Valencia + Julian Penagos
Creation: 22 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
    1-getHostById= Metodo encargado de realizar la busqueda de huspedes por identificacion.
===============================================================================================================================
*/
const StaticRooms = require('../models/StaticRooms')

const getStaticRooms = async (req, res) => {
    try {
        const { room_number } = req.params
        const staticRooms = await StaticRooms.find({ room_number })
        if (staticRooms.length === 0) {
            return res.status(404).json({ error: 'Habitación no encontrada' })
        }
        return res.status(200).json({ staticRooms })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getStaticRooms;