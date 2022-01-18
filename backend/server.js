const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

// create express app
const app = express()

// apply middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('common'))

// routes
app.get('/', (req, res) => res.send('You hit server endpoint...'))

// port
const port = process.env.PORT || 8000

// start server
app.listen(port, () => console.log(`Server started on port ${port}`))
