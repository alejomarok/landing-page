import React from 'react'
import './services.css'
import icon1 from './images/globe-americas.png'
import icon2 from './images/cloud-upload-alt.png'
import icon3 from './images/headset.png'
import icon4 from './images/user-friends.png'


const Services = () => {
  return (
    <div className='services'>
    
      <div className='services-textos' >
          <h1 className='services-texto'>Services</h1>
          <h6 className='services-texto-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit possimus consequatur nemo quibusdam, officiis magnam iure, voluptas consequuntur, ipsum rem exercitationem dicta laborum voluptatibus. Odit dolore ipsa quasi nihil.</h6>
      </div>
      <div className='iconos'>
        <div className='icono-imagen-texto'>
            <img src={icon1} alt="icono1" className='icono-imagen' />
            <h4 className='icono-text'>Stet clita kasd gubergren</h4>
        </div>
        <div className='icono-imagen-texto'>
            <img src={icon2} alt="icono2" className='icono-imagen' />
            <h4 className='icono-text'>At vero eos et accusam</h4>
        </div>
        <div className='icono-imagen-texto'>
            <img src={icon3} alt="icono3" className='icono-imagen' />
            <h4 className='icono-text'>Sed ut perspiciatis unde</h4>
        </div>
        <div className='icono-imagen-texto'>
            <img src={icon4} alt="icono4" className='icono-imagen' />
            <h4 className='icono-text'>Lorem ipsum dolor sit amet</h4>
        </div>

      </div>
    </div>
  )
}

export default Services
