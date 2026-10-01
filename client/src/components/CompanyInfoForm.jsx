import React, { useState, useEffect } from 'react';

const CompanyInfoForm = () => {
  const [formData, setFormData] = useState({
    companyName: '', email: '', country: '', state: '', city: '',
    mobile: '', phone: '', hotline: '', fax: '', website: '', address: ''
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/company')
      .then(res => res.json())
      .then(data => data && setFormData(data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    fetch('http://localhost:5000/api/company', {
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
      <h2 className="text-xl font-bold mb-6 text-green-700">Company Information</h2>
      <div className="grid grid-cols-2 gap-6">
        {Object.keys(formData).map(field => field !== 'address' && (
          <div key={field}>
            <label className="block text-gray-700 mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
            <input
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder={field.replace(/([A-Z])/g, ' $1')}
            />
          </div>
        ))}
        <div className="col-span-2">
            <label className="block text-gray-700 mb-1">Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} className="w-full border rounded p-2" rows="3"></textarea>
        </div>
      </div>
      <div className="mt-6">
        <button onClick={handleSave} className="bg-green-600 text-white px-6 py-2 rounded mr-4">SAVE</button>
        <button className="bg-orange-500 text-white px-6 py-2 rounded">CANCEL</button>
      </div>
    </div>
  );
};

export default CompanyInfoForm;
