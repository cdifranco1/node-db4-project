
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { recipe: 'calzone' },
    { recipe: 'pizza' },
    { recipe: 'pasta' },
  ]);
};
