import React from 'react'
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/slide1-background.png'
import img2 from './images/slide2-background.png'
import img3 from './images/slide3-background.png'

const Home = () => {
  return (
    <div className='slider'>
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <div className='home-contenido'>
         <h1 className='home-titulos'>Sed ut perspiciatis unde omnis iste natus</h1>
         <h6 className='home-subtitulos'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</h6>
         <button className='home-button'>Read more</button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
      <Carousel.Caption>
        <div className='home-contenido'>
         <h1 className='home-titulos'>Sed ut perspiciatis unde omnis iste natus</h1>
          <h6 className='home-subtitulos'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</h6>
         <button className='home-button'>Read more</button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
      <Carousel.Caption>
      <div className='home-contenido'>
        <h1 className='home-titulos'>Sed ut perspiciatis unde omnis iste natus</h1>
        <h6 className='home-subtitulos'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</h6>
        <button className='home-button'>Read more</button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
  
  )
}

export default Home
