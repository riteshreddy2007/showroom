import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id));

  if (!car) {
    return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Car not found.</div>;
  }

  const containerStyle = {
    display: 'flex',
    gap: '4rem',
    padding: '4rem 0',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const imageContainer = {
    flex: '1',
    minWidth: '300px',
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow)',
  };

  const contentStyle = {
    flex: '1',
    minWidth: '300px',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    background: 'var(--color-secondary)',
    color: '#000',
    borderRadius: 'var(--border-radius)',
    fontSize: '1.1rem',
    fontWeight: '700',
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(169, 222, 249, 0.4)',
    transition: 'all 0.3s ease',
    marginTop: '2rem',
  };

  return (
    <div className="container fade-in delay-1" style={containerStyle}>
      <div style={imageContainer}>
        <img src={car.image} alt={car.name} style={{ width: '100%', display: 'block' }} />
      </div>
      <div style={contentStyle}>
        <div style={{ display: 'inline-block', padding: '5px 15px', background: 'var(--color-accent)', color: '#000', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          {car.tag}
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>{car.name}</h1>
        <h3 style={{ fontSize: '1.5rem', opacity: 0.7, marginBottom: '2rem' }}>{car.type}</h3>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8, marginBottom: '2rem' }}>
          {car.description}
        </p>

        <div style={{ background: 'var(--color-surface)', padding: '1.5rem', borderRadius: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>Top Speed</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>{car.specs.topSpeed}</div>
          </div>
          <div>
            <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>0-60 mph</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>{car.specs.acceleration}</div>
          </div>
          <div>
            <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>Engine</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>{car.specs.engine}</div>
          </div>
          <div>
            <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>Base Price</div>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: '700' }}>{car.price}</div>
          </div>
        </div>

        <Link 
          to={`/checkout/${car.id}`}
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default CarDetails;
