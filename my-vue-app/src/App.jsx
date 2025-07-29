import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import GaleriadeProductos from './Galeriadeproductos'
import Contactos from './Contactos'
import Home from './Home'
import Login from './Login'
import productosdata from './data/Productos'


function App() {
 
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

   useEffect(() => { 
    try {
      setProductos(productosdata);
      setCargando(false);
    } catch (error) {
      console.log("Error", error);
      setError(true);
      setCargando(false)
    }
   })


  return (
    <>
     
      <Routes>
        <Route path="/login" element={<Login/>} />

        <Route path="/" element={<Home productos={productos} 
        cargando={cargando} />} />

        <Route path="/productos" element={<GaleriadeProductos/>} />

        <Route path="/contactos" element={<Contactos />} />

      </Routes>
    </>
  )
}

export default App
