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

const deleteHost = async (req, res) => {
    try {
        const { id } = req.params
        const status = await Hosts.findOne({ identification: id })
        if (!status.active) {
            return res.status(200).json({ message: 'Huésped eliminado anteriormente' })
        }
        const host = await Hosts.findOneAndUpdate({ identification: id }, { active: false })
        if (host.length === 0) {
            return res.status(404).json({ error: 'Huésped no encontrado' })
        }
        res.status(200).json({ message: 'Huésped eliminado' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = deleteHost;