const mysql = require('mysql2');
require('dotenv').config();

let creds = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }

const db = mysql.createPool(creds);

module.exports = db;