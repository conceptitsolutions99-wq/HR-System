const db = require('../models/db');

const getLeaveDetails = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM leave_details');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const applyForLeave = async (req, res) => {
    const { employee_id, leave_type, start_date, end_date, reason } = req.body;
    try {
        await db.query('INSERT INTO leave_applications (employee_id, leave_type, start_date, end_date, reason, status) VALUES ($1, $2, $3, $4, $5, $6)',
            [employee_id, leave_type, start_date, end_date, reason, 'pending']);
        res.status(201).json({ message: 'Leave application submitted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getLeaveDetails, applyForLeave };
