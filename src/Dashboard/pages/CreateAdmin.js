import React, { useState } from 'react';
import axios from 'axios';

const CreateAdmin = ({ token }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // prevent double clicks

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    if (loading) return; // Prevent double submission
    setMessage('');
    setError('');

    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    console.log('Sending to backend:', formData);

    try {
      const res = await axios.post(
        'http://localhost:5000/api/v1/admin/create',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(res.data.message || 'New admin created successfully!');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        contact: '',
        password: '',
      });
    } catch (err) {
      console.error('Error creating admin:', err);
      setError(
        err.response?.data?.error || 'Failed to create admin. Please check token or permissions.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        maxWidth: '700px',
        border: '1px solid #eee',
        padding: '20px 25px',
        borderRadius: '10px',
        boxShadow: '0 0 12px rgba(0, 0, 0, 0.05)',
      }}
    >
      <h3 className="text-center mb-4 fw-bold">Create New Admin</h3>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Remove form tag to avoid automatic form submission */}
      <div>
        {['first_name', 'last_name', 'contact', 'email', 'password'].map((field) => (
          <div className="form-group mb-3" key={field}>
            <label className="text-capitalize">{field.replace('_', ' ')}</label>
            <input
              type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
              name={field}
              className="form-control"
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <button
          type="button"
          onClick={handleClick}
          disabled={loading}
          className="btn w-100 text-white"
          style={{ backgroundColor: '#800000' }}
        >
          {loading ? 'Creating...' : 'Create Admin'}
        </button>
      </div>
    </div>
  );
};

export default CreateAdmin;
