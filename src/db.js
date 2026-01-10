const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "nimap_machine_test",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the db:", err);
    return;
  }
  console.log("Connected to the MySQL db.");
});
module.exports = db;
