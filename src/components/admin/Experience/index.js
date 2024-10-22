import React, { useState } from 'react';
import { TagsInput } from 'react-tag-input-component';
import { Modal, Button, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Experience = () => {
  const [formData, setFormData] = useState({
    dateFrom: '',
    dateTo: '',
    role: '',
    description: '',
    technology: [],
  });

  const [experiences, setExperiences] = useState([]); // Store experiences
  const [editIndex, setEditIndex] = useState(null); // Track edit index
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  // Open modal for new entry
  const handleOpenModal = () => {
    setFormData({
      dateFrom: '',
      dateTo: '',
      role: '',
      description: '',
      technology: [],
    });
    setEditIndex(null);
    setShowModal(true);
  };

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle technology input changes
  const handleTechChange = (tech) => {
    setFormData({
      ...formData,
      technology: tech,
    });
  };

  // Handle form submission for adding/updating experience
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) {
      setExperiences([...experiences, formData]);
    } else {
      const updatedExperiences = experiences.map((exp, index) =>
        index === editIndex ? formData : exp
      );
      setExperiences(updatedExperiences);
    }
    setShowModal(false);
  };

  // Edit existing experience entry
  const handleEdit = (index) => {
    setFormData(experiences[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  // Delete experience entry
  const handleDelete = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  return (
    <div className="container">
      <h2>Experience</h2>
      <Button variant="primary" onClick={handleOpenModal}>
        Add New Experience
      </Button>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Date From</th>
            <th>Date To</th>
            <th>Role</th>
            <th>Description</th>
            <th>Technologies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((experience, index) => (
            <tr key={index}>
              <td>{experience.dateFrom}</td>
              <td>{experience.dateTo}</td>
              <td>{experience.role}</td>
              <td>{experience.description}</td>
              <td>{experience.technology.join(', ')}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(index)}>
                  Update
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for adding/updating experiences */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex === null ? 'Add New Experience' : 'Update Experience'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Date From:</label>
              <input
                type="date"
                name="dateFrom"
                className="form-control"
                value={formData.dateFrom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label>Date To:</label>
              <input
                type="date"
                name="dateTo"
                className="form-control"
                value={formData.dateTo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label>Role:</label>
              <input
                type="text"
                name="role"
                className="form-control"
                value={formData.role}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label>Description:</label>
              <textarea
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label>Technologies:</label>
              <TagsInput
                value={formData.technology}
                onChange={handleTechChange}
                name="technology"
                placeHolder="Enter technologies"
              />
            </div>

            <Button variant="primary" type="submit" className="mt-3">
              {editIndex === null ? 'Add Experience' : 'Update Experience'}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Experience;
