import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes for route handling
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import About from './pages/About';
import PrestigeProperties from './pages/PrestigeProperties'; // Make sure this component exists
import './App.css';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/prestige-properties" element={<PrestigeProperties />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
