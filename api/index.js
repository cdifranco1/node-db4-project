const express = require('express')
const router = express.Router()
const recipesRoute = require('./recipes')
const ingredientsRoute = require('./ingredients')

router.use('/recipes', recipesRoute)
router.use('/ingredients', ingredientsRoute)

module.exports = router