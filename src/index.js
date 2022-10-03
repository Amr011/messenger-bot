const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const dotenv = require('dotenv')
const errorHandler = require('./middleware/error-handler.js')

const route = require('./routes/index')

// Setup middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

// Error Handling
app.use(errorHandler)

// Env Files Config
dotenv.config()

//   Database Connection
require('./config/database.js')

// Router Config
app.use('/api/v1', route)

// Unavailable Request
app.use((req, res, next) => {
   res.status(404).json({
      success: false,
      status: res.statusCode,
      message: 'Unavailable Request',
   })
   res.end()
})

const port = 4000

app.listen(port, () => {
   console.log(`Server Running on port:${port}`)
})
