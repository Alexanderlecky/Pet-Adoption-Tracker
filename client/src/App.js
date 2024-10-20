import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Relative path to components
import Footer from './components/Footer';  // Relative path to components
import Home from './pages/Home';           // Relative path to pages
import Properties from './pages/Properties';  // Relative path to pages
import About from './pages/About';         // Relative path to pages

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
