import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import GaleriadeProductos from './Galeriadeproductos'
import Contactos from './Contactos'
import Home from './Home'
import Login from './Login'


function App() {
  return (
    <>
     
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<GaleriadeProductos/>} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </>
  )
}

export default App
