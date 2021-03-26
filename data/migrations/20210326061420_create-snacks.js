
exports.up = function(knex) {
  return knex.schema.createTable("snacks", tbl => {
      tbl.increments("snack_id");
      tbl.string("snack_name", 128).notNullable();
      tbl.boolean("tasty or not").defaultTo(true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("snacks")
};
