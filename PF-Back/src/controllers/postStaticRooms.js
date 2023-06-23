/*
===============================================================================================================================
JavaScripFile: postStaticRooms.js
Objetivo:  Archivo que contiene el posteo de nuevas Rooms.
Autor: Sofia Vila + Juan Pablo Delgado + Juan Esteban Valencia + Julian Penagos
Creation: 22 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
    1-postStaticRooms= Metodo encargado de realizar la carga de nuevas Rooms.
===============================================================================================================================
*/
const StaticRooms = require('../models/StaticRooms')

const postStaticRooms = async (req, res) => {
    try {
        const { room_number } = req.body;
        const existRooms = await StaticRooms.find({ room_number })
        if (existRooms.length === 0) {
            const createRooms = new StaticRooms(req.body)
            await createRooms.save()
            return res.status(200).json({ status: 'room created' })
        } else {
            return res.status(400).json({ status: 'room exist' })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = postStaticRooms;