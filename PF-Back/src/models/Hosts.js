/*
===============================================================================================================================
JavaScripFile: Hosts.js
Objetivo:  Archivo que Contiene el modelo de Hosts
Autor: Julian Penagos, Juan Valencia
Creation: 28 de junio 2023
==================================================================
Manifiesto de funciones:
=============================
==Metodos:
=============================
===============================================================================================================================
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const HostsSchema = new Schema({
	identification: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		default: true,
	},
	first_name: {
		type: String,
		required: true,
		maxlength: 50,
	},
	last_name: {
		type: String,
		required: true,
		maxlength: 50,
	},
	contact: {
		email: {
			type: String,
			required: true,
			unique: false,
			match: [
				/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
				'Please enter a valid email address',
			],
		},
		phone: {
			type: Number,
			required: true,
			min: 0,
		},
		address: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		zip_code: {
			type: String,
			required: true,
		},
	},
	check_in_date: {
		type: Date,
		required: true,
	},
	check_out_date: {
		type: Date,
		required: true,
	},
	amount_of_people: {
		type: Number,
		required: true,
		min: 1,
	},
	type_of_guest: {
		adult: {
			type: Number,
			required: true,
			min: 1,
		},
		children: {
			type: Number,
			required: true,
		},
		baby: {
			type: Number,
			required: true,
		},
		pets: {
			type: Number,
			required: true,
		},
	},
	special_requirements: {
		type: String,
		required: false,
	},
	reservations: [
		{
			// Referenciar el modelo Room
			_id: {
				type: Schema.Types.ObjectId,
				ref: 'Room',
			},
			room_number: {
				type: Number,
				// unique: true,
			},
			room_type: {
				type: String,
			},
			room_price: Number,
			room_name: String,
			room_check_in: Date,
			room_check_out: Date,
		},
	],
});

module.exports = mongoose.model('Hosts', HostsSchema);
