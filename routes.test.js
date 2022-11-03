// npm install supertest --save-dev
// npm install --save-dev jest
// NOTE: supertest - TESTING LIBRARY
const request = require('supertest')
const routes = require('./routes')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

app.use('/', routes)

app.listen(3000, () => console.log('running on port 3000'))

// TESTS
// GET '/'
test('testing GET index route', (done) => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect({ name: 'john' })
    .expect(200, done)
})

// POST '/test'
test('testing POST, GET /fruits route', (done) => {
  request(app)
    .post('/fruits')
    .type('form')
    .send({ fruit: 'mango' })
    .then(() => {
      // GET '/test'
      request(app)
        .get('/fruits')
        .expect({ fruitsArray: ['mango'] }, done)
    })
})
