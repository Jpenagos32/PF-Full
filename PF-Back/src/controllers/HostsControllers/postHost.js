/*
===============================================================================================================================
JavaScripFile: postHost.js
Objetivo:  Archivo que contiene el posteo de nuevos huespedes.
Autor: Sofia Vila + Juan Pablo Delgado + Juan Esteban Valencia
Creation: 22 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
    1-postHost= Metodo encargado de realizar la carga de nuevos huespedes.
===============================================================================================================================
*/
const Hosts = require('../../models/Hosts');

const postHost = async (req, res) => {
	try {
		const { identification } = req.body;
		const existHost = await Hosts.find({ identification });
		if (existHost.length === 0) {
			const createHost = new Hosts(req.body);
			await createHost.save();
			return res.status(200).json({ status: 'host created' });
		} else {
			return res.status(400).json({ status: 'host exist' });
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = postHost;
