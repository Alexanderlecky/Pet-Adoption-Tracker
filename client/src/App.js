import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import About from './pages/About';
import PrestigeProperties from './pages/PrestigeProperties';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';
<<<<<<< HEAD
import ProtectedRoute from './ProtectedRoute';  // Import ProtectedRoute
=======
>>>>>>> 913351bb (done some changes)

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protect the following routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/properties" element={<ProtectedRoute><Properties /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/prestige-properties" element={<ProtectedRoute><PrestigeProperties /></ProtectedRoute>} />
        
        <Route path="*" element={<NotFound />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/prestige-properties" element={<PrestigeProperties />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> 
>>>>>>> 913351bb (done some changes)
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
