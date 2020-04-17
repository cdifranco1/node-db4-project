const db = require('../../data/db-config') 

module.exports = {
  getRecipes,
  getShoppingList,
  
}


function getRecipes(){
  return db('recipes')
}

function getShoppingList(recipe_id){
  return db('ingredients')
          .join('recipe_ingredient', 'recipe_id', 'recipe_id')
          .where({ recipe_id: recipe_id})
}
