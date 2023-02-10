require('dotenv').config()
const {MongoClient} =require('mongodb')

const client = new MongoClient(process.env.URI)
client.connect()
const database = client.db()

module.exports = {database}