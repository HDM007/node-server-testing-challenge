const db = require("../data/db-config");

function getAll() {
    return db("snacks");
}

function getById(id) {
    return db("snacks").where("snack_id", id).first();
}


async function create(snack) {
    const [id] = await db("snacks").insert(snack);
    return getById(id);
}

function update() {
    const updated = "update called";
    return updated;

}

function remove(id) {
    return db("snacks").where("snack_id", id).delete();
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};