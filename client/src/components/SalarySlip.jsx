import React, { useState, useEffect } from 'react';

const SalarySlip = () => {
  const [slips, setSlips] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/salary')
      .then(res => res.json())
      .then(data => setSlips(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-6">Salary Slips</h2>
      {slips.length === 0 ? <p className="text-gray-500">No salary slips found.</p> : <pre>{JSON.stringify(slips, null, 2)}</pre>}
    </div>
  );
};

export default SalarySlip;
