const express = require('express')
const router = express.Router()
const Recipes = require('./recipes-model')


router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

//get list of ingredients and quantity for a recipe id
router.get('/:id/shoppingList', (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/:id/instructions', (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(instructions => {
      res.status(200).json(instructions)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})


module.exports = router