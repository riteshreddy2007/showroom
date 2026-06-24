import React from 'react';

const Hero = () => {
  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '80vh',
    padding: '2rem 0',
    gap: '4rem',
  };

  const textContent = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  const titleStyle = {
    fontSize: '4rem',
    fontWeight: '800',
    lineHeight: '1.1',
    letterSpacing: '-2px',
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: 'var(--color-text)',
    opacity: '0.8',
    lineHeight: '1.6',
    maxWidth: '500px',
  };

  const buttonStyle = {
    padding: '1rem 2.5rem',
    background: 'var(--color-primary)',
    color: '#fff',
    borderRadius: 'var(--border-radius)',
    fontSize: '1.1rem',
    fontWeight: '600',
    alignSelf: 'flex-start',
    boxShadow: '0 4px 15px rgba(255, 183, 178, 0.4)',
    transition: 'all 0.3s ease',
  };

  const imageContainer = {
    flex: '1.2',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const blobStyle = {
    position: 'absolute',
    width: '400px',
    height: '400px',
    background: 'var(--color-accent)',
    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
    filter: 'blur(60px)',
    opacity: '0.4',
    zIndex: '-1',
    animation: 'float 8s ease-in-out infinite',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '700px',
    borderRadius: '30px',
    boxShadow: 'var(--shadow)',
    objectFit: 'cover',
    aspectRatio: '16/9',
    transition: 'transform 0.5s ease',
  };

  return (
    <section className="container fade-in delay-1" style={sectionStyle}>
      <div style={textContent}>
        <h1 style={titleStyle}>
          Drive the <br />
          <span style={{ color: 'var(--color-secondary)' }}>Aesthetic</span>
        </h1>
        <p style={subtitleStyle}>
          Experience the future of mobility with our curated collection of premium, design-forward vehicles. Embrace the pastel revolution.
        </p>
        <button 
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Explore Models
        </button>
      </div>
      <div style={imageContainer} className="fade-in delay-2">
        <div style={blobStyle}></div>
        <img src="/hero.png" alt="Aesthetic Sports Car" style={imageStyle} />
      </div>
    </section>
  );
};

export default Hero;
