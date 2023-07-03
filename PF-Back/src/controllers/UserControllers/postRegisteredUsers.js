/*
===============================================================================================================================
JavaScripFile: postRegisteredUsers.js
Objetivo:  Archivo que permite creación de usuarios registrados
Autor: Julian Penagos, Juan Valencia
Creation: 28 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 postRegisteredUsers = Funcion que permite agregar un nuevo usuario al modelo RegisteredUsers
===============================================================================================================================
*/
const RegisteredUsers = require('../../models/RegisteredUsers');

const postRegisteredUsers = async (req, res) => {
	try {
		if (!req.body) throw new Error('Must provide user information');

		const createUser = new RegisteredUsers(req.body);
		await createUser.save();

		return res.status(201).json({ status: 'User created' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = postRegisteredUsers;
