const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "malhar@9",
  database: "nimap_machine_test",
});

console.log("MySQL pool initialized");

module.exports = db;
