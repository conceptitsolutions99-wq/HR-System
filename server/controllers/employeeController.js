const db = require('../models/db');

const getAllEmployees = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM employees');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createEmployee = async (req, res) => {
    const { emp_id, first_name, last_name, email } = req.body;
    try {
        await db.query('INSERT INTO employees (emp_id, first_name, last_name, email) VALUES ($1, $2, $3, $4)',
            [emp_id, first_name, last_name, email]);
        res.status(201).json({ message: 'Employee created' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllEmployees, createEmployee };
