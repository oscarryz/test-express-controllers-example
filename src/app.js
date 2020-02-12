const express = require('express')
const homeController = require('./homeController')

const app = express()

app.get('/', homeController)

module.exports = app
