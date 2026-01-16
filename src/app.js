const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const categoryRoutes = require("./routes/category.routes");
const productRoutes = require("./routes/product.routes");

const app = express();

// View engine
app.set("view engine", "ejs");

// ✅ VERY IMPORTANT: views are inside src/views
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => res.redirect("/products"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
