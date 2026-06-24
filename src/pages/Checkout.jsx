import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cars } from '../data/cars';

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(c => c.id === parseInt(id));
  const [success, setSuccess] = useState(false);

  if (!car && !success) {
    return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Car not found.</div>;
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '4rem auto',
    padding: '0 2rem',
  };

  const cardStyle = {
    background: 'var(--color-surface)',
    padding: '3rem',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--shadow)',
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '10px',
    border: '1px solid var(--color-accent)',
    background: 'transparent',
    color: 'var(--color-text)',
    outline: 'none',
    fontSize: '1rem',
  };

  if (success) {
    return (
      <div className="container fade-in delay-1" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Order Confirmed!</h1>
        <p style={{ opacity: 0.8 }}>Thank you for choosing Lumina Auto. Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="container fade-in delay-1" style={containerStyle}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center' }}>Secure Checkout</h1>
      
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <img src={car.image} alt={car.name} style={{ width: '150px', borderRadius: '10px' }} />
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{car.name}</h3>
            <div style={{ fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: '600' }}>{car.price}</div>
          </div>
        </div>

        <form onSubmit={handleCheckout}>
          <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Shipping Details</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input type="text" placeholder="First Name" style={inputStyle} required />
            <input type="text" placeholder="Last Name" style={inputStyle} required />
          </div>
          <input type="text" placeholder="Delivery Address" style={inputStyle} required />
          
          <h4 style={{ margin: '2rem 0 1rem', fontSize: '1.2rem' }}>Payment Information</h4>
          <input type="text" placeholder="Card Number" style={inputStyle} required />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input type="text" placeholder="MM/YY" style={inputStyle} required />
            <input type="text" placeholder="CVC" style={inputStyle} required />
          </div>

          <button 
            type="submit" 
            style={{
              width: '100%', padding: '1rem', background: '#000', color: '#fff',
              border: 'none', borderRadius: '10px', fontSize: '1.1rem', fontWeight: '600',
              cursor: 'pointer', marginTop: '2rem', transition: 'all 0.3s ease'
            }}
          >
            Confirm Purchase - {car.price}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
