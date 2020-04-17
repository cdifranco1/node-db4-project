const express = require('express')
const router = express.Router()
const recipesRoute = require('./recipes')

router.use('/recipes', recipesRoute)

module.exports = router