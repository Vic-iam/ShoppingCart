import React from 'react'
import Style from './nav.module.css'
import { Link } from 'react-router-dom';

function Nav() {
    return (

        <nav className={Style.Navbar}>
            <h2> Talento<span className={Style.Tech}>Tech </span></h2>

            <ul>

                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/contactos">Contactos</Link></li>
            </ul>

        </nav>
    )
}

export default Nav;