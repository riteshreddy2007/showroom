import React from 'react';
import CarCard from './CarCard';
import { cars } from '../data/cars';

const CarGrid = () => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
    padding: '4rem 0',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
  };

  return (
    <section id="models" className="container fade-in delay-3" style={{ padding: '4rem 2rem' }}>
      <div style={headerStyle}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Featured Models</h2>
        <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Discover our selection of meticulously designed vehicles that blend performance with unparalleled aesthetics.
        </p>
      </div>
      <div style={gridStyle}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarGrid;
