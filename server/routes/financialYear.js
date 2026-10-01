const express = require('express');
const router = express.Router();
const { getAllFinancialYears, createFinancialYear } = require('../controllers/financialYearController');

router.get('/', getAllFinancialYears);
router.post('/', createFinancialYear);

module.exports = router;
