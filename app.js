const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

const routes = require('./routes')
app.use('/', routes)

app.listen(3000, () => console.log('running on port 3000'))
