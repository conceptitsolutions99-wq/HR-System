const express = require('express');
const router = express.Router();
const { getDeviceAttendance } = require('../controllers/deviceAttendanceController');

router.get('/', getDeviceAttendance);

module.exports = router;
