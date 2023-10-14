import React from 'react';
import './form.css';
import imagenglobo from './image/image.png';

const Form = () => {
  return (
    <div className='formulario'>
      <div className='form-contenido'>
      <div className='form-text'>
        <h1 className='form-text-1'>Get in touch</h1>
        <h1 className='form-text-2'>We are Hiring!</h1>
      </div>
      <form action="procesar_formulario.php" method="POST">
        <div className="form-group">
          <input type="text" id="nombre" name="nombre" required />
          <span className="input-label">Name</span>
        </div>

        <div className="form-group">
          <input type="email" id="email" name="email" required />
          <span className="input-label">Email</span>
        </div>

        <div className="form-group">
          <input type="tel" id="telefono" name="telefono" required />
          <span className="input-label">Phone</span>
        </div>

        <div className="form-group">
          <textarea id="mensaje" name="mensaje" required></textarea>
          <span className="input-label">Message</span>
        </div>

        <input className='form-boton' type="submit" value="Send" />
      </form>
</div>
      <img src={imagenglobo} className='form-imagen' alt="imagenglobo" />
    </div>
  );
};

export default Form;

