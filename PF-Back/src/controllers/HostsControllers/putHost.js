/*
===============================================================================================================================
JavaScripFile: putHost.js
Objetivo:  Archivo que contiene la busqueda de huespedes.
Autor: Sofia Vila + Juan Pablo Delgado + Juan Esteban Valencia + Julian Penagos
Creation: 22 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
    1-putHost= Metodo encargado de realizar la busqueda de huspedes por identificacion.
===============================================================================================================================
*/
const Hosts = require('../../models/Hosts');

const putHost = async (req, res) => {
	try {
		const hosts = await Hosts.find();
		res.status(200).json(hosts);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = putHost;
