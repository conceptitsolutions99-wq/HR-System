import React, { useState, useEffect } from 'react';
import { CreditCard, Download, DollarSign } from 'lucide-react';

const INITIAL_SLIPS = [
  { id: 1, emp_id: 'EMP-1001', name: 'Sarah Johnson', month: 'September 2026', basic: 5200, allowances: 800, deductions: 250, net: 5750 },
  { id: 2, emp_id: 'EMP-1002', name: 'Michael Chen', month: 'September 2026', basic: 4500, allowances: 600, deductions: 200, net: 4900 },
  { id: 3, emp_id: 'EMP-1003', name: 'Emily Rodriguez', month: 'September 2026', basic: 4100, allowances: 500, deductions: 180, net: 4420 },
  { id: 4, emp_id: 'EMP-1004', name: 'David Park', month: 'September 2026', basic: 5600, allowances: 900, deductions: 300, net: 6200 },
];

const SalarySlip = () => {
  const [slips, setSlips] = useState(INITIAL_SLIPS);

  useEffect(() => {
    fetch('http://localhost:5000/api/salary')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setSlips(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Salary Slips</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Monthly payroll breakdown, deductions, and payment status</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-900/40 text-gray-600 dark:text-gray-400 text-xs uppercase font-semibold border-b border-gray-200 dark:border-gray-700">
                <th className="py-3.5 px-5">Emp ID</th>
                <th className="py-3.5 px-5">Employee</th>
                <th className="py-3.5 px-5">Period</th>
                <th className="py-3.5 px-5">Basic ($)</th>
                <th className="py-3.5 px-5">Allowances ($)</th>
                <th className="py-3.5 px-5">Deductions ($)</th>
                <th className="py-3.5 px-5">Net Salary ($)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
              {slips.map((slip) => (
                <tr key={slip.id} className="hover:bg-gray-50/60 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-teal-600 dark:text-teal-400">
                    {slip.emp_id || `EMP-${slip.employee_id}`}
                  </td>
                  <td className="py-3.5 px-5 font-medium text-gray-900 dark:text-white">
                    {slip.name || `Employee #${slip.employee_id}`}
                  </td>
                  <td className="py-3.5 px-5 text-gray-600 dark:text-gray-300">{slip.month || 'Current Month'}</td>
                  <td className="py-3.5 px-5 text-gray-600 dark:text-gray-300">${slip.basic || slip.basic_salary || 4000}</td>
                  <td className="py-3.5 px-5 text-emerald-600 dark:text-emerald-400 font-medium">+${slip.allowances || 500}</td>
                  <td className="py-3.5 px-5 text-rose-600 dark:text-rose-400 font-medium">-${slip.deductions || 150}</td>
                  <td className="py-3.5 px-5 font-bold text-gray-900 dark:text-white">${slip.net || slip.net_salary || 4350}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalarySlip;
