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

  return (
    
    <>
      <Header />
      <section id="home"><Home /></section>
      <section id="aboutus"><About /></section>
      <section id="services"><Services /></section>
      <section id="products"><Products /></section>
      <section id="details"><Details /></section>
      <section id="contact"><Form /></section>
      <Footer />
    </>
  )
}

export default App
