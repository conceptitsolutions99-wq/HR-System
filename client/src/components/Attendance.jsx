import React, { useState, useEffect } from 'react';

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/attendance')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch attendance');
        return res.json();
      })
      .then(data => setAttendance(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-6">Attendance Management</h2>
      {attendance.length === 0 ? (
        <p className="text-gray-500">No attendance records found.</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Employee ID</th>
              <th className="py-2">Status</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map(row => (
              <tr key={row.id} className="border-b">
                <td className="py-2">{row.employee_id}</td>
                <td className="py-2">{row.status}</td>
                <td className="py-2">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Attendance;
