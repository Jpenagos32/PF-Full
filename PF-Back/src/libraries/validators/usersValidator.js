const { query, body } = require('express-validator');

const validatePostUsers = [
	// body('user_first_name')
	// 	.escape()
	// 	.notEmpty()
	// 	.withMessage('Must provide a name')
	// 	.isLength({ max: 50, min: 3 })
	// 	.withMessage(
	// 		'Name length must be lower than 50 and greater than 3 chars'
	// 	),
	// body('user_last_name')
	// 	.escape()
	// 	.notEmpty()
	// 	.withMessage('Must provide a last name')
	// 	.isLength({ max: 50, min: 3 })
	// 	.withMessage(
	// 		'Last name length must be lower than 50 and greater than 3 chars'
	// 	),
	body('user_email')
		.escape()
		.notEmpty()
		.withMessage('Must provide an E-mail')
		.normalizeEmail()
		.isEmail()
		.withMessage('E-mail must be a valid E-mail'),
	// body('phone')
	// 	.notEmpty()
	// 	.withMessage('Must provide a phone number')
	// 	.isMobilePhone()
	// 	.withMessage('Must provide a valid phone number'),
	// body('billing.billing_adress')
	// 	.escape()
	// 	.notEmpty()
	// 	.withMessage('Must provide a billing address'),
	// body('billing.city')
	// 	.escape()
	// 	.notEmpty()
	// 	.withMessage('Must provide a city name'),
	// body('billing.zip_code')
	// 	.escape()
	// 	.notEmpty()
	// 	.withMessage('Must provide a zip code')
	// 	.isLength({ min: 2 })
	// 	.withMessage('Zip code length must be greater than 2 chars'),
	// body('billing.country')
	// 	.escape()
	// 	.notEmpty()
	// 	.withMessage('Must provide a Country name'),
	body('user_type')
		.notEmpty()
		.withMessage('Field user type is required')
		.matches(/^(admin|user)$/)
		.withMessage('user type can only be admin or user'),
];

const validateGetUsers = [
	query('email')
		.optional()
		.normalizeEmail()
		.isEmail()
		.withMessage('Must provide a valid email'),
];

const validatePutUsers = [
	// body('name')
	// 	.optional()
	// 	.escape()
	// 	.isLength({ max: 50, min: 3 })
	// 	.withMessage(
	// 		'Name length must be lower than 50 and greater than 3 chars'
	// 	),
	// body('last_name')
	// 	.optional()
	// 	.escape()
	// 	.isLength({ max: 50, min: 3 })
	// 	.withMessage(
	// 		'Last Name length must be lower than 50 and greater than 3 chars'
	// 	),
	body('email')
		.if(body('id').isEmpty())
		.notEmpty()
		.withMessage('If you dont provide an id must provide an E-mail')
		.normalizeEmail()
		.isEmail()
		.withMessage('Must provide a valid email'),
	body('id')
		.if(body('email').isEmpty())
		.notEmpty()
		.withMessage('If you dont provide an E-mail, must provide an id'),
];

const validateDeleteUsers = [
	query('email')
		.notEmpty()
		.withMessage('Must provide an email to delete a user')
		.normalizeEmail()
		.isEmail()
		.withMessage('Must provide a valid email'),
];

module.exports = {
	validatePostUsers,
	validateGetUsers,
	validatePutUsers,
	validateDeleteUsers,
};
