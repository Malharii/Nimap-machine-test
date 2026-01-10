const db = require("../db");

exports.getCategories = async (req, res) => {
  const sql = "SELECT * FROM categories";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.render("categories/list", { categories: results });
  });
};

exports.showAddForm = (req, res) => {
  res.render("categories/form");
};

exports.addCategory = (req, res) => {
  const { category_name } = req.body;

  const sql = "INSERT INTO categories (category_name) VALUES (?)";

  db.query(sql, [category_name], (err) => {
    if (err) throw err;

    res.redirect("/categories");
  });
};
