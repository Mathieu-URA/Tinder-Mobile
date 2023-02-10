const Joi = require('joi');

module.exports = Joi.object({
	fName: Joi.string(),
	email: Joi.string().email(),
	password: Joi.string().min(8),
	sexe: Joi.string().valid('Men','Women','Trans','Helicopter'),
	profilPicture: Joi.string() ,
    age: Joi.number().integer().min(18),
	lattitude: Joi.number(),
    longitude: Joi.number(),
    distanceMatch: Joi.number(),
    ageMatchMin: Joi.number().integer().min(18),
    ageMatchMax: Joi.number().integer().min(18),
    sexeMatch: Joi.string().valid('Men','Women','Trans','Helicopter')

});