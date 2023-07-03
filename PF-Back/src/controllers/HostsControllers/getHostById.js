/*
===============================================================================================================================
JavaScripFile: getHostById.js
Objetivo:  Archivo que contiene la busqueda de huespedes.
Autor: Juan Esteban Valencia
Creation: 29 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
    1-getHostById= Metodo encargado de realizar la busqueda de huspedes por identificacion pasada por query, en caso de no pasar query la funcion traera todos los huespedes.
===============================================================================================================================
*/
const Hosts = require('../../models/Hosts');

const getHostById = async (req, res) => {
	try {
		const { id } = req.query;
		if(id){
			const hosts = await Hosts.find({ identification: id });
		    if (hosts.length === 0) {
			return res.status(404).json({ error: 'Host not found' });
		    }
		    res.status(200).json({ hosts });
		}else{
			const hosts = await Hosts.find();
			if(hosts.length===0) return res.status(404).json({ error: 'no host in database' });
			res.status(200).json({ hosts });
		}
		
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = getHostById;
