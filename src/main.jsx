import React from 'react';
import ReactDOM from 'react-dom/client'; // Správný import pro React 18
import App from './App.jsx';

// Import všech našich CSS stylů
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'; 

// Správné spuštění aplikace
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);