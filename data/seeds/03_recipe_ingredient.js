
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredient').insert([
    {recipe_id: 1, ingredient_id: 1,  quantity: 10},
    {recipe_id: 1, ingredient_id: 2, quantity: 5},
    {recipe_id: 1, ingredient_id: 3, quantity: 4}, 
    {recipe_id: 2, ingredient_id: 1,  quantity: 10},
    {recipe_id: 3, ingredient_id: 1,  quantity: 10},
  ]);
};
