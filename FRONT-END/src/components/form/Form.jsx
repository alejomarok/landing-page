import React, { useState } from 'react';
import './form.css';
import imagenglobo from './image/image.png';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
    if (event.target.value) {
      event.target.nextElementSibling.style.display = 'none';
    } else {
      event.target.nextElementSibling.style.display = 'block';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!nombre || !email || !telefono || !mensaje) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('El correo electrónico no es válido.');
      return;
    }

  };

  const isValidEmail = (email) => {
    return true; 
  };

  return (
    <div className="formulario">
      <div className="form-contenido">
        <div className="form-text">
          <h1 className="form-text-1">Get in touch</h1>
          <h1 className="form-text-2">We are Hiring!</h1>
        </div>
        <form action="procesar_formulario.php" method="POST" className="formulario-completo">
          <div className="form-group">
            <input
              className="input-field"
              type="text"
              id="nombre"
              name="nombre"
              required
              value={nombre}
              onChange={(event) => handleInputChange(event, setNombre)}
            />
            <span className="input-label">Name</span>
          </div>

          <div className="form-group">
            <input
              className="input-field"
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(event) => handleInputChange(event, setEmail)}
            />
            <span className="input-label">Email</span>
          </div>

          <div className="form-group">
            <input
              className="input-field"
              type="tel"
              id="telefono"
              name="telefono"
              required
              value={telefono}
              onChange={(event) => handleInputChange(event, setTelefono)}
            />
            <span className="input-label">Phone</span>
          </div>

          <div className="form-group">
            <textarea
              className="input-field"
              id="mensaje"
              name="mensaje"
              required
              value={mensaje}
              onChange={(event) => handleInputChange(event, setMensaje)}
            ></textarea>
            <span className="input-label">Message</span>
          </div>

          <div className="error-message">{error}</div>

          <input className="form-boton" type="submit" value="Send" onClick={handleSubmit} />
        </form>
      </div>
      <img src={imagenglobo} className="form-imagen" alt="imagenglobo" />
    </div>
  );
};

export default Form;
