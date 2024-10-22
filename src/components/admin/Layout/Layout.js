import '../../../Admin.css'
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import { Link ,useLocation } from 'react-router-dom';

function Layout({ children }) {
  const router = useLocation(); // Get the current route

  const isActive = (path) => router.pathname === path ? 'active' : '';

  return (
    <div>
      <Helmet>
        <title>Test-Page</title>
      </Helmet>
      <Header />

      <div className="container-fluid admin-panel">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/admin" className={`nav-link ${isActive('/home')}`} aria-current="page">
                    <span data-feather="home"></span>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/projects" className={`nav-link ${isActive('/projects')}`}>
                    <span data-feather="file"></span>
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/experience" className={`nav-link ${isActive('/experience')}`}>
                    <span data-feather="shopping-cart"></span>
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/contacts" className={`nav-link ${isActive('/contacts')}`}>
                    <span data-feather="shopping-cart"></span>
                    Contact-List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/about" className={`nav-link ${isActive('/about')}`}>
                    <span data-feather="shopping-cart"></span>
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            </div>
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
