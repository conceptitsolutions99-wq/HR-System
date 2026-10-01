const db = require('../models/db');

const getDeviceAttendance = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM device_attendance_logs');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getDeviceAttendance };
