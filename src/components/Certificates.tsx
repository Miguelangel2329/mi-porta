// src/components/Certificates.tsx
import React from 'react';
import '../styles/Certificates.css';

const Certificates: React.FC = () => {
  return (
    <div className="certificates">
      <h2>Certificados</h2>
      <div className="certificates-grid">
        <img src={process.env.PUBLIC_URL + '/img/angel.png'} alt="Certificado 1" />
        <img src={process.env.PUBLIC_URL + '/img/Miguel.jpg'} alt="Certificado 1" />
        <img src={process.env.PUBLIC_URL + '/img/software.jpg'} alt="Certificado 1" />
        <img src={process.env.PUBLIC_URL + '/img/transformacion.jpg'} alt="Certificado 1" />
        {/* Agrega más imágenes de certificados aquí */}
      </div>
    </div>
  );
};

export default Certificates;
