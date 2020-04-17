
exports.seed = function(knex) {
  return knex('recipes').insert([
    {
      recipe: 'calzone',
      instructions: 'roll the dough, etc, etc.'
    },
    {
      recipe: 'pizza',
      instructions: 'roll the dough, etc, etc.'
    },
    {
      recipe: 'pasta',
      instructions: 'roll the dough, etc, etc.'
    },
  ]);
};
