
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Cookies from 'js-cookie';

// Website Components
import WebSiteLayout from './components/website/Layout/Layout';
import Home from './components/website/Home';
import Experience from './components/website/Experience';
import Project from './components/website/Projects';
import About from './components/website/About';
import Contact from './components/website/Contact';


// Admin Components
import AdminLayout from './components/admin/Layout/Layout';
import Login from './components/admin/Login';
import DashBoard from './components/admin/DashBoard';
import AdminProject from './components/admin/Project';
import AdminExperience from './components/admin/Experience';
import AdminAbout from './components/admin/About';
import AdminContact from './components/admin/Contact';


function App() {
  const isAuthenticated = () => {
    return !!Cookies.get('token');
  };

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/admin/login" state={{ from: window.location.pathname }} />
    }
    return children;
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' element={
            <WebSiteLayout>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/experience' element={<Experience />}></Route>
                <Route path='/projects' element={<Project />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
              </Routes>
            </WebSiteLayout>
          } />


          <Route path="/admin/login" element={!isAuthenticated() ? <Login /> : <Navigate to="/admin/" />} />
          < Route
            path="/admin/*"
            element={
              < AdminLayout >
                <Routes>
                  <Route path="/" element={<ProtectedRoute>< DashBoard /></ProtectedRoute>} />
                  <Route path='/experience' element={<ProtectedRoute><AdminExperience /></ProtectedRoute>}></Route>
                  <Route path='/projects' element={<ProtectedRoute><AdminProject /></ProtectedRoute>}></Route>
                  <Route path='/about' element={<ProtectedRoute><AdminAbout /></ProtectedRoute>}></Route>
                  <Route path='/contacts' element={<ProtectedRoute><AdminContact /></ProtectedRoute>}></Route>
                </Routes>
              </AdminLayout>
            }
          />

        </Routes>
      </Router>

    </>

  );
}

export default App;
