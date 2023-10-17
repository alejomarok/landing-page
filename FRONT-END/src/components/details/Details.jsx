import React from 'react'
import './details.css'
import imagen1 from './image/anchor.png'
import imagen2 from './image/bandcamp.png'
import imagen3 from './image/bell.png'
import imagen4 from './image/bookmark.png'
import imagen5 from './image/box-open.png'
import imagen6 from './image/brush.png'

const Details = () => {
  return (
    <div className='more-details'>
      <div className='more-details-titulos'>
      <h1 className='more-details-titulos-1' >More details</h1>
      <h6 className='more-details-titulos-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida felis, id tempor ex. Suspendisse congue purus eu neque auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,.</h6>
      </div>


      <div className='more-details-points'>
      <div className='more-details-points-1'>
      <div className='more-details-point'>
        <img src={imagen1} alt="ancla" className='more-details-imagen' />
        <h6 className='more-details-texto'>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</h6>
      </div>
      <div className='more-details-point'>
        <img src={imagen4} alt="" className='more-details-imagen' />
        <h6 className='more-details-texto'>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</h6>
      </div>
      <div className='more-details-point'>
        <img src={imagen6} alt="" className='more-details-imagen' />
        <h6 className='more-details-texto'>Donec egestas tortor quis turpis finibus.</h6>
      </div>
      </div>

      <div className='more-details-points-2'>
      <div className='more-details-point'>
        <img src={imagen3} alt="" className='more-details-imagen'/>
        <h6 className='more-details-texto'>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</h6>
      </div>
      <div className='more-details-point'>
        <img src={imagen2} alt="" className='more-details-imagen'/>
        <h6 className='more-details-texto'>Donec egestas tortor quis turpis finibus.</h6>
      </div>
      <div className='more-details-point'>
        <img src={imagen5} alt="" className='more-details-imagen'/>
        <h6 className='more-details-texto'>Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</h6>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Details
