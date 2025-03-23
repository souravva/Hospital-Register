const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    doctorId: mongoose.Schema.Types.ObjectId,
    date: Date,
    status: { type: String, enum: ["pending", "completed", "canceled"], default: "pending" }
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
