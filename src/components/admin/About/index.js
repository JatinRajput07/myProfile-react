import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const About = () => {
  const [formData, setFormData] = useState({
    description: '',
    email: '',
    phone: '',
    image: null,
  });

  const [aboutList, setAboutList] = useState([]); 
  const [editIndex, setEditIndex] = useState(null); 

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle description input via ReactQuill
  const handleQuillChange = (value) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  // Handle image file selection
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  // Handle form submission (create or update)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = { ...formData };
    if (formData.image) {
      newFormData.image = URL.createObjectURL(formData.image); // Preview image
    }

    if (editIndex === null) {
      setAboutList([...aboutList, newFormData]); // Add new entry
    } else {
      const updatedAboutList = aboutList.map((item, index) =>
        index === editIndex ? newFormData : item
      );
      setAboutList(updatedAboutList); // Update existing entry
      setEditIndex(null); // Reset edit index after updating
    }

    // Clear form after submission
    setFormData({
      description: '',
      email: '',
      phone: '',
      image: null,
    });
  };

  // Edit an entry by populating the form with the selected entry
  const handleEdit = (index) => {
    setFormData(aboutList[index]);
    setEditIndex(index);
  };

  return (
    <div className="container mt-4">
      <h2>About Us</h2>

      {/* Form to create or update entry */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Description:</label>
          <ReactQuill
            theme="snow"
            value={formData.description}
            onChange={handleQuillChange}
            className="form-control"
          />
        </div>

        <div className="form-group mt-3">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group mt-3">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group mt-3">
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="form-control"
          />
        </div>

        <button className="mt-4"  type="submit">
          {editIndex === null ? 'Create' : 'Update'}
        </button>
      </form>

      {/* Display entries in a table */}
      {/* {aboutList.length > 0 && (
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Description</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {aboutList.map((item, index) => (
              <tr key={index}>
                <td dangerouslySetInnerHTML={{ __html: item.description }}></td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  {item.image && <img src={item.image} alt="About" width="100" />}
                </td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )} */}
    </div>
  );
};

export default About;
