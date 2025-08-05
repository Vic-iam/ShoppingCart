import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import styles from './nav.module.css';
import './estatico/Cart.css'

const Nav = ({carItems, borrarProducto}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false)


    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h2>Talento<span className={styles.tech}>Tech</span></h2>
            </div>

            <button
                className={styles.toggle}
                onClick={() => setMenuOpen(prev => !prev)}
            >
                ☰
            </button>
            

            <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
                <ul>
                    <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                    <li><Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link></li>
                    <li><Link to="/contactos" onClick={() => setMenuOpen(false)}>Contactos</Link></li>
                    <li className='carnav'>
                      <buttom className='btncart' onClick={()=> setCartOpen(true)}><i class="fa-solid fa-cart-shopping"></i></buttom>
                      <Cart borrarProducto={borrarProducto} carItems={carItems} isOpen={isCartOpen} onclose={() => setCartOpen(false)}/>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Nav;