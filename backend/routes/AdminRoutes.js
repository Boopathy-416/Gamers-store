const express = require("express");
const {
    adminLogin,
    verifyAdmin,
    createProduct,
    deleteProduct,
    updateProduct
} = require("../controllers/AdminController");

const router = express.Router();

// ✅ Admin Login
router.post("/user", adminLogin);

// ✅ Product Management (Only Admin)
router.post("/products", verifyAdmin, createProduct);
router.delete("/products/:id", verifyAdmin, deleteProduct);
router.put("/products/:id", verifyAdmin, updateProduct);

module.exports = router;
