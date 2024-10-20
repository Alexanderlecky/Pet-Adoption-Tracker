import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; // Global styles for your app
import App from './App'; // Root component of your application
import { BrowserRouter } from 'react-router-dom'; // Enables routing

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Wrap the entire app in BrowserRouter for routing support */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
