
const { ObjectId } = require('bson');
const { database } = require('../database')


const home = require('express').Router();

home.get('/match/:id', async (req, res) => {
	
    const ageMatch = await database.collection('user').findOne({_id: new ObjectId(req.params.id)},{ageMatchMin :1, ageMatchMax:1 , _id :0})

	const response = await database.collection('user').find({
        "age": {
          $lte: ageMatch.ageMatchMax,
          $gte: ageMatch.ageMatchMin
        },
		"_id": {$ne: new ObjectId(req.params.id)}

      }).toArray();
	
	return res.status(200).send({ error: false, response });
});


module.exports = home