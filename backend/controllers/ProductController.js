const Product = require("../models/Product");

// Create Product Function (Admin Only)
const createProduct = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;

        if (!name || !description || !price || !image) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const product = await Product.create({ name, description, price, image });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Failed to create product", error: error.message });
    }
};

// Update Product (Admin Only)
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Update product fields
        product.name = req.body.name || product.name;
        product.description = req.body.description || product.description;
        product.price = req.body.price || product.price;
        product.image = req.body.image || product.image;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};

module.exports = { createProduct, updateProduct };
