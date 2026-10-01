const express = require('express');
const router = express.Router();
const { getCompanyInfo, updateCompanyInfo } = require('../controllers/companyController');

router.get('/', getCompanyInfo);
router.post('/', updateCompanyInfo);

module.exports = router;
