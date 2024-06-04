import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <div className='info-num'>
            <span role="img" aria-label="phone">📞</span>
            <p>944 834 644</p>
            <span role="img" aria-label="email">📧</span>
            <p>msaneshuaman@gmail.com</p>
            <span role="img" aria-label="location">📍</span>
            <p> Lima- Peru</p>
          </div>
        </div>
        <div className="copyright">
          © 2024 Mi portafolio
        </div>
      </div>
    </footer>
  );
}

export default Footer;
