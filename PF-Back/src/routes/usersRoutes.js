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
const usersRoutes = express.Router();

usersRoutes.post('/', postRegisteredUsers);
usersRoutes.get('/', getRegisteredUsers);
usersRoutes.put('/', putRegisteredUsers);
usersRoutes.delete('/', deleteRegisteredUsers);

module.exports = usersRoutes;
