const db = require("../data/db-config");

function getAll() {
    return db("snacks");
}

function getById() {

}


function create() {

}

function update() {

}

function remove() {

}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};