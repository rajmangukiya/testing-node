const express = require('express')
const cors = require('cors')
require('dotenv/config.js')

const app = express()
const PORT = process.env.PORT || 5000

// middleware routes
app.use('/', (req, res) => {
    res.send("Welcome")
})


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// requests

// port listening
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})