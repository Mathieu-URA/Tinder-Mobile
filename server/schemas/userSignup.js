const Joi = require('joi');

module.exports = Joi.object({
	fName: Joi.string().required(),
	email: Joi.string()
		.required()
		.email(),
	password: Joi.string().required().min(8),
	sexe: Joi.string().valid('Men','Women','Trans','Helicopter'),
	profilPicture: Joi.string().required() ,
    age: Joi.number().required().integer().min(18),
	lattitude: Joi.number(),
    longitude: Joi.number(),
    distanceMatch: Joi.number(),
    ageMatchMin: Joi.number().required().integer().min(18),
    ageMatchMax: Joi.number().required().integer().min(18),
    sexeMatch: Joi.string().valid('Men','Women','Trans','Helicopter')


});