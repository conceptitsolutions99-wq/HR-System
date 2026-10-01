const db = require('../models/db');

const getAllFinancialYears = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM financial_years');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createFinancialYear = async (req, res) => {
    const { year_name, year_value } = req.body;
    try {
        await db.query('INSERT INTO financial_years (year_name, year_value) VALUES (?, ?)',
            [year_name, year_value]);
        res.status(201).json({ message: 'Financial year created' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllFinancialYears, createFinancialYear };
