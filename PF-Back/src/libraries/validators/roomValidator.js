const { body, query } = require('express-validator');
const validateGetRoom = [
	query('price')
		.optional()
		.escape()
		.isInt()
		.withMessage('Price must be a number'),
	query('capacity')
		.optional()
		.isInt({ min: 1 })
		.withMessage('Capacity must be a number, and at least 1'),
	query('facilities').optional().escape(),
	query('room_name')
		.optional()
		.escape()
		.isLength({ min: 2, max: 50 })
		.withMessage('Room name max length must be between 2 and 50 chars')
		.isString()
		.withMessage('Room name must be a string'),
	query('room_number')
		.optional()
		.escape()
		.isInt({ min: 0 })
		.withMessage('Room number must be a number'),
];

const validatePostRooms = [
	body('name')
		.escape()
		.notEmpty()
		.withMessage('Must Provide a room name')
		.isLength({ max: 50 })
		.withMessage('Name length max is 50 chars')
		.isString()
		.withMessage('Room name must be a string type'),
	body('room_number')
		.escape()
		.notEmpty()
		.withMessage('Must provide a room number')
		.isInt({ gt: 0 })
		.withMessage('Room number must be a number greater than 0'),
	body('room_type')
		.escape()
		.notEmpty()
		.withMessage('Must provide a room type')
		.isLength({ max: 50 })
		.withMessage('Room type length must be max 50 chars'),
	body('capacity')
		.escape()
		.notEmpty()
		.withMessage('Must provide a capacity number')
		.isInt({ min: 1 })
		.withMessage('Capacity must be at least 1'),
	body('price')
		.escape()
		.notEmpty()
		.withMessage('Must provide a price')
		.toFloat()
		.isFloat({ min: 0 })
		.withMessage(
			'The "number" field must be a number greater than or equal to 0.'
		),
	body('number_of_beds')
		.escape()
		.notEmpty()
		.withMessage('Must provide a number of beds')
		.isInt({ min: 1 })
		.withMessage('Number of beds must be at least 1'),
	body('image.bed')
		.notEmpty()
		.withMessage('Must provide a bed image')
		.isURL()
		.withMessage('Must upload a valid image at bed'),
	body('image.bed2')
		.optional()
		.isURL()
		.withMessage('Must upload a valid image at bed2'),
	body('image.bed3')
		.optional()
		.isURL()
		.withMessage('Must upload a valid image at bed3'),
	body('image.bathroom')
		.notEmpty()
		.withMessage('Must provide a bathroom image')
		.isURL()
		.withMessage('Must upload a valid image at bathroom'),
	body('image.bathroom2')
		.notEmpty()
		.withMessage('Must provide a bathroom image')
		.isURL()
		.withMessage('Must upload a valid image at bathroom2'),
	body('image.extra')
		.optional()
		.isURL()
		.withMessage('Must upload a valid image at extra'),
	body('facilities')
		.optional()
		.escape()
		.isArray()
		.withMessage('Facilities type must be array'),
	body('room_description')
		.escape()
		.notEmpty()
		.withMessage('Must provide a room description')
		.isLength({ min: 25, max: 500 })
		.withMessage(
			'Romm description length must be between 25 and 500 characters'
		),
];

module.exports = {
	validateGetRoom,
	validatePostRooms,
};
