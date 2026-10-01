import React, { useState, useEffect } from 'react';
import { CalendarCheck, CheckCircle, XCircle, Clock } from 'lucide-react';

const INITIAL_ATTENDANCE = [
  { id: 1, employee_id: 'EMP-1001', name: 'Sarah Johnson', status: 'Present', date: '2026-10-01', time: '08:55 AM' },
  { id: 2, employee_id: 'EMP-1002', name: 'Michael Chen', status: 'Present', date: '2026-10-01', time: '09:02 AM' },
  { id: 3, employee_id: 'EMP-1003', name: 'Emily Rodriguez', status: 'Absent', date: '2026-10-01', time: '-' },
  { id: 4, employee_id: 'EMP-1004', name: 'David Park', status: 'Present', date: '2026-10-01', time: '08:45 AM' },
  { id: 5, employee_id: 'EMP-1005', name: 'Lisa Anderson', status: 'Leave', date: '2026-10-01', time: '-' }
];

const Attendance = () => {
  const [attendance, setAttendance] = useState(INITIAL_ATTENDANCE);

  useEffect(() => {
    fetch('http://localhost:5000/api/attendance')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setAttendance(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Attendance Records</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Daily check-in, presence log and punctuality monitoring</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-900/40 text-gray-600 dark:text-gray-400 text-xs uppercase font-semibold border-b border-gray-200 dark:border-gray-700">
                <th className="py-3.5 px-5">Emp ID</th>
                <th className="py-3.5 px-5">Employee</th>
                <th className="py-3.5 px-5">Date</th>
                <th className="py-3.5 px-5">Check-in Time</th>
                <th className="py-3.5 px-5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
              {attendance.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50/60 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-teal-600 dark:text-teal-400">
                    {row.employee_id}
                  </td>
                  <td className="py-3.5 px-5 font-medium text-gray-900 dark:text-white">
                    {row.name || `Employee #${row.employee_id}`}
                  </td>
                  <td className="py-3.5 px-5 text-gray-600 dark:text-gray-300">{row.date}</td>
                  <td className="py-3.5 px-5 text-gray-500 dark:text-gray-400">{row.time || '09:00 AM'}</td>
                  <td className="py-3.5 px-5">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      row.status === 'Present'
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                        : row.status === 'Absent'
                        ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300'
                        : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
