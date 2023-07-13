/*
===============================================================================================================================
JavaScripFile: deleteRegisteredUsers.js
Objetivo:  Archivo que permite creación de usuarios registrados
Autor: Julian Penagos, Juan Valencia
Creation: 28 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
 deleteRegisteredUsers = Funcion que permite eliminar un usuario del modelo RegisteredUsers, utiliza el email para eliminarlo
===============================================================================================================================
*/
const RegisteredUsers = require('../../models/RegisteredUsers');

const deleteRegisteredUsers = async (req, res) => {
	try {
		const { email } = req.query;

		if (!email) throw new Error('Must provide an email to delete user');

		const deletedUser = await RegisteredUsers.findOneAndDelete({
			user_email: email,
		});

		if (!deletedUser)
			return res.status(404).json({ error: 'User not found' });

		return res
			.status(201)
			.json({ status: 'User deleted successfully', deletedUser });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = deleteRegisteredUsers;
