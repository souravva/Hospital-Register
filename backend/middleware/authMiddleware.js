const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        // Get the Authorization header
        const authHeader = req.header("Authorization");

        // Check if the token is provided
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Access denied. No token provided." });
        }

        // Extract token from "Bearer <token>"
        const token = authHeader.split(" ")[1];

        // Verify the token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Attach user details to the request

        next(); // Proceed to the next middleware/controller
    } catch (error) {
        console.error("Auth error:", error);
        res.status(401).json({ error: "Invalid or expired token" });
    }
};
