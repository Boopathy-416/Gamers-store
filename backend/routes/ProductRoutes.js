const express = require("express");
const Product = require ("../models/Product");

const router =  express.Router();

// get all products

router.get("/", async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
    }
  });


  // Create a product
  router.post("/", async (req, res) => {
    try {
      const { name, description, price, image } = req.body;
  
      if (!name || !description || !price || !image) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const product = await Product.create({ name, description, price, image });
      res.status(201).json(product);
    } catch (error) {
      console.error("Error in /api/products:", error.message);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  });

  module.exports = router;