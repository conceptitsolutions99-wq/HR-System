const db = require('../models/db');

const getAttendance = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM attendance');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const logAttendance = async (req, res) => {
    const { employee_id, status, date } = req.body;
    try {
        await db.query('INSERT INTO attendance (employee_id, status, date) VALUES ($1, $2, $3)',
            [employee_id, status, date]);
        res.status(201).json({ message: 'Attendance logged' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAttendance, logAttendance };
