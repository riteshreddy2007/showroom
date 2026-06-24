import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';

const CarCard = ({ car }) => {
  const cardStyle = {
    background: 'var(--color-surface)',
    borderRadius: 'var(--border-radius)',
    padding: '1.5rem',
    boxShadow: 'var(--shadow)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textDecoration: 'none',
    color: 'inherit'
  };

  const imageContainer = {
    width: '100%',
    borderRadius: '15px',
    overflow: 'hidden',
    position: 'relative',
    aspectRatio: '16/10',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
  };

  const detailsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <Link 
      to={`/car/${car.id}`}
      style={cardStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
        e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow)';
        e.currentTarget.querySelector('img').style.transform = 'scale(1)';
      }}
    >
      <div style={imageContainer}>
        <div style={{
          position: 'absolute', top: '15px', left: '15px', background: 'rgba(255,255,255,0.8)',
          color: '#000', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem',
          fontWeight: '600', backdropFilter: 'blur(5px)', zIndex: 1
        }}>{car.tag}</div>
        <img src={car.image} alt={car.name} style={imageStyle} />
      </div>
      <div style={detailsStyle}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{car.name}</h3>
          <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '4px' }}>{car.type}</p>
        </div>
        <div style={{ fontSize: '1.2rem', color: 'var(--color-secondary)', fontWeight: '600' }}>{car.price}</div>
      </div>
    </Link>
  );
};

export default CarCard;
