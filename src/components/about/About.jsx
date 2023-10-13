import React from 'react'
import './about.css'
import imagen from './image/image.png'


const About = () => {
  return (
    <div className='about-us'>
     <frame />
     <img src={imagen} alt="casa" className='imagen-casa' />
     <div className='contenido'>
        <div className='titulos'>
         <h2 className='contenido-texto1'>About us</h2>
         <h2 className='contenido-texto2'>We Help Businesses</h2>
        </div>
        <p className='texto'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
         <button className='about-us-button'>More info</button>
     </div>
   </div>
  )
}

export default About
