const { ObjectId } = require('mongodb');
const { database } = require('../database')


const auth = require('express').Router()

auth.post('/signup', async (req, res) => {
    const schema = require('../schemas/userSignup');
	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).send({ error: true, message: error.details[0].message });
	}
    try{
        
    const signup = await database.collection('user').insertOne(
        
        {
            fName: req.body.fName,
            email: req.body.email,
            password: req.body.password,
            sexe: req.body.sexe,
            profilPicture: req.body.profilPicture,
            age: req.body.age,
            lattitude: req.body.lattitude,
            longitude: req.body.longitude,
            distanceMatch: req.body.distanceMatch,
            ageMatchMin: req.body.ageMatchMin,
            ageMatchMax: req.body.ageMatchMax,
            sexeMatch: req.body.sexeMatch
        }
    )
    res.send({id : signup.insertedId})
    }catch(e) {
        console.error(e)
        return res.sendStatus(500)
    }
})

auth.post('/signin', async (req, res) => {
    const schema = require('../schemas/userSignin');
	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).send({ error: true, message: error.details[0].message });
	}
    try{
    const signin = await database.collection('user').findOne(
        
        {
            
            email: req.body.email,
            password: req.body.password
                
        }
    )
    
    res.send({id : signin._id})
    }catch(e) {
        console.error(e)
        return res.sendStatus(500)
    }
})



auth.get('/profile/:id', async (req, res) => {
    
    try{
        
        const response = (await database.collection('user').find({_id: new ObjectId(req.params.id)}).project({password:false}).toArray())[0]

        return res.status(200).send({ error: false, response });
    }catch(e) {
        console.error(e)
        return res.sendStatus(500)
    }
    
})

module.exports = auth;
