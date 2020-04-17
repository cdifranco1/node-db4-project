const db = require('../../data/db-config') 

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes(){
  return db('recipes')
}

function getShoppingList(recipe_id){
  return db('recipes as r')
          .join('recipe_ingredient as ri', 'ri.recipe_id', 'r.id')
          .join('ingredients as i', 'i.id', 'ri.ingredient_id')
          .select('i.ingredient', 'i.metric', 'ri.quantity')
          .where({ recipe_id })
}

function getInstructions(recipe_id){
  return db('instructions')
          .where({recipe_id: recipe_id})
}


