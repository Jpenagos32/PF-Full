const { validationResult } = require('express-validator');

const validationMessages = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const errorArray = errors.array();
		const errorMessages = errorArray.map((error) => ({
			msg: error.msg,
			path: error.path,
			notSupportedValue: error.value,
		}));
		return res.status(400).json(errorMessages);
	}
	next();
};

module.exports = validationMessages;
