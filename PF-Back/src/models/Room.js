const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	room_number: {
		type: Number,
		required: true,
		unique: true,
	},
	room_type: {
		type: String,
		required: true,
	},
	available: {
		type: Boolean,
		default: true,
	},
	capacity: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	number_of_beds: {
		type: Number,
		required: true,
	},
	discount_start: Date,
	discount_end: Date,
	image: {
		bed: { type: String, required: true },
		bed2: { type: String, rquired: false },
		bed3: { type: String, required: false },
		bathroom: { type: String, required: true },
		bathroom2: { type: String, required: true },
		extra: { type: String, required: false },
	},
	facilities: {
		type: [String],
		required: true
	},
	room_description: {
		type: String,
		required: true
	},
});

module.exports = mongoose.model('Room', roomSchema);
