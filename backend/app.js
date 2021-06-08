let express = require('express')
let cors = require('cors')
let mongoose = require('mongoose')
let database = require('./database')
let bodyParser = require('body-parser')

// Connect mongoDB
mongoose.Promise = global.Promise
mongoose.connect(database.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected')
},
error => {
  console.log("Database could't be connected to: " + error)
}
)

const studentAPI = require('customerRoute')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(cors())

// API
app.use('/api', studentAPI)

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404
app.use((req, res, next) => {
  next()
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
