
const express = require("express");
const Product = require("../models/Product");
const { protect, isAdmin } = require("../middlewares/authMiddleware");
const { createProduct, updateProduct } = require("../controllers/ProductController");

const router = express.Router();

// Create a product (Admin Only)
router.post("/", protect, isAdmin, createProduct);

// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});

// Update Product (Admin Only)
router.put("/:id", protect, isAdmin, updateProduct);

module.exports = router;
