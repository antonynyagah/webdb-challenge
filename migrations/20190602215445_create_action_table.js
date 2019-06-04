exports.up = async function(knex) {
  await knex.schema.createTable('actions', function(tbl) {

    tbl.increments();

    tbl.string("description", 1000).notNullable();

    tbl.string("notes", 1000).notNullable();

    tbl.boolean("completed").defaultTo(false);

    tbl.timestamps(true, true);

    tbl
      .integer('project_id')
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable()
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('actions')
};