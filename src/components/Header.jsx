import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 0',
  };

  const logoStyle = {
    fontSize: '2rem',
    fontWeight: '800',
    letterSpacing: '-1px',
    color: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const toggleContainer = {
    width: '60px',
    height: '30px',
    borderRadius: '15px',
    background: 'var(--color-surface)',
    boxShadow: 'var(--shadow)',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    transition: 'background 0.3s ease',
  };

  const toggleKnob = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: theme === 'light' ? '#fcd34d' : '#818cf8', // Sun vs Moon colors
    position: 'absolute',
    left: theme === 'light' ? '5px' : '35px',
    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  };

  return (
    <header className="container fade-in" style={headerStyle}>
      <Link to="/" style={logoStyle}>
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
        Lumina
      </Link>
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontWeight: '500' }}>
        <Link to="/" style={{ transition: 'color 0.2s' }}>Home</Link>
        <Link to="/login" style={{ transition: 'color 0.2s' }}>Login</Link>
        <div onClick={toggleTheme} style={toggleContainer} aria-label="Toggle Theme">
          <div style={toggleKnob}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
