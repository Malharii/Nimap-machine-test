const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");

router.get("/", categoryController.getCategories);

router.get("/add", categoryController.showAddForm);

router.post("/add", categoryController.addCategory);

module.exports = router;
