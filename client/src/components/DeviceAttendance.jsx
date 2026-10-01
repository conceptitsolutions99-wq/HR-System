import React, { useState, useEffect } from 'react';

const DeviceAttendance = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/device-attendance')
      .then(res => res.json())
      .then(data => setLogs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-6">Device Attendance</h2>
      {logs.length === 0 ? <p className="text-gray-500">No attendance logs found.</p> : <pre>{JSON.stringify(logs, null, 2)}</pre>}
    </div>
  );
};

export default DeviceAttendance;
