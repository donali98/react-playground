import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './i18n.js'; // Importa la configuración de i18n
import './output.css'; // Importa archivo resultado del comando de procesamiento de Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
