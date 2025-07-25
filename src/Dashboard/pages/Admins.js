import React, { useEffect, useState } from 'react';
import { Button, Form, Table, Container } from 'react-bootstrap';

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  // Fetch admins on mount
  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/v1/admin/all', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();
      if (Array.isArray(data.admins)) {
        setAdmins(data.admins);
      } else {
        setAdmins([]);
        console.error('Unexpected response:', data);
      }
    } catch (err) {
      console.error('Error fetching admins:', err);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Create new admin
  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    try {
      const res = await fetch('http://localhost:5000/api/v1/admin/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setSuccessMsg('Admin created successfully!');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          contact: '',
          password: '',
        });
        fetchAdmins();
      } else {
        setError(data.error || 'Failed to create admin');
      }
    } catch (err) {
      setError('Network error: ' + err.message);
    }
  };

  // Placeholder: Delete admin
  const handleDeleteAdmin = async (adminId) => {
    if (window.confirm('Are you sure you want to delete this admin?')) {
      try {
        await fetch(`http://localhost:5000/api/v1/admin/delete/${adminId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        fetchAdmins();
      } catch (err) {
        console.error('Error deleting admin:', err);
      }
    }
  };

  return (
    <Container className="mt-4">
      <h2>Create Baby Admin</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}

      <Form onSubmit={handleCreateAdmin} className="mb-4">
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Admin
        </Button>
      </Form>

      <h2>Existing Admins</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">No admins found</td>
            </tr>
          ) : (
            admins.map((admin, idx) => (
              <tr key={admin.id}>
                <td>{idx + 1}</td>
                <td>{admin.first_name}</td>
                <td>{admin.last_name}</td>
                <td>{admin.email}</td>
                <td>{admin.contact}</td>
                <td>
                  {/* For now just delete button */}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteAdmin(admin.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admins;
