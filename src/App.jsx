import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import CarDetails from './pages/CarDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/car/:id" element={<CarDetails />} />
              <Route path="/checkout/:id" element={<Checkout />} />
            </Routes>
          </main>
          <footer style={{ textAlign: 'center', padding: '2rem', opacity: 0.7, marginTop: 'auto' }}>
            &copy; {new Date().getFullYear()} Lumina Auto. Crafted with aesthetic vibes.
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
