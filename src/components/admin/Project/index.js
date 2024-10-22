import React, { useState, useEffect } from 'react';
import { TagsInput } from 'react-tag-input-component';
import { Modal, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fatchProjects, addProject, updateProject, deleteProject } from '../../../redux/productSlice';

const Projects = () => {
    const [formData, setFormData] = useState({
        year: '',
        image: null,
        projectName: '',
        madeAt: '',
        technology: [],
        projectUrl: '',
    });
    const [editIndex, setEditIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const projects = useSelector(state => state.project);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fatchProjects());
    }, [dispatch,]);

    const handleOpenModal = () => {
        setFormData({
            year: '',
            image: null,
            projectName: '',
            madeAt: '',
            technology: [],
            projectUrl: '',
        });
        setEditIndex(null);
        setShowModal(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            image: e.target.files[0],
        }));
    };

    const handleTechChange = (tech) => {
        setFormData((prev) => ({
            ...prev,
            technology: tech,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSubmit = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          console.log(key, value)
            if (key === 'technology') {
                formDataToSubmit.append(key, JSON.stringify(value));
            } else {
                formDataToSubmit.append(key, value);
            }
        });

        try {
            if (editIndex === null) {
                await dispatch(addProject(formDataToSubmit));
                dispatch(fatchProjects());
            } else {
                const projectId = projects[editIndex]._id;
                await dispatch(updateProject({ id: projectId, data: formDataToSubmit }));
                dispatch(fatchProjects());
            }
            setShowModal(false);
        } catch (error) {
            console.error('Error saving project:', error);
        }
    };

    const handleEdit = (index) => {
        setFormData(projects[index]);
        setEditIndex(index);
        setShowModal(true);
    };

    const handleDelete = async (index) => {
        const projectId = projects[index]._id;
        try {
            await dispatch(deleteProject(projectId));
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div className="container">
            <h2>Projects</h2>
            <Button variant="primary" onClick={handleOpenModal}>
                Add New Project
            </Button>

            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Project Name</th>
                        <th>Made At</th>
                        <th>Technologies</th>
                        <th>Project URL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={project._id}>
                            <td>{project.year}</td>
                            <td>{project.projectName}</td>
                            <td>{project.madeAt}</td>
                            <td>{Array.isArray(project.technology) ? project.technology.join(', ') : ''}</td>
                            <td>
                                <a href={project.projectUrl} target="_blank" rel="noreferrer">
                                    {project.projectUrl}
                                </a>
                            </td>
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

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editIndex === null ? 'Add New Project' : 'Update Project'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Year:</label>
                            <input
                                type="number"
                                name="year"
                                className="form-control"
                                value={formData.year}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Project Name:</label>
                            <input
                                type="text"
                                name="projectName"
                                className="form-control"
                                value={formData.projectName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Made At:</label>
                            <input
                                type="text"
                                name="madeAt"
                                className="form-control"
                                value={formData.madeAt}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Technologies:</label>
                            <TagsInput
                                value={formData.technology}
                                onChange={handleTechChange}
                                placeHolder="Enter technologies"
                            />
                        </div>

                        <div className="mb-3">
                            <label>Project URL:</label>
                            <input
                                type="url"
                                name="projectUrl"
                                className="form-control"
                                value={formData.projectUrl}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Image:</label>
                            <input
                                type="file"
                                name="image"
                                className="form-control"
                                onChange={handleFileChange}
                            />
                        </div>

                        <Button variant="primary" type="submit">
                            {editIndex === null ? 'Add Project' : 'Update Project'}
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Projects;
