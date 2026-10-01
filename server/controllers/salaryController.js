const db = require('../models/db');

const getSalarySlips = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM salary_slips');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getSalarySlips };
