const mongoose = require('mongoose');
const { Schema } = mongoose;

const registeredUsers = new Schema({
	user_name: {
		type: String,
		required: true,
		maxlength: 50,
	},
	user_last_name: {
		type: String,
		required: true,
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
