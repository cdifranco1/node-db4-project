
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('recipes', (tbl) => {
        tbl.increments()
        tbl.string('recipe', 255).unique().notNullable()
      })
      .createTable('ingredients', (tbl) => {
        tbl.increments()
        tbl.string('ingredient', 255).unique().notNullable()
        tbl.string('metric', 255)
      })
      .createTable('recipe_ingredient', (tbl) => {
        tbl.increments()
        tbl.float('quantity').notNullable()

        //foreign keys
        tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
        tbl
          .integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
      })
      .createTable('instructions', (tbl) => {
        tbl.increments()
        tbl.text('instructions').notNullable()

        //foreign keys
        tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
      })
    ) 
  }

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipe_ingredient')
      .dropTableIfExists('instructions')
  )
};
