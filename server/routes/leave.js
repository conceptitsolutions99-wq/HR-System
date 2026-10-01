const express = require('express');
const router = express.Router();
const { getLeaveDetails, applyForLeave } = require('../controllers/leaveController');

router.get('/details', getLeaveDetails);
router.post('/apply', applyForLeave);

module.exports = router;
