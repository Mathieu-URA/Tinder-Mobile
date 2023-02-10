
const { ObjectId } = require('bson');
const { database } = require('../database')


const match = require('express').Router();

match.post('/like/:id', async (req, res) => {
	
    await database.collection('user').updateOne({_id: new ObjectId(req.params.id)},{$push: {likes: req.body._id}})

    const response = await database.collection('user').findOne({_id: new ObjectId(req.body._id), likes: req.params.id})

    if(response){

        await database.collection('user').updateOne({_id: new ObjectId(req.params.id)},{$push: {matchs: req.body._id}})
        await database.collection('user').updateOne({_id: new ObjectId(req.body._id)},{$push: {matchs: req.params.id}})
        }
	
	return res.status(200).send({ error: false, response });
});


module.exports = match


