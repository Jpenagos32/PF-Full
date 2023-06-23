/*
===============================================================================================================================
JavaScripFile: ClassAis.js
Objetivo:  Archivo que contiene la clase y metodos que permiten validaciones y control de los elementos en la interface grafica del modulo de ais.
Autor: Julian Penagos
Creation: 13 de junio 2023
==================================================================
Manifiesto de funciones:
Clase: Ais
=============================
==Metodos:
=============================
    1-fxCobroGeofonico= Metodo encargado de realizar el registro del chequeo geofonico.
    2-fxSetQueryCncp  = Metodo encargado de activar el modo de consulta en la forma de cobro de concpetos.
    3-fxExeQueryCncp  = Metodo encargado de ejecutar la busqueda en la forma de cobro de concpetos.
    4-fxGetMaterCncp  = Metodo encargado de traer los materiales asociados a un concepto.
    5-fxChkConceptos  = Metodo encargado de validar la forma de liquidacion y calcular los valores.
    6-fxSumProductos  = Metodo encargado de realizar el calculo de los productos anexados a los conceptos
    7-fxSumMateriales = Metodo encargado de calcular los valores de los  materiales asignados a una cotizacion.
    8-fxSaveConceptos = Metodo encargado de guardar los conceptos.
    9-fxDeleConceptos = Metodo encargado de elminar conceptos.
   10-fxSaveReforMovDet = Metodo que se encarga de capturar los datos del reformado Manual y enviarlos al controlador.
   11-fxSaveConceptosReformado = Metodo que permite registrar los coneptos para un reformado.
===============================================================================================================================
*/
const Rooms = require('../../models/Room');

const postReservation = async (req, res) => {
	try {
		const rooms = await Rooms.find();
		res.status(200).json(rooms);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = postReservation;
