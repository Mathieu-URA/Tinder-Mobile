const Joi = require('joi');

module.exports = Joi.object({
	email: Joi.string()
		.required()
		.email(),
	password: Joi.string().required().min(8)

});