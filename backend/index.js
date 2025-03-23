const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoute");
const patientRoutes = require("./routes/patientRoute");
const appointmentRoutes = require("./routes/appoinmentRoute");

require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
