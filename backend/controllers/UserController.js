const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const axios = require("axios"); // Import axios for HTTP requests

const loginUser = async (req, res) => {
  const { email, password, captcha } = req.body;

  if (!captcha) {
    return res.status(400).json({ message: "Captcha is required" });
  }

  try {
    // Verify captcha with Google
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: captcha,
        },
      }
    );

    if (!response.data.success) {
      return res.status(400).json({ message: "Captcha validation failed" });
    }

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(500).json({ message: "Login error", error: error.message });
  }
};
// Create Admin User Function
const createAdminUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the admin already exists
    const existingAdmin = await User.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({ message: "Admin user already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin user
    const adminUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin: true, // Set admin privileges
    });

    await adminUser.save();
    res.status(201).json({ message: "Admin user created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating admin", error: error.message });
  }
};

// Export all functions
module.exports = { loginUser, createAdminUser };
