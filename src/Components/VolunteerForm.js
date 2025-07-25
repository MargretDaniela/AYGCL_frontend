import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    availability: '',
    bio: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API call later
    alert("Thank you for applying! (This is a test)");
  };

  return (
    <Container className="" id='volunteerForm'style={{marginTop:'150px'}}>
      <Card className="shadow-lg p-4" style={{ borderRadius: '20px' }}>
        <h2 className="text-center mb-4" style={{ color: '#992525' }}>
          Volunteer / Mentor Application
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g. Counseling, Teaching, Leadership"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Availability</Form.Label>
            <Form.Control
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              placeholder="e.g. Weekends, Weekdays after 5pm"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Short Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
            />
          </Form.Group>

          <div className="text-center">
            <Button
              type="submit"
              style={{ backgroundColor: '#992525', borderColor: '#992525' }}
              className="px-4 py-2"
            >
              Submit Application
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default VolunteerForm;
