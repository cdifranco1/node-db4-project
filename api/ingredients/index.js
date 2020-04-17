const express = require('express')
const router = express.Router()
const Ingredients = require('./ingredients-model')

router.get('/:id/recipes', (req, res) => {
  const { id } = req.params

  Ingredients.getIngredientRecipes(id)
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })

})

module.exports = router