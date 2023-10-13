import React from 'react'
import './footer.css'
import logo from './image/logo_25w.png'
import instagram from './image/instagram.png'
import linkedin from './image/linkedin.png'
import facebook from './image/facebook.png'
import twitter from './image/twitter.png'
import youtube from './image/youtube.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-1'>
         <img className='footer-1-logo' src={logo} alt="logo" />
         <h6 className='footer-1-texto'>2020 © All rights reserved.</h6>
      </div>
      <div className='footer-2'>
        <h6>About</h6>
        <h6>Services</h6>
        <h6>Products</h6>
      </div>
      <div className='footer-3'>
        <h6>Detail</h6>
        <h6>Contact</h6>
      </div>
      <div className='footer-4'>
        <h4 className='footer-4-texto'>Follow us</h4>
        <div className='redes'>
            <img className='redes-logo' src={instagram} alt="" />
            <img className='redes-logo' src={facebook} alt="" />
            <img className='redes-logo' src={twitter} alt="" />
            <img className='redes-logo' src={youtube} alt="" />
            <img className='redes-logo' src={linkedin} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
