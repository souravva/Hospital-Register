const express = require("express");
const { addPatient, getPatients } = require("../controllers/patientController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addPatient);
router.get("/", authMiddleware, getPatients);

module.exports = router;
