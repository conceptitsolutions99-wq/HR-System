const db = require('../models/db');

const getCompanyInfo = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM companies LIMIT 1');
        res.json(result.rows[0] || null);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateCompanyInfo = async (req, res) => {
    const { name, email, country, state, city, mobile, phone, hotline, fax, website, address } = req.body;
    try {
        await db.query(`UPDATE companies SET name=?, email=?, country=?, state=?, city=?, mobile=?, phone=?, hotline=?, fax=?, website=?, address=? WHERE id=1`,
            [name, email, country, state, city, mobile, phone, hotline, fax, website, address]);
        res.json({ message: 'Company info updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getCompanyInfo, updateCompanyInfo };
