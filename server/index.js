const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const companyRoutes = require('./routes/company');
const employeeRoutes = require('./routes/employee');
const financialYearRoutes = require('./routes/financialYear');
const attendanceRoutes = require('./routes/attendance');
const leaveRoutes = require('./routes/leave');

app.use(cors());
app.use(express.json());

app.use('/api/company', companyRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/financial-years', financialYearRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/leave', leaveRoutes);

app.get('/', (req, res) => {
  res.send('HR System Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
