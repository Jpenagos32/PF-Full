const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlRegex = new RegExp(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/);

const roomSchema = new Schema({
	name: {
		type: String,
		required: true,
		maxlength: 50,
	},
	active: {
		type: Boolean,
		default: true,
	},
	room_number: {
		type: Number,
		required: true,
		unique: true,
		min: 0,
	},
	room_type: {
		type: String,
		required: true,
		maxlength: 50,
	},
	available: {
		type: Boolean,
		default: true,
	},
	capacity: {
		type: Number,
		required: true,
		min: 1,
	},
	price: {
		type: Number,
		required: true,
		min: 0,
	},
	number_of_beds: {
		type: Number,
		required: true,
		min: 1,
	},
	discount_start: Date,
	discount_end: Date,
	image: {
		bed: {
			type: String,
			required: true,
			match: [urlRegex, 'Please Enter a valid URL'],
		},

		bed2: {
			type: String,
			match: [urlRegex, 'Please Enter a valid URL'],
		},

		bed3: {
			type: String,
			match: [urlRegex, 'Please Enter a valid URL'],
		},

		bathroom: {
			type: String,
			required: true,
			match: [urlRegex, 'Please Enter a valid URL'],
		},

		bathroom2: {
			type: String,
			required: true,
			match: [urlRegex, 'Please Enter a valid URL'],
		},

		extra: {
			type: String,
			required: false,
			match: [urlRegex, 'Please Enter a valid URL'],
		},
	},
	facilities: {
		type: [String],
		required: true,
	},
	room_description: {
		type: String,
		required: true,
		minlength: [25, 'Room description must be greater than 25 chars'],
		maxlength: [500, 'Room description must be less than 500 chars'],
	},
	review_description: {
		type: [String],
	},
	review_estrellas: {
		type: [Number],
	},
});

module.exports = mongoose.model('Room', roomSchema);
