import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Products from './components/products/Products'
import Details from './components/details/Details'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Products />
      <Details />
      <Form />
      <Footer />
    </>
  )
}

export default App
