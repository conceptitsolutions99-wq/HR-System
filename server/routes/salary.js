const express = require('express');
const router = express.Router();
const { getSalarySlips } = require('../controllers/salaryController');

router.get('/', getSalarySlips);

module.exports = router;
