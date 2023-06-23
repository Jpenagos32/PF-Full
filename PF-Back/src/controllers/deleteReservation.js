/*
===============================================================================================================================
JavaScripFile: deleteHost.js
Objetivo:  Archivo que contiene la eliminación de huespedes.
Autor: Sofia Vila + Juan Pablo Delgado + Juan Esteban Valencia + Julian Penagos
Creation: 22 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
    1-deleteHost= Metodo encargado de eliminar huespedes.
===============================================================================================================================
*/
const Hosts = require('../models/Hosts')
const Room = require('../models/Room')

const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params
        const hosts = await Hosts.findOne({ identification: id }).populate('rooms.room_id')
        if (!hosts) {
            res.status(404).json({ error: 'Huésped no encontrado' })
        }
        if (!hosts.rooms || !hosts.rooms.room_id) {
            res.status(400).json({ error: 'El huésped no tiene una reserva' })
        }
        hosts.rooms.active_reservation = false
        await hosts.save()
        res.status(200).json({ message: 'Reserva eliminada' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = deleteReservation;