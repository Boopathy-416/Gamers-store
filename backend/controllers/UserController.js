const { RecaptchaV2 } = require("express-recaptcha");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Set up reCAPTCHA with actual keys
const recaptcha = new RecaptchaV2(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY);

// Login Route with CAPTCHA
const loginUser = async (req, res) => {
    const { email, password, captcha } = req.body;

    // Check if captcha is provided
    if (!captcha) {
        return res.status(400).json({ message: "Captcha is required" });
    }

    // Verify reCAPTCHA
    recaptcha.verify(req, async (error) => {
        if (error) {
            return res.status(400).json({ message: "Captcha validation failed", error });
        }

        try {
            const user = await User.findOne({ email });

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "1h" });

            res.json({ token, isAdmin: user.isAdmin });
        } catch (err) {
            res.status(500).json({ message: "Login error", error: err.message });
        }
    });
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
        res.status(500).json({ message: "Error creating admin", error: error.message });
    }
};

// Export all functions
module.exports = { loginUser, createAdminUser };
