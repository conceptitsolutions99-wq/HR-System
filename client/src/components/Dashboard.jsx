import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, CalendarCheck, Clock, DollarSign, ArrowUpRight } from 'lucide-react';

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">HR Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Overview of human resources, attendance, and payroll performance</p>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Staff</span>
            <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">248</span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold ml-2 inline-flex items-center">
              +4.5% <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Active registered employees</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Present Today</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <CalendarCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">234</span>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold ml-2">94.3%</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Checked in via biometric / portal</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">On Leave</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">14</span>
            <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold ml-2">Approved</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Paid, casual, and sick leaves</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Monthly Payroll</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">$342,800</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Disbursed on 1st of month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">Salary Expenditure Trends</h2>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff', borderRadius: '8px' }} />
                <Bar dataKey="salary" fill="#0d9488" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4">Attendance Breakdown</h2>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff', borderRadius: '8px' }} />
                <Legend />
                <Bar dataKey="present" fill="#0d9488" radius={[4, 4, 0, 0]} name="Present" />
                <Bar dataKey="off" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Off Day" />
                <Bar dataKey="leave" fill="#ef4444" radius={[4, 4, 0, 0]} name="Leave" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
