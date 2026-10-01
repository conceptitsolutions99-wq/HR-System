import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import CompanyInfoForm from './components/CompanyInfoForm';
import UserDetail from './components/UserDetail';
import EmployeeList from './components/EmployeeList';
import AddEmployeeForm from './components/AddEmployeeForm';
import Attendance from './components/Attendance';
import LeaveDetails from './components/LeaveDetails';
import SalarySlip from './components/SalarySlip';
import LeaveApplication from './components/LeaveApplication';
import DeviceAttendance from './components/DeviceAttendance';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<CompanyInfoForm />} />
          <Route path="/user-detail" element={<UserDetail />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployeeForm />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave-details" element={<LeaveDetails />} />
          <Route path="/salary-slip" element={<SalarySlip />} />
          <Route path="/leave-application" element={<LeaveApplication />} />
          <Route path="/device-attendance" element={<DeviceAttendance />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;