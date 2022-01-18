const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const { readdirSync } = require('fs')
require('dotenv').config()

// connect mongodb
mongoose.connect(process.env.MONGO_URI, () =>
	console.log('==>|Database connected successfully|<==')
)

// create express app
const app = express()

// apply middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('common'))

// routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))

// port
const port = process.env.PORT || 8000

// start server
app.listen(port, () =>
	console.log(`Server started on port http://localhost:${port}`)
)
