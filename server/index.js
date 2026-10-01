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
const salaryRoutes = require('./routes/salary');
const deviceAttendanceRoutes = require('./routes/deviceAttendance');
const fs = require('fs');
const path = require('path');
const db = require('./models/db');

app.use(cors());
app.use(express.json());

// Initialize database and start server
const initializeApp = async () => {
  try {
    const schema = fs.readFileSync(path.resolve(__dirname, '../database/schema.sql'), 'utf-8');
    await db.exec(schema);
    console.log('Database initialized');

    app.use('/api/company', companyRoutes);
    app.use('/api/employees', employeeRoutes);
    app.use('/api/financial-years', financialYearRoutes);
    app.use('/api/attendance', attendanceRoutes);
    app.use('/api/leave', leaveRoutes);
    app.use('/api/salary', salaryRoutes);
    app.use('/api/device-attendance', deviceAttendanceRoutes);

    app.get('/', (req, res) => {
      res.send('HR System Backend Running');
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to initialize database:', err);
    process.exit(1);
  }
};

initializeApp();
