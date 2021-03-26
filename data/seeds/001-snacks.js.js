exports.seed = function (knex) {
  return knex("snacks")
  .truncate()
  .then(function () {
      return knex("snacks").insert([{name: "Anchovies", tasty: false}, {name: "Cashews", tasty: true}])
  })
}