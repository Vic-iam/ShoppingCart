import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Productos from './Login'
import Contactos from './Contactos'
import Home from './Home'


function App() {
  return (
    <>
     <Home />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </>
  )
}

export default App
