const knex = require('knex');

const config = require('../knexfile');

// const db = knex(config.development);

module.exports = knex(config.development);
