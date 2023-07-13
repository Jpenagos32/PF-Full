const { query, body } = require('express-validator');

const validatePayments = [
	query('preference_id')
		.notEmpty()
		.withMessage('preference_id cannot be empty'),
];

const validatePostPayments = [
	body('identification')
		.escape()
		.notEmpty()
		.isString()
		.withMessage('Must provide an identification'),
	body('total')
		.toInt()
		.isInt()
		.withMessage('Must provide a valid total Number')
		.notEmpty()
		.withMessage('Must provide a total value'),
];
module.exports = { validatePayments, validatePostPayments };
