import React, { use, useContext, useState } from 'react'
import style from './estatico/producto.module.css'
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const Productos = ({ producto }) => {
  
  const [cantidad, setCantidad] = useState(1);
 
  const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 :
    prev))
    const drecrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

    const {handleAddToCart} = useContext(CartContext)
  
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
          
          <button onClick={()=> handleAddToCart(producto)} className={style.agregar}>Agregar al carrito</button>

          <Link to={`/productos/${producto.id}`}>Ver mas...</Link>

        </div>
      </section>
  )
}

export default Productos