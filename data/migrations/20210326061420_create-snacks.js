
exports.up = function(knex) {
  return knex.schema.createTable("snacks", tbl => {
      tbl.increments("snack_id");
      tbl.string("name", 128).notNullable();
      tbl.boolean("tasty").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("snacks")
};
