import React, { useState, useEffect } from 'react';

const INITIAL_LEAVES = [
  { id: 1, emp_id: 'EMP-1001', name: 'Sarah Johnson', leave_type: 'Annual Leave', start_date: '2026-10-10', end_date: '2026-10-15', status: 'Approved', days: 5 },
  { id: 2, emp_id: 'EMP-1005', name: 'Lisa Anderson', leave_type: 'Sick Leave', start_date: '2026-10-01', end_date: '2026-10-03', status: 'Approved', days: 2 },
  { id: 3, emp_id: 'EMP-1002', name: 'Michael Chen', leave_type: 'Casual Leave', start_date: '2026-10-20', end_date: '2026-10-21', status: 'Pending', days: 1 },
];

const LeaveDetails = () => {
  const [leaves, setLeaves] = useState(INITIAL_LEAVES);

  useEffect(() => {
    fetch('http://localhost:5000/api/leave/details')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setLeaves(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Leave Details & Quotas</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Employee leave history, balance and approval statuses</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-900/40 text-gray-600 dark:text-gray-400 text-xs uppercase font-semibold border-b border-gray-200 dark:border-gray-700">
                <th className="py-3.5 px-5">Emp ID</th>
                <th className="py-3.5 px-5">Employee</th>
                <th className="py-3.5 px-5">Leave Type</th>
                <th className="py-3.5 px-5">Start Date</th>
                <th className="py-3.5 px-5">End Date</th>
                <th className="py-3.5 px-5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
              {leaves.map((leave) => (
                <tr key={leave.id} className="hover:bg-gray-50/60 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-teal-600 dark:text-teal-400">
                    {leave.emp_id || `EMP-${leave.employee_id}`}
                  </td>
                  <td className="py-3.5 px-5 font-medium text-gray-900 dark:text-white">
                    {leave.name || `Employee #${leave.employee_id}`}
                  </td>
                  <td className="py-3.5 px-5 text-gray-600 dark:text-gray-300">{leave.leave_type}</td>
                  <td className="py-3.5 px-5 text-gray-600 dark:text-gray-300">{leave.start_date}</td>
                  <td className="py-3.5 px-5 text-gray-600 dark:text-gray-300">{leave.end_date}</td>
                  <td className="py-3.5 px-5">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                      leave.status === 'Approved'
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                        : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                    }`}>
                      {leave.status}
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

export default LeaveDetails;
