const jwt = require("jsonwebtoken");
const Product = require("../models/Product"); // Ensure Product model is imported

const ADMIN_EMAIL = "boopathy1865@gmail.com";
const ADMIN_PASSWORD = "Admin@123";

// ✅ Admin Login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            const token = jwt.sign({ email, isAdmin: true }, process.env.JWT_SECRET, { expiresIn: "1d" });

            return res.status(200).json({
                message: "Admin login successful",
                token,
                user: {
                    name: "Admin",
                    email: ADMIN_EMAIL,
                    isAdmin: true,
                },
            });
        }

        return res.status(401).json({ message: "Invalid email or password" });
    } catch (error) {
        res.status(500).json({ message: "Login error", error: error.message });
    }
};

// ✅ Middleware to verify Admin Token
const verifyAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded.isAdmin) {
            return res.status(403).json({ message: "Forbidden: Admin access required" });
        }
        req.admin = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

// ✅ Create Product (Admin Only)
const createProduct = async (req, res) => {
    try {
        const { name, price, description, imageUrl } = req.body;

        if (!name || !price || !description || !imageUrl) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newProduct = new Product({ name, price, description, imageUrl });
        await newProduct.save();

        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error: error.message });
    }
};

// ✅ Delete Product (Admin Only)
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
};

// ✅ Update Product (Admin Only)
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};

module.exports = { adminLogin, verifyAdmin, createProduct, deleteProduct, updateProduct };
