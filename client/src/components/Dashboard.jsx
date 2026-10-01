import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const salaryData = [
  { name: 'April', salary: 6058.3 },
  { name: 'May', salary: 5011.16 },
  { name: 'July', salary: 12259 },
];

const attendanceData = [
  { name: 'April', total: 30, present: 13, off: 8, holiday: 8, leave: 1 },
  { name: 'May', total: 31, present: 12, off: 10, holiday: 9, leave: 0 },
  { name: 'July', total: 31, present: 21, off: 9, holiday: 0, leave: 1 },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Salary Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salaryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="salary" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Attendance Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#f48fb1" />
              <Bar dataKey="present" fill="#b0bec5" />
              <Bar dataKey="off" fill="#1e88e5" />
              <Bar dataKey="holiday" fill="#00e5ff" />
              <Bar dataKey="leave" fill="#e53935" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
