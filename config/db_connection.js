const db_config = require('./db_config');
const mysql = require('mysql');
const db = mysql.createConnection(db_config)
module.exports = db