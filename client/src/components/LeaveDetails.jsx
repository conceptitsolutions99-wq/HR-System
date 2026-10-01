import React, { useState, useEffect } from 'react';

const LeaveDetails = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/leave/details')
      .then(res => res.json())
      .then(data => setLeaves(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-6">Leave Details</h2>
      {leaves.length === 0 ? <p className="text-gray-500">No leave records found.</p> : <pre>{JSON.stringify(leaves, null, 2)}</pre>}
    </div>
  );
};

export default LeaveDetails;
