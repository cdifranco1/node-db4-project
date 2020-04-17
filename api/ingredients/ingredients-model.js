const db = require('../../data/db-config') 

module.exports = {
  getIngredientRecipes
}

function getIngredientRecipes(ingredient_id){
  return db('ingredients as i')
      .join('recipe_ingredient as ri', 'i.id', 'ri.ingredient_id')
      .join('recipes as r', 'r.id', 'ri.recipe_id')
      .where('i.id', ingredient_id)
      .select('i.id', 'i.ingredient', 'r.recipe')
    }