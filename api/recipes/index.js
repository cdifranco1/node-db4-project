const express = require('express')
const router = express.Router()
const Recipes = require('./recipes-model')


router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes)
    })
})

//get list of ingredients and quantity for a recipe id
router.get('/:id', (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(recipes => {
      res.json(recipes)
    })
})


module.exports = router