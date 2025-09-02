// src/components/Navbar.jsx
import { useRef } from 'react'; // 1. IMPORTUJEME useRef
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const collapseDivRef = useRef(null); // 2. VYTVOŘÍME REF PRO KONTEJNER MENU

  // 3. TATO FUNKCE ZAVŘE MENU, POKUD JE OTEVŘENÉ
  const handleLinkClick = () => {
    // Zkontrolujeme, zda má menu na sobě třídu 'show', která značí, že je viditelné
    if (collapseDivRef.current.classList.contains('show')) {
      // Pokud ano, najdeme tlačítko a "klikneme" na něj, aby se menu zavřelo
      const toggler = document.querySelector('.navbar-toggler');
      if (toggler) {
        toggler.click();
      }
    }
  };

  const scrollToSection = (sectionId) => {
    handleLinkClick(); // Zavoláme zavření menu
    if (location.pathname === '/') {
      scroller.scrollTo(sectionId, { spy: true, smooth: true, offset: -70, duration: 500 });
    } else {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(sectionId, { spy: true, smooth: true, offset: -70, duration: 500 });
      }, 100);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <RouterLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-2" />
          <span className="d-none d-sm-inline">Hostinec pod Kaštany</span>
        </RouterLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 4. PŘIDÁME REF K TOMUTO DIVU */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseDivRef}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('filozofie')}>Naše filozofie</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('pribeh')}>Příběh</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('galerie')}>Galerie</a>
            </li>
            <li className="nav-item">
              {/* 5. PŘIDÁME onClick K ODKAZŮM */}
              <RouterLink className="nav-link" to="/menu" onClick={handleLinkClick}>Menu</RouterLink>
            </li>
            <li className="nav-item ms-lg-4 mt-2 mt-lg-0">
              <RouterLink className="btn btn-primary fw-bold" to="/rezervace" onClick={handleLinkClick}>Rezervovat stůl</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;