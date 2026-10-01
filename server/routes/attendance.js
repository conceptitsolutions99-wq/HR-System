const express = require('express');
const router = express.Router();
const { getAttendance, logAttendance } = require('../controllers/attendanceController');

router.get('/', getAttendance);
router.post('/', logAttendance);

module.exports = router;
