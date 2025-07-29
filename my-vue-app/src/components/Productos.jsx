import React from 'react'
import style from './estatico/producto.module.css'

const Productos = ({ producto }) => {
  return (

    <div className={style.container}>

      <section className={style.card}>

        <div className={style.imageContainer}>
          <img className={style.image} src={producto.image} alt='imagen' />
        </div>

        <div className={style.description}>

          <h2 className={style.nombre}> {producto.nombre} </h2>
          <p className={style.price}>{producto.price}</p>
          <p className={style.stock}>{producto.stock}</p>

          <div className={style.cantidadContainer}>
            <button className={style.qtyButton}>-</button>
            <span></span>
            <button className={style.qtyButton}>+</button>
          </div>

          <button className={style.agregar}>Agregar al carrito</button>

        </div>
      </section>
    </div>
  )
}

export default Productos