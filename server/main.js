require('dotenv').config()

const express = require('express')
const cors = require('cors')
const {database} = require ('./database')
const router = require('./routes')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)
const PORT = process.env.port || 3000

app.listen(PORT, async () => console.log(`Application running on http://localhost:${PORT}`))