import React, { useState, useEffect } from 'react';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/employees')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch employees');
        return res.json();
      })
      .then(data => setEmployees(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-6">Employees</h2>
      {employees.length === 0 ? (
        <p className="text-gray-500">No employees found.</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Employee ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id} className="border-b">
                <td className="py-2">{emp.emp_id}</td>
                <td className="py-2">{emp.first_name} {emp.last_name}</td>
                <td className="py-2">{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
