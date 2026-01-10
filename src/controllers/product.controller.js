const db = require("../db");

exports.getProducts = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const sql = `
    SELECT p.product_id, p.product_name, c.category_id, c.category_name FROM products p
JOIN categories c ON p.category_id = c.category_id
    LIMIT ? OFFSET ?
  `;

  db.query(sql, [limit, offset], (err, result) => {
    if (err) throw err;
    res.render("product/list", {
      products: result,
      page,
    });
  });
};

exports.showAddForm = (req, res) => {
  db.query("SELECT * FROM categories", (err, categories) => {
    if (err) throw err;

    res.render("product/form", { categories });
  });
};

exports.addProduct = (req, res) => {
  const { product_name, category_id } = req.body;
  const sql = "INSERT INTO products (product_name, category_id) VALUES (?, ?)";
  db.query(sql, [product_name, category_id], (err) => {
    if (err) throw err;

    res.redirect("/products");
  });
};
