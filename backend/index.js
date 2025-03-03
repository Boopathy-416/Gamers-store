require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const productRoutes = require("./routes/ProductRoutes");

const app = express();

// ✅ Middleware (Must be before routes)
app.use(cors());
app.use(express.json()); // Parse JSON request body

// ✅ Connect Routes to Express
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// ✅ Visible for UI connection (Fixed: Removed duplicate response)
app.get("/", (req, res) => {
  res.send("E-commerce API is running.😂✌️");
});

// ✅ MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// ✅ Start Engine (Fixed: Corrected `process.env.PORT`)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
