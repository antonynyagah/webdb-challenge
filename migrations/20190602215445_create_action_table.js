exports.up = async function(knex) {
  await knex.schema.createTable('actions', function(tbl) {

    tbl.increments();

    tbl.string("description", 1000).notNullable();

    tbl.string("notes", 1000).notNullable();

    tbl.boolean("completed").defaultTo(false);

    tbl.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('actions')
};