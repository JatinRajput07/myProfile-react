import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const URL = 'http://localhost:3200'; // Correct base URL

const Axios = axios.create({
    baseURL: `${URL}/admin`,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
});

// Request interceptor to attach token
Axios.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle errors and redirect
Axios.interceptors.response.use(
    (response) => {
        return response; 
    },
    (error) => {
        if (error.response && error.response.status === 500) {
            const navigate = useNavigate(); // Get history from React Router
            navigate('/login'); // Change '/login' to your login route
        }
        return Promise.reject(error);
    }
);

export default Axios;
