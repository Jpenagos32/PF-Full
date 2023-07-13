const { body, query } = require('express-validator');

const validatePostHost = [
	body('identification')
		.escape()
		.isString()
		.withMessage('Identification must be a string')
		.notEmpty()
		.withMessage('Identification number cannot be empty'),
	body('first_name')
		.escape()
		.isString()
		.notEmpty()
		.withMessage('Name field cannot be empty')
		.isLength({ min: 3, max: 50 })
		.withMessage('Name length must be between 3 and 50 characters'),
	body('last_name')
		.escape()
		.isString()
		.notEmpty()
		.withMessage('Last name field cannot be empty')
		.isLength({ min: 3, max: 50 })
		.withMessage('Last name length must be between 3 and 50 characters'),
	body('contact.email')
		.normalizeEmail()
		.escape()
		.notEmpty()
		.withMessage('Email cannot be empty')
		.isEmail()
		.withMessage('Must provide a valid email'),
	body('contact.phone')
		.escape()
		.notEmpty()
		.withMessage('Phone cannot be empty')
		.isMobilePhone()
		.withMessage('Must provide a valid phone number'),
	body('contact.address')
		.escape()
		.isString()
		.withMessage('Adress must be string')
		.isLength({ min: 5 })
		.withMessage('The address field must have more than 5 characters. ')
		.notEmpty()
		.withMessage('Must provide an adress'),
	body('contact.country')
		.escape()
		.isString()
		.withMessage('country must be string')
		.isLength({ min: 2 })
		.withMessage('The address field must have more than 2 characters. ')
		.notEmpty()
		.withMessage('Must provide a country'),
	body('contact.city')
		.escape()
		.isString()
		.withMessage('city must be string')
		.isLength({ min: 2 })
		.withMessage('The city field must have more than 2 characters. ')
		.notEmpty()
		.withMessage('Must provide a city'),
	body('contact.zip_code')
		.escape()
		.isString()
		.withMessage('zip code must be string')
		.isLength({ min: 3 })
		.withMessage('The zip code field must have more than 3 characters. ')
		.notEmpty()
		.withMessage('Must provide a zip code'),
	// body('check_in_date')
	// 	.notEmpty()
	// 	.withMessage('Check in date cannot be empty')
	// 	.isDate()
	// 	.withMessage('Must provide a valid check in date')
	// 	.bail()
	// 	.custom((value, { req }) => {
	// 		const checkDate = new Date(value);
	// 		const actualDate = new Date();

	// 		if (checkDate.getDate() + 1 < actualDate.getDate()) {
	// 			throw new Error(
	// 				'The check in date must be equal or later than the actual date'
	// 			);
	// 		}

	// 		const checkOutDate = new Date(req.body.check_out_date);

	// 		if (checkOutDate < checkDate) {
	// 			throw new Error(
	// 				'The check-out date must be after the check-in date.'
	// 			);
	// 		}

	// 		return true;
	// 	}),

	// !No eliminar, la solucion de antes es provisional
	// .custom((value, { req }) => {
	// 	const checkInDate = new Date(value);
	// 	const checkOutDate = new Date(req.body.check_out_date);
	// 	if (checkOutDate <= checkInDate) {
	// 		throw new Error(
	// 			'The check-out date must be after the check-in date.'
	// 		);
	// 	}
	// 	return true;
	// }),
	// body('check_out_date')
	// 	.escape()
	// 	.notEmpty()
	// 	.withMessage('Check out date cannot be empty')
	// 	.isDate()
	// 	.withMessage('Must provide a valid check out date')
	// 	.isAfter()
	// 	.withMessage('The date must be later than the current date '),
	body('amount_of_people')
		.escape()
		.notEmpty()
		.withMessage('amount of people cannot be empty')
		.isNumeric()
		.withMessage('amount of people must be a number')
		.isInt({ min: 1 })
		.withMessage(
			'The amount of people must be greater than or equal to 1.'
		),
	body('type_of_guest.adult')
		.escape()
		.notEmpty()
		.withMessage('adult field cannot be empty')
		.isInt({ min: 1 })
		.withMessage('There must be at least one adult.'),
	body('type_of_guest.children')
		.escape()
		.notEmpty()
		.withMessage('children field cannot be empty must be at least 0')
		.isInt({ min: 0 }),
	body('type_of_guest.baby')
		.escape()
		.notEmpty()
		.withMessage('baby field cannot be empty must be at least 0')
		.isInt({ min: 0 }),
	body('type_of_guest.pets')
		.escape()
		.notEmpty()
		.withMessage('pets field cannot be empty must be at least 0')
		.isInt({ min: 0 }),
	body('room_number')
		.escape()
		.notEmpty()
		.withMessage('Room number cannot be empty')
		.isInt({ gt: 0 })
		.withMessage('room number must be greter than 0'),
	body('special_requirements').escape(),
];

const validatePutHost = [
	body('identification')
		.escape()
		.notEmpty()
		.withMessage('Must provide an identification number')
		.isString()
		.withMessage('Identification must be a string'),
	body('first_name')
		.escape()
		.isString()
		.isLength({ max: 50 })
		.withMessage('Name length must be lower than 50 characters'),
	body('last_name')
		.escape()
		.isString()
		.isLength({ max: 50 })
		.withMessage('Last name length must be lower than 50 characters'),
	body('email').normalizeEmail().escape(),
	body('phone').escape(),
	body('check_in_date')
		.escape()
		.custom((value, { req }) => {
			const checkInDate = new Date(value);
			const checkOutDate = new Date(req.body.check_out_date);
			if (checkOutDate <= checkInDate) {
				throw new Error(
					'The check-out date must be after the check-in date.'
				);
			}
			return true;
		}),
	body('check_out_date').escape(),
	body('special_requirements').escape(),
];

module.exports = {
	validatePostHost,
	validatePutHost,
};
