import React, { useState } from 'react';

const LeaveApplication = () => {
  const [formData, setFormData] = useState({ employee_id: '', leave_type: '', start_date: '', end_date: '', reason: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/leave/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => console.error(err));
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-6">Leave Application</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map(field => (
            <input key={field} type={field.includes('date') ? 'date' : 'text'} placeholder={field} className="w-full border p-2 mb-2" onChange={e => setFormData({...formData, [field]: e.target.value})}/>
        ))}
        <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default LeaveApplication;
