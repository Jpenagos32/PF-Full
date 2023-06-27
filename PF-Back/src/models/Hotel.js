const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema({
	name: { type: String, required: true },
	niu: { type: String, required: true, unique: true },
	images: {
		reception: String,
		pool: String,
		views: {
			aerial: String,
			lake: String,
			garden: String,
			mountain: String,
			beach: String,
			city: String,
		},
		restaurant: String,
		meeting_room: String,
		bar: String,
		logo: String,
	},
	translator: Boolean,
	tourist_guide: Boolean,
});

module.exports = mongoose.model('Hotel', hotelSchema);
