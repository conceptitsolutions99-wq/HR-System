import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployeeForm = () => {
    const [formData, setFormData] = useState({ emp_id: '', first_name: '', last_name: '', email: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/employees', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                navigate('/employees');
            } else {
                throw new Error('Failed to add employee');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded shadow-md">
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">Add New Employee</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input className="w-full p-2 border rounded" placeholder="Employee ID" onChange={(e) => setFormData({...formData, emp_id: e.target.value})} required />
                <input className="w-full p-2 border rounded" placeholder="First Name" onChange={(e) => setFormData({...formData, first_name: e.target.value})} required />
                <input className="w-full p-2 border rounded" placeholder="Last Name" onChange={(e) => setFormData({...formData, last_name: e.target.value})} required />
                <input className="w-full p-2 border rounded" placeholder="Email" type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployeeForm;
