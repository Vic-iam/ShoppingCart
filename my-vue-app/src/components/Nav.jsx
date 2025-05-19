import React from 'react'
import Style from './nav.module.css'

function Nav() {
    return (

        <nav className={Style.Navbar}>
            <h2> Talento<span className={Style.Tech}>Tech </span></h2>

           <ul>

            <li><a href='#'>Inicio</a></li>
            <li><a href='Productos.jsx'>Productos</a></li>
            <li><a href='Contactos.jsx'>Contactos</a></li>

           </ul>

        </nav>
    )
}

export default Nav;