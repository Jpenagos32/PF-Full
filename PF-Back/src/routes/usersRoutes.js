/*
===============================================================================================================================
JavaScripFile: usersRoutes.js
Objetivo:  Archivo que contiene el enrutado de /users
Autor: Julian Penagos, Juan Valencia
Creation: 28 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================

===============================================================================================================================
*/

const express = require('express');
const postRegisteredUsers = require('../controllers/UserControllers/postRegisteredUsers');
const getRegisteredUsers = require('../controllers/UserControllers/getRegisteredUsers');
const putRegisteredUsers = require('../controllers/UserControllers/putRegisteredUsers');
const deleteRegisteredUsers = require('../controllers/UserControllers/deleteRegisteredUsers');
const {
	validatePostUsers,
	validateGetUsers,
	validatePutUsers,
	validateDeleteUsers,
} = require('../libraries/validators/usersValidator');
const validationMessages = require('../libraries/validators/validationMessages');
const usersRoutes = express.Router();

usersRoutes.post(
	'/',
	validatePostUsers,
	validationMessages,
	postRegisteredUsers
);
usersRoutes.get('/', validateGetUsers, validationMessages, getRegisteredUsers);
usersRoutes.put('/', validatePutUsers, validationMessages, putRegisteredUsers);
usersRoutes.delete(
	'/',
	validateDeleteUsers,
	validationMessages,
	deleteRegisteredUsers
);

module.exports = usersRoutes;
