// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Všechny naše komponenty a stránky
import Navbar from './components/Navbar';
import ScrollArrow from './components/ScrollArrow';
import HomePage from './pages/HomePage';
import ReservationPage from './pages/ReservationPage';
import AdminPage from './pages/AdminPage';
import MenuPage from './pages/MenuPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <ScrollArrow />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rezervace" element={<ReservationPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;