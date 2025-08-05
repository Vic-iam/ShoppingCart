import React, { use, useState } from 'react'
import style from './estatico/producto.module.css'

const Productos = ({ producto, agregarCarrito, borrarProducto}) => {
  
  const [cantidad, setCantidad] = useState(1);
 
  const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 :
    prev))
    const drecrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  
  return (


      <section className={style.card}>

        <div className={style.imageContainer}>
          <img className={style.image} src={producto.image} alt='imagen' />
        </div>

        <div className={style.description}>

          <h2 className={style.nombre}> {producto.nombre} </h2>
          <p className={style.price}>${producto.price}</p>
          <p className={style.stock}>{producto.stock}</p>

          <div className={style.cantidadContainer}>
            <button className={style.qtyButton} onClick={drecrease}>-</button>
            <span>{cantidad}</span>
            <button className={style.qtyButton} onClick={increase}>+</button>
          </div>
          
          <button onClick={()=> agregarCarrito(producto)} className={style.agregar}>Agregar al carrito</button>

        </div>
      </section>
  )
}

export default Productos