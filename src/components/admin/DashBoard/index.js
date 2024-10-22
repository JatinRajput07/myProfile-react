import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ReactQuill from 'react-quill';

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id'); // Extract id from query params

  const quillRef = useRef(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`/api/your-endpoint/${id}`);
          const { title, info, imageUrl } = response.data;
          setTitle(title);
          setInfo(info);
          setImage(imageUrl);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !info || (!image && !id)) {
      alert('Please fill all the fields!');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('info', info);
    if (image && typeof image !== 'string') {
      formData.append('image', image);
    }

    try {
      if (id) {
        const response = await axios.put(`/api/your-endpoint/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          alert('Data updated successfully!');
          location('/admin/dashboard'); // Use history.push for navigation
        }
      } else {
        const response = await axios.post('/api/your-endpoint', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          alert('Data submitted successfully!');
          location('/admin/dashboard');
        }
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>{id ? 'Update' : 'Create'} Entry</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="info">Info (Rich Text Editor)</label>

          <ReactQuill
            value={info}
            ref={quillRef}
            onChange={setInfo}
            placeholder="Enter detailed information"
            className="form-control"
            required
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && typeof image === 'string' && (
            <div className="mt-2">
              <img src={image} alt="Uploaded" style={{ width: '100px' }} />
            </div>
          )}
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Submitting...' : id ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
