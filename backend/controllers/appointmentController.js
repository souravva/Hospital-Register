const Appointment = require("../models/Appointment");

exports.scheduleAppointment = async (req, res) => {
    try {
        const { patientId, doctorId, date, status } = req.body;
        console.log(req.body);

        // Validate required fields
        if (!patientId || !doctorId || !date) {
            return res.status(400).json({ error: "Patient ID, Doctor ID, and Date are required" });
        }

        const newAppointment = new Appointment({
            patientId,
            doctorId,
            date,
            status: status || "pending", // Default status to "pending" if not provided
        });

        await newAppointment.save();
        res.status(201).json({ message: "Appointment scheduled successfully", appointment: newAppointment });

    } catch (error) {
        console.error("Error scheduling appointment:", error);
        res.status(500).json({ error: "Server error while scheduling appointment" });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const { appointmentId } = req.query;

        let appointments;
        if (appointmentId) {
            // Fetch a specific appointment
            appointments = await Appointment.findById(appointmentId).populate("patientId doctorId");
            if (!appointments) {
                return res.status(404).json({ error: "Appointment not found" });
            }
        } else {
            // Fetch all appointments
            appointments = await Appointment.find().populate("patientId doctorId");
        }

        res.status(200).json(appointments);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ error: "Server error while fetching appointments" });
    }
};
