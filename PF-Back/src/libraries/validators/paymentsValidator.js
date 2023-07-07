const { query } = require('express-validator');

const validatePayments = [
	query('preference_id')
		.notEmpty()
		.withMessage('preference_id cannot be empty'),
];

module.exports = validatePayments;
