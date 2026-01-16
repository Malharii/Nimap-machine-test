const db = require("../db");

// Get all categories
exports.getCategories = (req, res) => {
  const sql = "SELECT * FROM categories";

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.render("category/list", { categories: results }); // ✅ FIXED
  });
};

// Show add category form
exports.showAddForm = (req, res) => {
  res.render("category/form"); // ✅ FIXED
};

// Add category
exports.addCategory = (req, res) => {
  const { category_name } = req.body;

  const sql = "INSERT INTO categories (category_name) VALUES (?)";

  db.query(sql, [category_name], (err) => {
    if (err) throw err;
    res.redirect("/categories");
  });
};
