// src/components/Navbar.jsx
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Načtení loga pro zobrazení v liště

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <RouterLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="80" height="80" className="d-inline-block align-text-top me-2" />
          <span className="d-none d-sm-inline">Hostinec pod Kaštany</span>
        </RouterLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <ScrollLink className="nav-link" to="filozofie" spy={true} smooth={true} offset={-70} duration={500}>Naše filozofie</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="pribeh" spy={true} smooth={true} offset={-70} duration={500}>Příběh</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="galerie" spy={true} smooth={true} offset={-70} duration={500}>Galerie</ScrollLink>
            </li>
            <li className="nav-item ms-lg-4">
              <RouterLink className="btn btn-primary fw-bold" to="/rezervace">Rezervovat stůl</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;