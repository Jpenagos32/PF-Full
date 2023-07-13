const mongoose = require('mongoose');
const { Schema } = mongoose;

const registeredUsers = new Schema({
	user_first_name: {
		type: String,
		required: false,
		maxlength: 50,
	},
	user_last_name: {
		type: String,
		required: false,
		maxlength: 50,
	},
	user_email: {
		type: String,
		unique: true,
		required: true,
		match: [
			/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
			'Please enter a valid email address',
		],
	},
	phone: {
		type: Number,
		unique: false,
		required: false,
		min: 5,
	},
	billing: {
		billing_adress: {
			type: String,
			required: false,
		},
		city: {
			type: String,
			required: false,
		},
		zip_code: {
			type: String,
			required: false,
			min: 2,
		},
		country: {
			type: String,
			required: false,
		},
	},
	user_type: {
		type: [
			{
				type: String,
				enum: ['admin', 'user'],
			},
		],
		required: true,
	},
});

module.exports = mongoose.model('RegisteredUsers', registeredUsers);
