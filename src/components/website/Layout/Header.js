import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav mx-auto nav-effect">
                        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to="/" className="nav-link text-white ms-4">Home</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/experience' ? 'active' : ''}`}>
                            <Link to="/experience" className="nav-link text-white ms-4">Experience</Link>
                        </li>
                        <li className={`nav-item box-1 ${location.pathname === '/projects' ? 'active' : ''}`}>
                            <Link to="/projects" className="nav-link text-white ms-4">Projects</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                            <Link to="/about" className="nav-link text-white ms-4">About</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                            <Link to="/contact" className="nav-link text-white ms-4">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
