/*
===============================================================================================================================
JavaScripFile: getRegisteredUsers.js
Objetivo:  Archivo que permite obtener los usuarios registrados
Autor: Julian Penagos, Juan Valencia
Creation: 28 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 getRegisteredUsers = Funcion que permite Obtener todos los usuarios registrados, al buscarlos por email
===============================================================================================================================
*/
const RegisteredUsers = require('../../models/RegisteredUsers');

const getRegisteredUsers = async (req, res) => {
	try {
		const { email } = req.query;
		const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
		let userFound;

		if (!email) {
			userFound = await RegisteredUsers.find();
			if (!userFound)
				return res.status(404).json({ error: 'No users in database' });
		} else {
			if (!regexEmail.test(email))
				throw new Error('Must provide a valid email');
			userFound = await RegisteredUsers.findOne({ user_email: email });
			if (!userFound)
				return res.status(404).json({ error: 'User not found' });
		}

		return res.status(201).json(userFound);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = getRegisteredUsers;
