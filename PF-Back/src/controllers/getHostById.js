/*
===============================================================================================================================
JavaScripFile: getHostById.js
Objetivo:  Archivo que contiene la busqueda de huespedes.
Autor: Sofia Vila + Juan Pablo Delgado + Juan Esteban Valencia
Creation: 22 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
    1-getHostById= Metodo encargado de realizar la busqueda de huspedes por identificacion.
===============================================================================================================================
*/
const Hosts = require('../models/Hosts')

const getHostById = async (req, res) => {
    try {
        const { id } = req.params
        const hosts = await Hosts.find({ identification: id })
        if (hosts.length === 0) {
            return res.status(404).json({ error: 'Huesped no encontrado' })
        }
        res.status(200).json({ hosts })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getHostById;