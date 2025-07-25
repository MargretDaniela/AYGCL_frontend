import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    can_manage_volunteers: false,
    can_manage_programs: false,
  });
  const [currentAdminId, setCurrentAdminId] = useState(null);

  const fetchAdmins = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/v1/admin/all', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();
      console.log('Admins data from backend:', data);
      setAdmins(data.admins || []);  // make sure we get the array
    } catch (err) {
      console.error('Failed to fetch admins:', err);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const openModal = (admin) => {
    setCurrentAdminId(admin.id);
    setFormData({
      first_name: admin.first_name,
      last_name: admin.last_name,
      email: admin.email,
      password: '',
      can_manage_volunteers: admin.can_manage_volunteers || false,
      can_manage_programs: admin.can_manage_programs || false,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      can_manage_volunteers: false,
      can_manage_programs: false,
    });
    setCurrentAdminId(null);
  };

  const handleUpdate = async () => {
    try {
      const updateData = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        can_manage_volunteers: formData.can_manage_volunteers,
        can_manage_programs: formData.can_manage_programs,
        user_type: 'admin',
      };

      if (formData.password.trim() !== '') {
        updateData.password = formData.password;
      }

      const res = await fetch(`http://localhost:5000/api/v1/admin/update/${currentAdminId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(updateData),
      });

      if (res.ok) {
        fetchAdmins();
        closeModal();
      } else {
        const errorData = await res.json();
        console.error('Failed to update admin:', errorData);
      }
    } catch (err) {
      console.error('Error updating admin:', err);
    }
  };

  const handleDelete = async (adminId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/admin/delete/${adminId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (res.ok) {
        fetchAdmins();
      } else {
        console.error('Failed to delete admin');
      }
    } catch (err) {
      console.error('Error deleting admin:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Admins</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Can Manage Volunteers</th>
            <th>Can Manage Programs</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No admins found</td>
            </tr>
          ) : (
            admins.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.first_name} {admin.last_name}</td>
                <td>{admin.email}</td>
                <td>{admin.can_manage_volunteers !== undefined ? (admin.can_manage_volunteers ? 'Yes' : 'No') : 'N/A'}</td>
                <td>{admin.can_manage_programs !== undefined ? (admin.can_manage_programs ? 'Yes' : 'No') : 'N/A'}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => openModal(admin)}
                    className="me-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(admin.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.first_name}
                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.last_name}
                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Leave blank to keep current password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <Form.Text className="text-muted">
                Leave blank if you don’t want to change the password.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Check
                type="checkbox"
                label="Can manage volunteers"
                checked={formData.can_manage_volunteers}
                onChange={(e) =>
                  setFormData({ ...formData, can_manage_volunteers: e.target.checked })
                }
              />
              <Form.Check
                type="checkbox"
                label="Can manage programs"
                checked={formData.can_manage_programs}
                onChange={(e) =>
                  setFormData({ ...formData, can_manage_programs: e.target.checked })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageAdmins;
