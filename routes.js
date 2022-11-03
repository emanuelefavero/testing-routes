const express = require('express')
const routes = express.Router()

const fruitsArray = []

// GET '/'
routes.get('/', (req, res) => {
  res.json({ name: 'john' })
})

// POST '/test'
routes.post('/fruits', (req, res) => {
  fruitsArray.push(req.body.fruit)
  res.send('success!')
})

// GET '/test'
routes.get('/fruits', (req, res) => {
  res.json({ fruitsArray })
})

module.exports = routes
