import React from 'react'
import Nav from './components/Nav'
import ProducList from './components/ProducList'
import loading from "./assets/loading.gif"

const GaleriadeProductos = ({ cart,productos, cargando, agregarCarrito, borrarProducto }) => {

  
  return (

    <>

      <Nav borrarProducto={borrarProducto} carItems={cart}/>

      <h2 style={{position: "absolute", top: "200px"}}>Productos</h2>

      {
        cargando ? <img src={loading} alt="loading" /> :

          <ProducList agregarCarrito={agregarCarrito} productos={productos} />
      }

    </>

  )

}

export default GaleriadeProductos