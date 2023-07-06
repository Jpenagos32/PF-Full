/*
===============================================================================================================================
JavaScripFile: putHost.js
Objetivo:  Archivo que permite actualizar la información del huesped
Autor: Sofia Vila + Juan Pablo Delgado + Juan Esteban Valencia + Julian Penagos
Creation: 22 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
    1-putHost= Permite actualizar los datos de un huesped
===============================================================================================================================
*/

const Hosts = require('../../models/Hosts');

const putHost = async (req, res) => {
	const {
		identification,
		first_name,
		last_name,
		email,
		phone,
		check_in_date,
		check_out_date,
		special_requirements,
	} = req.body;

	try {
		let query = {};

		if (!identification) {
			throw new Error('Must provide an identification');
		}

		if (first_name) {
			query.first_name = first_name;
		}

		if (last_name) {
			query.last_name = last_name;
		}

		if (email) {
			query['contact.email'] = email;
		}

		if (phone) {
			query['contact.phone'] = phone;
		}

		if (check_in_date) {
			query.check_in_date = check_in_date;
		}

		if (check_out_date) {
			query.check_out_date = check_out_date;
		}

		if (special_requirements) {
			query.special_requirements = special_requirements;
		}

		const updated = await Hosts.findOneAndUpdate({ identification }, query);

		if (!updated) return res.status(404).json({ msg: 'Host not found' });

		res.status(200).json({ msg: 'Host info has been updated' });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = putHost;
