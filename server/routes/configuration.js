
const { ObjectId } = require('bson');
const { database } = require('../database')


const config = require('express').Router();

config.post('/config/:id', async (req, res) => {
	const schema = require('../schemas/config');
	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).send({ error: true, message: error.details[0].message });
	}
    await database.collection('user').updateOne({_id: new ObjectId(req.params.id)},{$set: req.body})

    const response = await database.collection('user').findOne({_id: new ObjectId(req.params.id)})
	
	return res.status(200).send({ error: false, response });
});


module.exports = config