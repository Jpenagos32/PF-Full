const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema({
	name: { type: String, required: true, maxlength: 50 },
	niu: { type: String, required: true, unique: true },
	images: {
		reception: {
			type: String,
			match: [
				/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
				'Please Enter a valid URL',
			],
		},
		pool: {
			type: String,
			match: [
				/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
				'Please Enter a valid URL',
			],
		},
		views: {
			aerial: {
				type: String,
				match: [
					/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
					'Please Enter a valid URL',
				],
			},
			lake: {
				type: String,
				match: [
					/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
					'Please Enter a valid URL',
				],
			},
			garden: {
				type: String,
				match: [
					/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
					'Please Enter a valid URL',
				],
			},
			mountain: {
				type: String,
				match: [
					/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
					'Please Enter a valid URL',
				],
			},
			beach: {
				type: String,
				match: [
					/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
					'Please Enter a valid URL',
				],
			},
			city: {
				type: String,
				match: [
					/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
					'Please Enter a valid URL',
				],
			},
		},
		restaurant: {
			type: String,
			match: [
				/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
				'Please Enter a valid URL',
			],
		},
		meeting_room: {
			type: String,
			match: [
				/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
				'Please Enter a valid URL',
			],
		},
		bar: {
			type: String,
			match: [
				/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
				'Please Enter a valid URL',
			],
		},
		logo: {
			type: String,
			match: [
				/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
				'Please Enter a valid URL',
			],
		},
	},
	translator: Boolean,
	tourist_guide: Boolean,
	cancelation: String
});

module.exports = mongoose.model('Hotel', hotelSchema);
