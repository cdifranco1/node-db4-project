
exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    {instructions: '1. roll the dought; 2. pour the marinara sauce', recipe_id: 1},
    {instructions: 'List of instructions for recipe 2', recipe_id: 2},
    {instructions: 'List of instructions for recipe 3', recipe_id: 3}
  ]);
};
