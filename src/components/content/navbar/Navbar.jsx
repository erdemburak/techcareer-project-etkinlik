import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(26, 58, 65, 0.7)', height: '75px', }}>
                <div className={`blog-navbar ${menuOpen ? 'menu-open' : ''}`}>
                    <div>
                        <Link to="/" className='no-underline'>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ paddingLeft: '30px', fontSize: '25px' }}>TechCareer</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div className='menu-toggle' onClick={toggleMenu}>
                            <i className="fa-solid fa-bars fa-lg" />
                        </div>
                        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                            <li><NavLink to="/" className='navbar-button' onClick={toggleMenu}>Etkinlikler</NavLink></li>
                            <li><NavLink to="/eskiEtkinlikler" className='navbar-button' onClick={toggleMenu}>Eski Etkinlikler</NavLink></li>
                            <li><NavLink to="/favoriEtkinlikler" className='navbar-button' onClick={toggleMenu}>Favoriler</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
