import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import Libros from './Libros';
import Documents from './Documentos'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Usar BrowserRouter para habilitar el enrutamiento basado en la URL en la aplicación */}
    <BrowserRouter>
          {/* Configurar rutas para la aplicación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/documentos" element={<Documents />} />
        <Route path="/libros" element={<Libros />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
