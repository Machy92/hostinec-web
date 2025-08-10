import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'; // <-- Přidat import
import AOS from 'aos';             // <-- Přidat import
import 'aos/dist/aos.css';      // <-- Přidat import
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ReservationPage from './pages/ReservationPage';
import AdminPage from './pages/AdminPage';
import MenuPage from './pages/MenuPage';

function App() {
  // Tento blok inicializuje animace při prvním načtení aplikace
  useEffect(() => {
    AOS.init({
      duration: 1000, // Jak dlouho animace trvá
      once: true,     // Zda se má animace spustit jen jednou
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rezervace" element={<ReservationPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;