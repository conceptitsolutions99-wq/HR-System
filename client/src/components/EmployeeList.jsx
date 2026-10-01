import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Search, Building, Mail, CreditCard } from 'lucide-react';

const INITIAL_EMPLOYEES = [
  { id: 1, emp_id: 'EMP-1001', first_name: 'Sarah', last_name: 'Johnson', email: 'sarah.j@company.com', department: 'Engineering', position: 'Senior Developer' },
  { id: 2, emp_id: 'EMP-1002', first_name: 'Michael', last_name: 'Chen', email: 'm.chen@company.com', department: 'Marketing', position: 'Marketing Manager' },
  { id: 3, emp_id: 'EMP-1003', first_name: 'Emily', last_name: 'Rodriguez', email: 'emily.r@company.com', department: 'Sales', position: 'Sales Representative' },
  { id: 4, emp_id: 'EMP-1004', first_name: 'David', last_name: 'Park', email: 'david.p@company.com', department: 'Engineering', position: 'DevOps Engineer' },
  { id: 5, emp_id: 'EMP-1005', first_name: 'Lisa', last_name: 'Anderson', email: 'lisa.a@company.com', department: 'Human Resources', position: 'HR Specialist' }
];

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      let list = [];
      try {
        const res = await fetch('http://localhost:5000/api/employees');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            list = data;
          }
        }
      } catch {
        // Backend offline (e.g. Vercel static deployment)
      }

      const local = JSON.parse(localStorage.getItem('hr_employees') || '[]');
      const combined = [...INITIAL_EMPLOYEES, ...local, ...list];

      // Deduplicate by emp_id or id
      const unique = Array.from(new Map(combined.map(item => [item.emp_id || item.id, item])).values());
      setEmployees(unique);
      setLoading(false);
    };

    fetchEmployees();
  }, []);

  const filtered = employees.filter(emp => {
    const query = search.toLowerCase();
    const fullName = `${emp.first_name || ''} ${emp.last_name || ''}`.toLowerCase();
    const email = (emp.email || '').toLowerCase();
    const empId = (emp.emp_id || '').toLowerCase();
    return fullName.includes(query) || email.includes(query) || empId.includes(query);
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Employees</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage employee directories, records, and assignments</p>
        </div>
        <Link
          to="/add-employee"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm shadow-sm hover:shadow transition-all cursor-pointer shrink-0"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add Employee</span>
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
        <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, ID, or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
            />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Showing {filtered.length} employees
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-900/40 text-gray-600 dark:text-gray-400 text-xs uppercase font-semibold border-b border-gray-200 dark:border-gray-700">
                <th className="py-3.5 px-5">Employee ID</th>
                <th className="py-3.5 px-5">Full Name</th>
                <th className="py-3.5 px-5">Email</th>
                <th className="py-3.5 px-5">Department</th>
                <th className="py-3.5 px-5">Position</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
              {loading ? (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-gray-500 dark:text-gray-400">Loading employees...</td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-12 text-center text-gray-500 dark:text-gray-400">
                    No employees found matching your criteria.
                  </td>
                </tr>
              ) : (
                filtered.map((emp) => (
                  <tr key={emp.id || emp.emp_id} className="hover:bg-gray-50/60 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-3.5 px-5 font-mono text-xs font-semibold text-teal-600 dark:text-teal-400">
                      {emp.emp_id}
                    </td>
                    <td className="py-3.5 px-5 font-medium text-gray-900 dark:text-white">
                      {emp.first_name} {emp.last_name}
                    </td>
                    <td className="py-3.5 px-5 text-gray-600 dark:text-gray-300">
                      {emp.email}
                    </td>
                    <td className="py-3.5 px-5 text-gray-600 dark:text-gray-300">
                      <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        {emp.department || 'General'}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-gray-500 dark:text-gray-400">
                      {emp.position || 'Staff'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
