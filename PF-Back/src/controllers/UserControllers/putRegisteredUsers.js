/*
===============================================================================================================================
JavaScripFile: putRegisteredUsers.js
Objetivo:  Archivo que permite acualización de usuarios registrados
Autor: Julian Penagos, Juan Valencia
Creation: 28 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 putRegisteredUsers = Funcion que permite actualizar un usuario del modelo registeredusers, si se provee un id de mongo se puede actualizar el email, de lo contrario el email no puede ser actualizado
===============================================================================================================================
*/
const RegisteredUsers = require('../../models/RegisteredUsers');

const putRegisteredUsers = async (req, res) => {
	try {
		const {
			name,
			last_name,
			email,
			id,
			phone,
			billing_adress,
			city,
			zip_code,
			country,
		} = req.body;
		const query = {};
		let userUpdated;

		if (id) {
			if (name) query.user_first_name = name;
			if (last_name) query.user_last_name = last_name;
			if (email) query.user_email = email;

			userUpdated = await RegisteredUsers.findByIdAndUpdate(id, query, {
				new: true,
			});
		} else if (!id) {
			if (!email) throw new Error('Must provide an email or an id');
			if (name) query.user_first_name = name;
			if (last_name) query.user_last_name = last_name;
			if (phone) query.phone = phone;
			if (billing_adress)
				query['billing.billing_adress'] = billing_adress;
			if (city) query['billing.city'] = city;
			if (zip_code) query['billing.zip_code'] = zip_code;
			if (country) query['billing.country'] = country;

			userUpdated = await RegisteredUsers.findOneAndUpdate(
				{
					user_email: email,
				},
				query,
				{ new: true }
			);
		}

		if (!userUpdated)
			return res.status(404).json({ status: 'User not found' });
		return res.status(201).json({ status: 'User updated', userUpdated });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = putRegisteredUsers;
