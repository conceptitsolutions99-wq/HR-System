import React from 'react';

const Attendance = () => {
  const attendanceData = [
    { id: 1, name: 'John Doe', status: 'Present', date: '2026-10-01' },
    { id: 2, name: 'Jane Smith', status: 'Absent', date: '2026-10-01' },
  ];

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-6">Attendance Management</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2">Employee</th>
            <th className="py-2">Status</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map(row => (
            <tr key={row.id} className="border-b">
              <td className="py-2">{row.name}</td>
              <td className="py-2">{row.status}</td>
              <td className="py-2">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
