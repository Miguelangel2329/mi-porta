// src/components/Contact.tsx
import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => (
  <section className="contact"><br />
    <h2>¿Quieres que te ayudemos a obtener resultados?</h2><br />
    <div className="contact-container">
      <form className="contact-form">
        <div className="form-group">
          <input type="text" name="name" placeholder="Nombre" />
          <input type="text" name="company" placeholder="Empresa" />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="phone" placeholder="Teléfono" />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Mensaje"></textarea>
        </div>
        <div className="form-group">
          <input type="checkbox" name="privacy" id="privacy" />
          <label htmlFor="privacy">Acepto la Política de Privacidad</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>
);

export default Contact;
