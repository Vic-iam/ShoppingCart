import React, { useContext } from 'react'
import Nav from './components/Nav'
import ProducList from './components/ProducList'
import loading from "./assets/loading.gif"
import { CartContext } from './components/context/CartContext'

const GaleriadeProductos = () => {
 
  const {cargando} = useContext(CartContext)
  
  return (

    <>

      <Nav />

      <h2 style={{position: "absolute", top: "200px"}}>Productos</h2>

      {
        cargando ? <img src={loading} alt="loading" /> :

          <ProducList />
      }

    </>

  )

}

export default GaleriadeProductos