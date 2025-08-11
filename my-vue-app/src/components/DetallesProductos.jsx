import React, { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import Nav from "./Nav"
import { CartContext } from "./context/CartContext"
import producto from "../data/Productos"

const DetallesProductos = () => {

  const {productos} = useContext(CartContext);
  const {Id} = useParams();

  const products = productos.find(producto => producto.id == Id)

  if(!producto){
    return(
        <div style={{padding: '2rem', textAlign: 'center'}}>
            <h2 style={{color: '#c00'}}>Detalle del producto</h2>
            <p style={{fontSize: '1.2rem'}}> Producto no encontrado </p>
        </div>
    )
  }

    return(
        <>
        <Nav />

     <section>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333'}}> {productos.nombre} </h1>
        
     </section>

        </>
    )
}

export default DetallesProductos