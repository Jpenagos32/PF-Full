const { body, query } = require('express-validator');
const validatePostHotel = [
	body('name')
		.escape()
		.notEmpty()
		.withMessage('Must provide a hotel name')
		.isString()
		.isLength({ max: 50 })
		.withMessage('Hotel name must be less than 50 chars'),
	body('niu').escape().notEmpty().withMessage('Must provide a NIU number'),
	body('images.reception')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the reception, it must be a valid Image.'
		),
	body('images.pool')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the pool, it must be a valid Image.'
		),
	body('images.views.aerial')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the aerial view, it must be a valid Image.'
		),
	body('images.views.lake')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the lake view, it must be a valid Image.'
		),
	body('images.views.garden')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the garden view, it must be a valid Image.'
		),
	body('images.views.mountain')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the mountain view, it must be a valid Image.'
		),
	body('images.views.beach')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the beach view, it must be a valid Image.'
		),
	body('images.views.city')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the city view, it must be a valid Image.'
		),
	body('images.restaurant')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the restaurant, it must be a valid Image.'
		),
	body('images.meeting_room')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the meeting room, it must be a valid Image.'
		),
	body('images.bar')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the bar, it must be a valid Image.'
		),
	body('images.logo')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the logo, it must be a valid Image.'
		),
];

const validatePutHotel = [
	body('niu').escape().notEmpty().withMessage('Must provide a valid NIU'),
	body('name')
		.escape()
		.optional()
		.isString()
		.isLength({ max: 50 })
		.withMessage('Hotel name must be less than 50 chars'),
	body('reception')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the reception, it must be a valid Image.'
		),
	body('pool')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the pool, it must be a valid Image.'
		),
	body('aerial')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the aerial view, it must be a valid Image.'
		),
	body('lake')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the lake view, it must be a valid Image.'
		),
	body('garden')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the garden view, it must be a valid Image.'
		),
	body('mountain')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the mountain view, it must be a valid Image.'
		),
	body('beach')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the beach view, it must be a valid Image.'
		),
	body('city')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the city view, it must be a valid Image.'
		),
	body('restaurant')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the restaurant, it must be a valid Image.'
		),
	body('meeting_room')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the meeting room, it must be a valid Image.'
		),
	body('bar')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the bar, it must be a valid Image.'
		),
	body('logo')
		.optional()
		.isURL()
		.withMessage(
			'If you provided a picture of the logo, it must be a valid Image.'
		),
];
module.exports = {
	validatePostHotel,
	validatePutHotel,
};
