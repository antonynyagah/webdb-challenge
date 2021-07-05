exports.up = async function(knex) {
  await knex.schema.createTable('projects', function(tbl) {

    tbl.increments()
      .unique()

    tbl
      .string('name', 128)
      .notNullable()

    tbl
      .string('description')
      .notNullable()

    tbl
      .boolean('completed')
      .notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects')
};