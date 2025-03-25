const express = require("express");
const { scheduleAppointment, getAppointments } = require("../controllers/appointmentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, scheduleAppointment);
router.get("/", authMiddleware, getAppointments);

module.exports = router;
