
exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
      {ingredient: 'dough', metric: 'lbs'},
      {ingredient: 'marinara', metric: 'cups'},
      {ingredient: 'cheese', metric: 'cups'}
    ]);
};
